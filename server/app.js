const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const MyError = require("./utils/MyError");

// routers
const authRouter = require("./routes/auth.route");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Lessgoooo..." });
});

app.use("/api/v1/auth", authRouter);

app.use("*path", (req, res, next) => {
  next(new MyError(404, "Route not found."));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Internal Server Error" } = err;
  if (status === 404) err.stack = null;
  res.status(status).json({
    status,
    message,
    error: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

module.exports = app;
