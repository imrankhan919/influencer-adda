const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please Enter Phone"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
