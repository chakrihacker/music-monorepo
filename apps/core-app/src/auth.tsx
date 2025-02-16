import * as jose from "jose";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

const secret = new TextEncoder().encode(
	"cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2",
);
const alg = "HS256";

export async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface AuthContext {
	isAuthenticated: boolean;
	login: (authData: AuthData) => Promise<void>;
	logout: () => Promise<void>;
	user: AuthData | null;
}

const AuthContext = createContext<AuthContext | null>(null);

const key = "auth.user";

function getStoredUser() {
	const storedData = localStorage.getItem(key);
	return storedData ? JSON.parse(storedData) : null;
}

interface AuthData {
	user: string;
	jwt?: string;
	role: string;
	password?: string;
}

function setStoredUser(authData: AuthData | null) {
	if (authData) {
		localStorage.setItem(key, JSON.stringify(authData));
	} else {
		localStorage.removeItem(key);
	}
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState(getStoredUser());
	const isAuthenticated = !!user;

	const logout = useCallback(async () => {
		await sleep(250);

		setStoredUser(null);
		setUser(null);
	}, []);

	const login = useCallback(async (userData: AuthData) => {
		// Simulate a delay for the login process
		await sleep(500);

		// Generate a JWT token
		const token = await new jose.SignJWT({
			"urn:final:claim": true,
			role: userData.role,
			user: userData.user,
		})
			.setProtectedHeader({ alg })
			.setIssuedAt()
			.setIssuer("urn:finac:issuer")
			.setAudience("urn:finac:audience")
			.setExpirationTime("2h")
			.sign(secret);

		console.log(token);
		userData.jwt = token;

		console.log("Logged in", userData);

		setStoredUser(userData);
		setUser(userData);
	}, []);

	useEffect(() => {
		setUser(getStoredUser());
	}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
