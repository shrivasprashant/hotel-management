import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar w-72 bg-gray-300 text-black font-semibold h-full">
      <nav className="flex flex-col p-4">
        <Link to="/SuperAdmin/category" className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-y border-black rounded">
          Create Room Category
        </Link>
        <Link to="/SuperAdmin/subcategory" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Create Sub Category
        </Link>
        <Link to="/SuperAdmin/floor" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Create Floors
        </Link>
        <Link to="/SuperAdmin/room" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Create Room Numbers
        </Link>
        <Link to="/SuperAdmin/room" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Create Rooms
        </Link>
        <Link to="/SuperAdmin/hall" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Halls
        </Link>
        <Link to="/SuperAdmin/auditorium" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Auditorium
        </Link>
        <Link to="/SuperAdmin/garden" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Garden
        </Link>
        <Link to="/SuperAdmin/aminities" className="pl-4 py-2 text-start  hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Amenities
        </Link>
        <Link to="/SuperAdmin/booking" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Manage Bookings
        </Link>
        <Link to="/SuperAdmin/cabs" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Cabs
        </Link>
        <Link to="/SuperAdmin/food" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Food
        </Link>
        <Link to="/SuperAdmin/hotel" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          All Hotels
        </Link>
        <Link to="/SuperAdmin/rating" className="pl-4 py-2 text-start  hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Add Rating & Review
        </Link>
        <Link to="/SuperAdmin/Subscription" className="pl-4 py-2 text-start  hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Hotel Subscription
        </Link>
        <Link to="/SuperAdmin/invoices" className="pl-4 py-2 text-start hover:scale-105  hover:bg-gray-500 border-b border-black mb-1 rounded">
          Hotel Invoices
        </Link>
      </nav>
    </div>
  );
};

const SuperAdmin = () => {
  return (
    <div className="flex">
  <Sidebar />
  <div className="flex-1 p-5 bg-transparent border-b border border-black flex items-start justify-between">
    <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
    <button className="py-2 px-4 mr-3 bg-green-500 font-bold text-white hover:bg-green-700 hover:scale-95 rounded-full">Logout</button>
  </div>
</div>

  
  );
};

export default SuperAdmin;
