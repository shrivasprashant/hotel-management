import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegBuilding, FaSitemap, FaLayerGroup, FaUniversity, FaDoorClosed, FaAudible,
  FaTree, FaCogs, FaCalendarAlt, FaTaxi, FaUtensils, FaHotel, FaStar,
  FaClipboardList, FaFileInvoiceDollar, FaBars, FaTimes,
  FaDashcube
} from 'react-icons/fa';

const SuperAdmin = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <button
        className="p-3 md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-72 bg-[#BC9476] text-black font-semibold overflow-y-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
      <div className="p-3">
        <img
          src="../assets/images/logo.png"
          alt="Logo"
          className="w-4 h-4 rounded-full"
        />
      </div>
      <nav className="flex flex-col px-4 py-1">
        <ul>
        <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-y border-black rounded">
            <Link to="/SuperAdmin/superdashboard" onClick={toggleSidebar}><FaDashcube className="inline mr-2" />Dashboard</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/category" onClick={toggleSidebar}><FaRegBuilding className="inline mr-2" />Create Room Category</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/subcategory" onClick={toggleSidebar}><FaSitemap className="inline mr-2" /> Create Sub Category</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/floor" onClick={toggleSidebar}><FaLayerGroup className="inline mr-2" /> Create Floors</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/room" onClick={toggleSidebar}><FaDoorClosed className="inline mr-2" />Create Rooms</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/hall" onClick={toggleSidebar}><FaUniversity className="inline mr-2" /> Add Halls</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/auditorium" onClick={toggleSidebar}><FaAudible className="inline mr-2" /> Add Auditorium</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/garden" onClick={toggleSidebar}><FaTree className="inline mr-2" />Add Garden</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/aminities" onClick={toggleSidebar}><FaCogs className="inline mr-2" />Add Amenities</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/booking" onClick={toggleSidebar}><FaCalendarAlt className="inline mr-2" />Manage Bookings</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/cabs" onClick={toggleSidebar}><FaTaxi className="inline mr-2" />Add Cabs</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/food" onClick={toggleSidebar}><FaUtensils className="inline mr-2" />Add Food</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/hotel" onClick={toggleSidebar}><FaHotel className="inline mr-2" />All Hotels</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/rating" onClick={toggleSidebar}><FaStar className="inline mr-2" />Add Rating & Review</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/subscription" onClick={toggleSidebar}><FaClipboardList className="inline mr-2" />Hotel Subscription</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/Invoices" onClick={toggleSidebar}><FaFileInvoiceDollar className="inline mr-2" />Hotel Invoices</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-[#BC9476] items-center px-4 py-3">
      <h2 className="text-3xl font-bold">Super Admin Dashboard</h2>
      <button className="py-2 px-4 font-bold bg-black text-white rounded-xl">Logout</button>
    </div>
  );
};

export default SuperAdmin;
