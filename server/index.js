require("dotenv").config();
const connectDB = require("./db/connectDB");
const server = require("./app");

const PORT = process.env.PORT || 3000;

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
