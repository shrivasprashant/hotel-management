import React from "react";
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
import EditRoom from "../admin/EditRoom";
import UserDetails from "../admin/UserDetails";
import SuperAdmin from "../superAdmin/SuperAdmin";
import AddAminities from "../superAdmin/AddAminities"
import AddAuditorium from "../superAdmin/AddAuditorium"
import AddCabs from "../superAdmin/AddCabs";
import AddFood from "../superAdmin/AddFood";
import AddGarden from "../superAdmin/AddGarden";
import AddHall from "../superAdmin/AddHall";
import AddHotel from "../superAdmin/AddHotels";
import AllBooking   from "../superAdmin/AllBooking";
import Category from "../superAdmin/Category";
import CreateRoom from "../superAdmin/CreateRoom";
import Floor from "../superAdmin/Floor";
import invoices from "../superAdmin/Invoice";
import Rating from "../superAdmin/Rating&Review"; 
import SubCategory from "../superAdmin/SubCategory";
import Subscription from "../superAdmin/Subscription";
import SuperDashboard from "../superAdmin/superDashboard";


function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bookings" element={<BookingManagement />} />
        <Route path="/admin/manageroom" element={<RoomManagement />} />
        <Route path="/admin/rooms" element={<AddRoom />} />
        <Route path="/admin/alluser" element={<UserDetails/>} />
        <Route path="/editroom/:roomNumber" element={<EditRoom />} />
        <Route path="/SuperAdmin" element={<SuperAdmin />} />
        <Route path="/SuperAdmin/aminities" element={<AddAminities/>} />
        <Route path="/SuperAdmin/auditorium" element={<AddAuditorium/>} />
        <Route path="/SuperAdmin/cabs" element={<AddCabs/>} />
        <Route path="/SuperAdmin/food" element={<AddFood/>} />
        <Route path="/SuperAdmin/garden" element={<AddGarden/>} />
        <Route path="/SuperAdmin/hall" element={<AddHall/>} />
        <Route path="/SuperAdmin/hotel" element={<AddHotel/>} />
        <Route path="/SuperAdmin/booking" element={<AllBooking/>} />
        <Route path="/SuperAdmin/category" element={<Category/>} />
        <Route path="/SuperAdmin/subcategory" element={<SubCategory/>} />
        <Route path="/SuperAdmin/room" element={<CreateRoom/>} />
        <Route path="/SuperAdmin/floor" element={<Floor/>} />
        <Route path="/SuperAdmin/invoices" element={<invoices/>} />
        <Route path="/SuperAdmin/rating" element={<Rating/>} />
        <Route path="/SuperAdmin/subscription" element={<Subscription/>} />
        <Route path="/SuperAdmin/superdashboard" element={<SuperDashboard/>} />
         
      </Routes>
    </div>
  );
}

export default Routess;
