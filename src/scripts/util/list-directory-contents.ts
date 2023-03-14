import fse, { Dirent } from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export async function listDirectoryContents(src: string) {
    const copySource = path.join(__dirname, "..", "..", "..", src);
    // const copyDest = path.join(__dirname, "..", "..", "..", dest);

    let fileList: Dirent[];
    let directoryList: Dirent[];

    try {
        fileList = await fse.readdir(copySource, { withFileTypes: true });
    } catch (error) {
        throw error;
    }

    console.log("VIEW FILE LIST", fileList);
}
