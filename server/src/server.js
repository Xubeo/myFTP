import { readFile } from "fs";
import { createServer } from "net";
import { exit } from "process";

const fs = require("fs");

export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);
      switch (command) {
        case "USER": //Check if the given user exist
          const username = JSON.parse(fs.readFileSync("C:/Users/lucas/OneDrive/Bureau/myftp/my-ftp-live/server/src/users.json"));
          let auth = false;
          username.forEach(element => {
            if (element.name == args[0]) {
              auth = true;
            }
          });
          if (auth == true){
            socket.write("This user exist.\r\n");
          }
          else {
            socket.write("This user does not exist");
          }
          break;
        case "PASS": //Check if the password given is the same as the connected user
          const password = JSON.parse(fs.readFileSync("C:/Users/lucas/OneDrive/Bureau/myftp/my-ftp-live/server/src/users.json"));
          let auth_pass = false;
          password.forEach(element => {
            if (element.password == args[0]) {
              socket.write("Same password\r\n");
              auth_pass = true;
            }
            else if (auth_pass == false && element.password != args[0]) {
              socket.write("WRONG\r\n");
            }
          });
          break;
        case "LIST": //List all the files in the current directory
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
          break;
        case "CWD": //Change the actual directory
          try {
            process.chdir(args[0]);
            socket.write(`250,${process.cwd()}\r\n`);
            break;
          }
          catch (err) {
            socket.write("The directory does not exist")
          }
        case "RETR":
          socket.write("Copying the file from the server to the client.\r\n");
          break;
        case "STOR":
          socket.write("Copying the file from the client to the server.\r\n");
          break;
        case "PWD": //Give the actual directory
          socket.write(`257,${process.cwd()}\r\n`);
          break;
        case "HELP": //Give some useful informations
          socket.write("USER <username>: check if the user exist.\r\n" +
            "PASS <password>: authenticate the user with a password.\r\n" +
            "LIST: list the current directory of the server.\r\n" +
            "CWD <directory>: change the current directory of the server.\r\n" +
            "RETR <filename>: transfer a copy of the file FILE from the server to the client.\r\n" +
            "STOR <filename>: transfer a copy of the file FILE from the client to the server.\r\n" +
            "PWD: display the name of the current directory of the server.\r\n" +
            "HELP: send helpful information to the client.\r\n" +
            "QUIT: close the connection and stop the program.\r\n");
          break;
        case "QUIT":
          socket.write("221\r\n");
          socket.write(process.exit());
          break;
        default:
          console.log("command not supported:", command, args);
      }
    });

    socket.write("220 Type HELP to receive helpful information \r\n");
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}