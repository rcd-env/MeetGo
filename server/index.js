require("dotenv").config();
const connectDB = require("./db/connectDB");
const app = require("./app");
const { connectToSocket } = require("./controllers/socket.controller");
const createServer = require("node:http").createServer;
const Server = require("socket.io").Server;

const PORT = process.env.PORT || 3000;
const server = createServer(app);
const io = connectToSocket(server);

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
