import { createServer } from "net";
import { user } from "./functions/user";
import { list } from "./functions/list";
import { cwd } from "./functions/cwd";
import { pwd } from "./functions/pwd";
import { help } from "./functions/help";
import { quit } from "./functions/quit";
import { pass } from "./functions/pass";

export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);
      switch (command) {
        case "USER": //Check if the given user exist
          user(args[0], socket);
          break;
        case "PASS": //Check if the password given is the same as the connected user
          pass(args[0], socket);
          break;
        case "LIST": //List all the files in the current directory
          list(socket);
          break;
        case "CWD": //Change the actual directory
          cwd(args[0], socket);
          break;
        case "RETR":
          socket.write("Copying the file from the server to the client.\r\n");
          break;
        case "STOR":
          socket.write("Copying the file from the client to the server.\r\n");
          break;
        case "PWD": //Give the actual directory
          pwd(socket);
          break;
        case "HELP": //Give some useful informations
          help(socket);
          break;
        case "QUIT":
          quit(socket);
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