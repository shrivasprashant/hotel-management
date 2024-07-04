import React from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const AllBookings = () => {
  return (
    <SuperAdmin>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Booking ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Room</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Add booking rows here */}
        </tbody>
      </table>
    </div>
    </SuperAdmin>
  );
};

export default AllBookings;
