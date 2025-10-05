require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/connectDB");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
