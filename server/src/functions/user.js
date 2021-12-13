import fs from "fs";

export function user(args, socket) { //check if the user exist.
    const username = JSON.parse(fs.readFileSync("C:/Users/lucas/OneDrive/Bureau/myftp/my-ftp-live/server/src/users.json"));
    let auth = false;
    username.forEach(element => {
        if (element.name == args) {
            auth = true;
        }
    });
    if (auth == true) {
        socket.write("331 This user exist.\r\n");
    }
    else {
        socket.write("This user does not exist\r\n");
    }
}