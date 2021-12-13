export function quit(socket) {
    socket.write("221, closing the application\r\n");
    socket.write(process.exit());
}