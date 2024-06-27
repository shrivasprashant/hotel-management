import React, { useState, useEffect } from "react";
import Admin from "./Admin";

const Dashboard = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/register/metrics");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setTotalBookings(data.totalBookings);
      setAvailableRooms(data.availableRooms);
      setRevenue(data.revenue);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  return (
    <Admin>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Bookings</h2>
            <p className="text-2xl">{totalBookings}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Available Rooms</h2>
            <p className="text-2xl">{availableRooms}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl">${revenue}</p>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Dashboard;
