const { required } = require("joi");
const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      min: 8,
    },
    googleId: {
      type: String,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
