import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routess from "./components/Routess";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const adminPaths = ["/admin","/admin/dashboard","/admin/bookings", "/admin/rooms", "/admin/manageroom"];

  const isAdminRoute = adminPaths.includes(location.pathname);
  return (
    <div>
      {!isAdminRoute && <Header />}
      <Routess />
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
