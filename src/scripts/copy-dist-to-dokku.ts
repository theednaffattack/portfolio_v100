import { copyDistToDokkuDeploy } from "./util/copy-directory";

// export function listFiles() {
//     copyDistToDokkuDeploy({ src: "/dist" });
// }

copyDistToDokkuDeploy({ src: "/dist" })
    .catch((err) => {
        throw new Error(err);
    })
    .then((data) => data);
