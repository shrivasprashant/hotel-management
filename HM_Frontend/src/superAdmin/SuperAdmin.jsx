import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./super.css"
import {
  FaRegBuilding, FaSitemap, FaLayerGroup, FaUniversity, FaDoorClosed, FaAudible,
  FaTree, FaCogs, FaCalendarAlt, FaTaxi, FaUtensils, FaHotel, FaStar,
  FaClipboardList, FaFileInvoiceDollar, FaBars, FaTimes,
  FaDashcube, FaSignOutAlt
} from 'react-icons/fa';

const SuperAdmin = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex overflow-hidden">
      <div className="fixed top-0 left-0 w-full bg-[#BC9476] z-50 flex justify-between items-center p-3 md:hidden">
        <h3 className="text-white font-bold">Super Admin Dashboard</h3>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-hidden pt-12 md:pt-0">
        {children}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={` scroll-wrapper fixed inset-y-0 left-0 w-72 bg-[#BC9476] text-black font-semibold overflow-y-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
      <div className="p-3">
        <h3 className="text-3xl text-center text-white font-bold">Super Admin</h3>
      </div>
      <nav className="flex flex-col px-4 py-1">
        <ul>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-y border-black rounded">
            <Link to="/SuperAdmin/superdashboard" onClick={toggleSidebar}><FaDashcube className="inline mr-3" />Dashboard</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/category" onClick={toggleSidebar}><FaRegBuilding className="inline mr-3" />Create Room Category</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/subcategory" onClick={toggleSidebar}><FaSitemap className="inline mr-3" /> Create Sub Category</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/floor" onClick={toggleSidebar}><FaLayerGroup className="inline mr-3" /> Create Floors</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/room" onClick={toggleSidebar}><FaDoorClosed className="inline mr-3" />Create Rooms</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/hall" onClick={toggleSidebar}><FaUniversity className="inline mr-3" /> Add Halls</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/auditorium" onClick={toggleSidebar}><FaAudible className="inline mr-3" /> Add Auditorium</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/garden" onClick={toggleSidebar}><FaTree className="inline mr-3" />Add Garden</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/aminities" onClick={toggleSidebar}><FaCogs className="inline mr-3" />Add Amenities</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/booking" onClick={toggleSidebar}><FaCalendarAlt className="inline mr-3" />Manage Bookings</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/cabs" onClick={toggleSidebar}><FaTaxi className="inline mr-3" />Add Cabs</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/food" onClick={toggleSidebar}><FaUtensils className="inline mr-3" />Add Food</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/hotel" onClick={toggleSidebar}><FaHotel className="inline mr-3" />All Hotels</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/rating" onClick={toggleSidebar}><FaStar className="inline mr-3" />Add Rating & Review</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/subscription" onClick={toggleSidebar}><FaClipboardList className="inline mr-3" />Hotel Subscription</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="/SuperAdmin/Invoices" onClick={toggleSidebar}><FaFileInvoiceDollar className="inline mr-3" />Hotel Invoices</Link>
          </li>
          <li className="pl-4 py-2 text-start mb-1 hover:scale-105 hover:bg-[#A67C5A] border-b border-black rounded">
            <Link to="#" onClick={toggleSidebar}><FaSignOutAlt className="inline mr-3" />Log Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SuperAdmin;
