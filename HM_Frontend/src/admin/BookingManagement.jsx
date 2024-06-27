import React, { useState, useEffect } from "react";
import Admin from "./Admin";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch bookings from API
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    // Replace with your API call
    const response = await fetch("/api/bookings");
    const data = await response.json();
    setBookings(data);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.roomType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Admin>
      <div className="p-6 bg-red-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by guest name or room type"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-md w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredBookings.map((booking) => (
            <div key={booking._id} className="p-4 border rounded-md shadow">
              <p>
                <strong>Guest Name:</strong> {booking.guestName}
              </p>
              <p>
                <strong>Room Type:</strong> {booking.roomType}
              </p>
              <p>
                <strong>Check-In Date:</strong>{" "}
                {new Date(booking.checkInDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Check-Out Date:</strong>{" "}
                {new Date(booking.checkOutDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {booking.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Admin>
  );
};

export default BookingManagement;
