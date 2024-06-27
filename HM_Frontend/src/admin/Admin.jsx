// src/components/AdminLayout.jsx
import React from 'react';
import {  Link } from 'react-router-dom';

const Admin = ({ children }) => {
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
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <img src="../assets/images/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700"><Link to="/admin/dashboard">Dashboard</Link></li>
          <li className="p-4 hover:bg-gray-700"><Link to="/admin/bookings">Manage Bookings</Link></li>
          <li className="p-4 hover:bg-gray-700"><Link to="/admin/manageroom">Manage Rooms</Link></li>
          <li className="p-4 hover:bg-gray-700"><Link to="/admin/rooms">Add Rooms</Link></li>
          <li className="p-4 hover:bg-gray-700"><Link to="/users">Users</Link></li>
          <li className="p-4 hover:bg-gray-700"><Link to="/reservations">Reservations</Link></li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <button className="p-2 bg-blue-500 text-white rounded">Logout</button>
    </div>
  );
};

export default Admin;