import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookingSection = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('Deluxe Room');
  const [ac, setAc] = useState('AC');
  const [beds, setBeds] = useState(1);
  const navigate = useNavigate();

  const handleCheckAvailability = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkInDate,
          checkOutDate,
          guests,
          roomType,
          beds,
          ac,
        }),
      });
      console.log(await response.json());
      if (response.ok) {
        const data = await response.json();
        toast.success("Booking Successful");
        navigate(`/booking-success/${data._id}`);
      } else {
        const errorData = await response.json();
        toast.error('Sorry: ' + errorData.message);
      }
    } catch (error) {
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <section id="booking" className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Stay</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Check-In Date</label>
            <DatePicker
              selected={checkInDate}
              onChange={date => setCheckInDate(date)}
              className="w-full p-2 border rounded-md"
              placeholderText="Select check-in date"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Check-Out Date</label>
            <DatePicker
              selected={checkOutDate}
              onChange={date => setCheckOutDate(date)}
              className="w-full p-2 border rounded-md"
              placeholderText="Select check-out date"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={e => setGuests(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Room Type</label>
            <select
              value={roomType}
              onChange={e => setRoomType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Suite">Suite</option>
              <option value="Standard Room">Standard Room</option>
              <option value="Family Room">Family Room</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Room Category</label>
            <select
              value={ac}
              onChange={e => setAc(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="AC">AC</option>
              <option value="None Ac">None AC</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Number of Beds</label>
            <select
              value={beds}
              onChange={e => setBeds(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
            </select>
          </div>
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="button"
              onClick={handleCheckAvailability}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
