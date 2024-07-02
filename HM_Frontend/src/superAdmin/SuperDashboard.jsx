import React from 'react';

const SuperDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Super Admin Panel</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Room Categories</h2>
            <ul className="space-y-2">
              <li>Private Room (with AC)</li>
              <li>Deluxe Room (with AC or without AC)</li>
              <li>Super Deluxe Room (without AC)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Room Subcategories</h2>
            <ul className="space-y-2">
              <li>Single Bed</li>
              <li>Double Bed</li>
              <li>Triple Bed</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Other Sections</h2>
            <ul className="space-y-2">
              <li>Floors</li>
              <li>Room Numbers</li>
              <li>Rooms</li>
              <li>Booking Halls</li>
              <li>Auditorium</li>
              <li>Garden</li>
              <li>Amenities (Swimming Pool, TV, etc.)</li>
              <li>All Bookings / Manage Bookings</li>
              <li>Cabs</li>
              <li>Food</li>
              <li>Hotels</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuperDashboard;
