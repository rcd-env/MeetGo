const Server = require("socket.io").Server;

async function connectToSocket(server) {
  const io = new Server(server);
  return io;
}

module.exports = { connectToSocket };
