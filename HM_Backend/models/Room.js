import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: {
    type: String,
    required: true,
    enum: ["Deluxe Room", "Suite", "Standard Room", "Family Room"],
  },
  status: { type: String, required: true, enum: ["available", "booked"] },
  ac: { type: String, required: true, enum: ["AC", "None Ac"] },
  beds: { type: Number, required: true, min: 1 },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Room = mongoose.model("Room", RoomSchema);
export default Room;
