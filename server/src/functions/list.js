import fs from "fs";

export function list(socket) {
    try {
        let list = "";
        let loc = fs.readdirSync(process.cwd());
        loc.forEach((file) => {
            list += file + "\r\n";
        });
        socket.write("Filenames: \r\n" + list);
    } catch (e) {
        console.log(e);
        socket.write("There was an error while trying to show the filenames of the directory, please try again.\r\n");
    }
}