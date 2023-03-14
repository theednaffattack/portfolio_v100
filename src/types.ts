import { Dirent } from "fs-extra";

export type CopyFilesArgsType = {
    srcDir: string;
    destDir: string;
    files: string[];
};

export type CopyDirectoriesArgsType = {
    srcDir: string;
    destDir: string;
    directories: Dirent[] | string[];
};
