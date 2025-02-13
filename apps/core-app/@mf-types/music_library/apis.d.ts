
    export type RemoteKeys = 'music_library/button';
    type PackageType<T> = T extends 'music_library/button' ? typeof import('music_library/button') :any;