
    export type RemoteKeys = 'music_library/songs-list';
    type PackageType<T> = T extends 'music_library/songs-list' ? typeof import('music_library/songs-list') :any;