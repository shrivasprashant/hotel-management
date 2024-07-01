import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
      unique: true
    },
    mobileNumber: {
      type: String,
      default: "",
      unique: true
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);
export default User;
