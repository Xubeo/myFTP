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
      switch(command) {
        case "USER":
          const username = JSON.parse(fs.readFileSync("C:/Users/lucas/OneDrive/Bureau/myftp/my-ftp-live/server/src/users.json","utf-8"));
          
          username.forEach(element => { 
            if (element.name == args[0]){
              socket.write("Connected");
              }
               else{
              socket.write("Disconnected");
              }

          });
          socket.write("230 User logged in, proceed.\r\n");
          break;
        case "PASS":
          const password = JSON.parse(fs.readFileSync("C:/Users/lucas/OneDrive/Bureau/myftp/my-ftp-live/server/src/users.json","utf-8"));

          password.forEach(element => {
            if (element.password == args[1]){
              socket.write("Connected");
            }
            else{
              socket.write("Disconnected");
            }
          });
          socket.write("HDUOEZIJFUH")
          break;
        case "LIST":
          break;
        case "CWD":
          try {
          process.chdir(args[0]);
          socket.write(`250,${process.cwd()}\r\n`);
          break;
          }
          catch(err){
            socket.write("The directory does not exist")
          }
        case "RETR":
          break;
        case "STOR":
          break;
        case "PWD":
          socket.write(`257,${process.cwd()}\r\n`);
          break;
        case "HELP":
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
