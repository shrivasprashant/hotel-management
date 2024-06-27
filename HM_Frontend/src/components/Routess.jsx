import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import ContactUsPage from "./ContactUsPage";
import BookingSuccess from "./BookingSuccess";
import Dashboard from "../admin/Dashboard";
import BookingManagement from "../admin/BookingManagement";
import RoomManagement from "../admin/RoomManagement";
import Admin from "../admin/Admin";
import AddRoom from "../admin/AddRoom";


function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/bookings" element={<BookingManagement/>} />
        <Route path="/admin/manageroom" element={<RoomManagement/>} />
        <Route path="/admin/rooms" element={<AddRoom/>} />
      </Routes>
    </div>
  );
}

export default Routess;