import RoomModel from "../models/Room.js";
import BookingModel from "../models/Booking.js";

export const registerroom = async (req, res) => {
  const { roomNumber, type, status, beds, ac, amount } = req.body;
  try {
    const newRoom = new RoomModel({
      roomNumber,
      type,
      status,
      beds,
      ac,
      amount,
    });
    await newRoom.save();
    res.status(201).send(newRoom);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const Checkavailability = async (req, res) => {
  try {
    const availableRooms = await RoomModel.find({ status: "available" });
    res.status(200).send(availableRooms);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const updateRoomStatus = async (req, res) => {
  const { roomNumber } = req.params;
  const { status } = req.body;

  try {
    const updatedRoom = await RoomModel.findOneAndUpdate(
      { roomNumber },
      { status },
      { new: true } // This option returns the updated document
    );

    if (!updatedRoom) {
      return res.status(404).send({ message: "Room not found" });
    }

    res.status(200).send(updatedRoom);
  } catch (err) {
    res.status(400).send(err);
  }
};
// New function to fetch all rooms
export const fetchAllRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find();
    res.status(200).send(rooms);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const fetchMetrics = async (req, res) => {
  try {
    const totalBookings = await BookingModel.countDocuments();
    const availableRooms = await RoomModel.countDocuments({
      status: "available",
    });
    const revenue = await BookingModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$amount" }, // Assuming your Booking model has an "amount" field
        },
      },
    ]);

    res.status(200).send({
      totalBookings,
      availableRooms,
      revenue: revenue[0]?.totalRevenue || 0,
    });
  } catch (err) {
    console.error("Error fetching metrics:", err); // Log the error for debugging
    res.status(400).send(err);
  }
};

export const updateRoomDetails = async (req, res) => {
  const { roomNumber } = req.params;
  const { type, status, beds, ac, amount } = req.body;

  try {
    const updatedRoom = await RoomModel.findOneAndUpdate(
      { roomNumber },
      { type, status, beds, ac, amount },
      { new: true } // This option returns the updated document
    );

    if (!updatedRoom) {
      return res.status(404).send({ message: "Room not found" });
    }

    res.status(200).send(updatedRoom);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const deleteRoom = async (req, res) => {
  const { roomNumber } = req.params;

  try {
    const deletedRoom = await RoomModel.findOneAndDelete({ roomNumber });

    if (!deletedRoom) {
      return res.status(404).send({ message: "Room not found" });
    }

    res.status(200).send({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const findRoomByRoomNumber = async (req, res) => {
  try {
    const room = await RoomModel.findOne({ roomNumber: req.params.roomNumber });
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
