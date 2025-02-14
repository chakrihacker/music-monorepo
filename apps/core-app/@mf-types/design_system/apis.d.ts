
    export type RemoteKeys = 'design_system/button' | 'design_system/searchbar';
    type PackageType<T> = T extends 'design_system/searchbar' ? typeof import('design_system/searchbar') :T extends 'design_system/button' ? typeof import('design_system/button') :any;