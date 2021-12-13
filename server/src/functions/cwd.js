export function cwd(args, socket) {
    try {
        process.chdir(args);
        socket.write(`250, ${process.cwd()}\r\n`);
    }
    catch (err) {
        socket.write("The directory does not exist")
    }
}