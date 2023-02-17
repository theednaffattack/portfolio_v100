import { listDirectoryContents } from "./util/list-directory-contents";

listDirectoryContents("dist").catch((err) => {
    throw err;
});
