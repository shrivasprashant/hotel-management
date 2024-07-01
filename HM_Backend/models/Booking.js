import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  GuestName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
  },
  roomType: {
    type: String,
    required: true,
    enum: ['Deluxe Room', 'Suite', 'Standard Room', 'Family Room'],
  },
  beds: {
    type: Number,
    required: true,
    min: 1,
  },
  ac: {
    type: String,
    required: true,
    enum: ['AC', 'None Ac'],
  },
  amount: {
    type: Number,
    required: true,
    min: 0, // Assuming amount can't be negative
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
