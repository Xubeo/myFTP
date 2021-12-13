import fs from "fs";

export function pass(args, socket) { //check if the user exist.
    const password = JSON.parse(fs.readFileSync("C:/Users/lucas/OneDrive/Bureau/myftp/my-ftp-live/server/src/users.json"));
    let pass_auth = false;
    password.forEach(element => {
        if (element.password == args) {
            pass_auth = true;
        }
    });
    if (pass_auth == true) {
        socket.write("This is the correct password.\r\n");
    }
    else {
        socket.write("The password and the user does not match, please try again.\r\n");
    }
}