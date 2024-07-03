import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routess from "./components/Routess";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const adminPaths = [
    "/admin", 
    "/admin/dashboard", 
    "/admin/bookings", 
    "/admin/rooms", 
    "/admin/alluser", 
    "/admin/manageroom",
    "/editroom/101"
  ];

  const superAdminPaths = [
    "/superadmin",
    "/superadmin/aminities", 
    "/superadmin/auditorium", 
    "/superadmin/cabs", 
    "/superadmin/food", 
    "/superadmin/garden", 
    "/superadmin/hall", 
    "/superadmin/hotel", 
    "/superadmin/booking", 
    "/superadmin/category", 
    "/superadmin/subcategory", 
    "/superadmin/room", 
    "/superadmin/floor", 
    "/superadmin/invoices", 
    "/superadmin/rating", 
    "/superadmin/subscription"
  ];

  const isRestrictedRoute = adminPaths.includes(location.pathname.toLowerCase()) || superAdminPaths.includes(location.pathname.toLowerCase());

  return (
    <div>
      {!isRestrictedRoute && <Header />}
      <Routess />
      {!isRestrictedRoute && <Footer />}
    </div>
  );
};

export default App;
