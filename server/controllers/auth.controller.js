const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserModel = require("../models/user.model");

async function signupUser(req, res, next) {
  let { name, email, password } = req.body;
  let existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "User already exists.",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  });
  if (createdUser) {
    const token = await jwt.sign(
      { id: createdUser._id },
      process.env.JWT_SECRET
    );
    res.cookie("token", token);
    res.status(201).json({
      message: "User registered successfully.",
      user: {
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } else {
    res.status(400).json({
      message: "Some error occured, try again later.",
    });
  }
}
async function loginUser(req, res, next) {
  let { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({
      message: "Invalid email or password.",
    });
  }
  const isPassValid = await bcrypt.compare(password, existingUser.password);
  if (!isPassValid) {
    return res.status(401).json({
      message: "Invalid email or password.",
    });
  }
  const token = await jwt.sign(
    { id: existingUser._id },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "User logged in successfully.",
    user: {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    },
  });
}
async function logoutUser(req, res, next) {
  if (req.cookies.token) {
    res.clearCookie("token");
    res.status(200).json({
      message: "User logged out successfully.",
    });
  } else {
    res.status(400).json({
      message: "You need to signup or login first.",
    });
  }
}
module.exports = { signupUser, loginUser, logoutUser };
