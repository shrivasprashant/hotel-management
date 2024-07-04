// src/components/SuperAdmin.jsx
import React from "react";
import { Link } from "react-router-dom";

const SuperAdmin = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Header />
        {children}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-72 h-full bg-gray-300 text-black font-semibold">
      <div className="p-4">
        <img
          src="../assets/images/logo.png"
          alt="Logo"
          className="w-8 h-18 rounded-full"
        />
        <h1 className="text-2xl font-bold">Super Admin Panel</h1>
      </div>
      <nav className="flex flex-col p-4">
        <ul>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-y border-black rounded">
            <Link to="/SuperAdmin/category">Create Room Category</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/subcategory">Create Sub Category</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/floor">Create Floors</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/room">Create Rooms</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/hall">Add Halls</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/auditorium">Add Auditorium</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/garden">Add Garden</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/aminities">Add Amenities</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/booking">Manage Bookings</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/cabs">Add Cabs</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/food">Add Food</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/hotel">All Hotels</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/rating">Add Rating & Review</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/subscription">Hotel Subscription</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105  hover:bg-gray-500 border-b border-black rounded">
            <Link to="/SuperAdmin/Invoices">Hotel Invoices</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Super Admin Dashboard</h2>
      <button className="p-2 bg-blue-500 text-white rounded">Logout</button>
    </div>
  );
};

export default SuperAdmin;
