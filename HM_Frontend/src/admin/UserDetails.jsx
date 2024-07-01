import React, { useEffect, useState } from "react";
import axios from "axios";
import Admin from "./Admin";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/users/all", {
          withCredentials: true,
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <Admin>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-zinc-900">User Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {users.map((user) => (
            <div key={user._id} className="bg-slate-300 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-shadow duration-200">
              {/* <img
                src={user.profilePhoto}
                alt={user.Name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-indigo-600"
              /> */}
              <h3 className="text-xl font-semibold mb-2 text-center">{user.Name}</h3>
              <p className="text-gray-700 mb-2 text-center">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700 mb-2 text-center">
                <strong>Mobile:</strong> {user.mobileNumber}
              </p>
              <p className="text-gray-700 mb-2 text-center">
                <strong>Bookings:</strong> {user.booking ? user.booking.length : 0}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Admin>
  );
};

export default UserDetails;
