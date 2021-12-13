export function pwd(socket) {
    socket.write(`257, ${process.cwd()}\r\n`);
}