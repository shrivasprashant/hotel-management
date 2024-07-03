import React from 'react';
import { Link } from 'react-router-dom';

const SuperAdmin = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Super Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/SuperAdmin/category" className="p-4 bg-orange-500 text-white rounded-lg text-center">
          Create Room Category
        </Link>
        <Link to="/SuperAdmin/subcategory" className="p-4 bg-purple-400 text-white rounded-lg text-center">
          Create Sub Category
        </Link>
        <Link to="/SuperAdmin/floor" className="p-4 bg-green-400 text-white rounded-lg text-center">
          Create Floors
        </Link>
        <Link to="/SuperAdmin/room" className="p-4 bg-blue-400 text-white rounded-lg text-center">
          Create Room Numbers
        </Link>
        <Link to="/SuperAdmin/room" className="p-4 bg-blue-400 text-white rounded-lg text-center">
          Create Rooms
        </Link>
        <Link to="/SuperAdmin/hall" className="p-4 bg-indigo-500 text-white rounded-lg text-center">
          Add Halls
        </Link>
        <Link to="/SuperAdmin/auditorium" className="p-4 bg-green-500 text-white rounded-lg text-center">
          Add Auditorium
        </Link>
        <Link to="/SuperAdmin/garden" className="p-4 bg-purple-500 text-white rounded-lg text-center">
          Add Garden
        </Link>
        <Link to="/SuperAdmin/aminities" className="p-4 bg-blue-500 text-white rounded-lg text-center">
          Add Amenities
        </Link>
        <Link to="/SuperAdmin/booking" className="p-4 bg-pink-500 text-white rounded-lg text-center">
          All Bookings / Manage Bookings
        </Link>
        <Link to="/SuperAdmin/cabs" className="p-4 bg-yellow-500 text-white rounded-lg text-center">
          Add Cabs
        </Link>
        <Link to="/SuperAdmin/food" className="p-4 bg-red-500 text-white rounded-lg text-center">
          Add Food
        </Link>
        <Link to="/SuperAdmin/hotel" className="p-4 bg-teal-500 text-white rounded-lg text-center">
          All Hotels
        </Link>
        <Link to="/SuperAdmin/rating" className="p-4 bg-pink-500 text-white rounded-lg text-center">
        Add Rating & Review
        </Link>
        <Link to="/SuperAdmin/Subscription" className="p-4 bg-yellow-500 text-white rounded-lg text-center">
          Hotel Subscription
        </Link>
        <Link to="/SuperAdmin/invoices" className="p-4 bg-red-500 text-white rounded-lg text-center">
          Hotel Invoices
        </Link>
      </div>
    </div>
  );
};

export default SuperAdmin;
