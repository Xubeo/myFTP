export function help(socket) {
    socket.write("USER <username>: check if the user exist.\r\n" +
        "PASS <password>: authenticate the user with a password.\r\n" +
        "LIST: list the current directory of the server.\r\n" +
        "CWD <directory>: change the current directory of the server.\r\n" +
        "RETR <filename>: transfer a copy of the file FILE from the server to the client.\r\n" +
        "STOR <filename>: transfer a copy of the file FILE from the client to the server.\r\n" +
        "PWD: display the name of the current directory of the server.\r\n" +
        "HELP: send helpful information to the client.\r\n" +
        "QUIT: close the connection and stop the program.\r\n");
}