import fse, { copy } from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { CopyDirectoriesArgsType, CopyFilesArgsType } from "../../types";
import { asyncWrapper } from "./async-wrapper";

// Adapted from: https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export function copyDirectory({ src, dest }: { src: string; dest: string }) {
    // To copy a folder or file, select overwrite accordingly
    try {
        fse.copySync(src, dest, { overwrite: true });
        console.log("success!");
    } catch (err) {
        console.error(err);
    }
}

export async function copyDistToDokkuDeploy({ src = "dist" }: { src: string }) {
    let dest = "dokku-deploy";
    // The script utility folder (location of the caller) is three levels
    // deeper than our "dist" directory...
    const copySource = path.join(__dirname, "..", "..", "..", src);
    const copyDest = path.join(__dirname, "..", "..", "..", dest);

    const [error, data] = await asyncWrapper(fse.readdir, copySource);

    if (error) {
        if (error.code === "ENOENT") {
            throw new Error(
                "The build directory does not exist! Please try running `pnpm build`."
            );
        } else {
            throw error;
        }
    }

    if (!data) {
        throw new Error(
            "There is no list of files to copy. An unknown error has occurred."
        );
    }

    let copyOpts: CopyDirectoriesArgsType = {
        destDir: copyDest,
        directories: data,
        srcDir: copySource,
    };

    console.log("VIEW DATA", data);

    const [errCopyFiles, dataCopyFiles] = await asyncWrapper(
        copyDirectories,
        copyOpts
    );

    if (errCopyFiles) {
        console.error(errCopyFiles);
    }

    if (dataCopyFiles) {
        console.log("Success!");
    }
}

export async function copyFiles({ destDir, files, srcDir }: CopyFilesArgsType) {
    return Promise.allSettled(
        files.map((singleFile) => {
            return fse.copyFile(
                path.join(srcDir, singleFile),
                path.join(destDir, singleFile)
            );
        })
    );
}

export async function copyDirectories({
    destDir,
    directories,
    srcDir,
}: CopyDirectoriesArgsType) {
    console.log("WHAT IS DIRECTORIES???", directories);
    return Promise.allSettled(
        directories.map((singleDir) => {
            return fse.copy(
                path.join(srcDir, singleDir),
                path.join(destDir, singleDir)
            );
        })
    );
}
