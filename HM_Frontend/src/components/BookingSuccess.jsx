import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const BookingSuccess = () => {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/bookings/${bookingId}`
        );
        if (response.ok) {
          const data = await response.json();
          setBookingDetails(data);
        } else {
          toast.error("Failed to fetch booking details.");
        }
      } catch (error) {
        toast.error("Error: " + error.message);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Booking Successful!
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Hello, your booking is confirmed!
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Check-In Date:</strong>{" "}
          {new Date(bookingDetails.checkInDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Check-Out Date:</strong>{" "}
          {new Date(bookingDetails.checkOutDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Guests:</strong> {bookingDetails.guests}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Room Type:</strong> {bookingDetails.roomType}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Number of Beds:</strong> {bookingDetails.beds}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Category:</strong> {bookingDetails.ac}
        </p>
      </div>
    </div>
  );
};

export default BookingSuccess;
