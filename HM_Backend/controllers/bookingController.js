import Booking from '../models/Booking.js';
import Room from '../models/Room.js';

export const bookroom = async (req, res) => {
  const { checkInDate, checkOutDate, guests, roomType, beds, ac } = req.body;

  try {
    const availableRooms = await Room.find({
      type: roomType,
      beds,
      status: 'available',
      ac,
    });

    if (availableRooms.length === 0) {
      return res.status(400).json({ message: 'No available rooms of this type, configuration, and AC status' });
    }

    const overlappingBookings = await Booking.find({
      roomType,
      beds,
      ac,
      $or: [
        {
          checkInDate: { $lt: new Date(checkOutDate) },
          checkOutDate: { $gt: new Date(checkInDate) },
        },
        {
          checkInDate: { $gte: new Date(checkInDate), $lt: new Date(checkOutDate) },
        },
        {
          checkOutDate: { $gt: new Date(checkInDate), $lte: new Date(checkOutDate) },
        },
      ],
    });

    const availableCount = availableRooms.length - overlappingBookings.length;

    if (availableCount > 0) {
      // Fetch amount from the available room
      const selectedRoom = availableRooms[0];
      const amount = selectedRoom.amount; // Assuming amount is stored in the Room model

      const newBooking = new Booking({
        checkInDate,
        checkOutDate,
        guests,
        roomType,
        beds,
        ac,
        amount,
        room: selectedRoom._id,
      });

      // Update the room status to 'booked'
      await Room.updateOne(
        { _id: selectedRoom._id },
        { status: 'booked' }
      );

      await newBooking.save();
      res.status(201).json(newBooking);
    } else {
      res.status(400).json({ message: 'Room not available for the selected dates' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again later', error: error.message });
  }
};

export const allbooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const singlebookingbyId = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
