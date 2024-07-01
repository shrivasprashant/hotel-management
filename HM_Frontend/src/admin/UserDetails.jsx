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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Admin>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={user.profilePhoto}
                alt={user.Name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{user.Name}</h3>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Mobile:</strong> {user.mobileNumber}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Bookings:</strong>{" "}
                {user.booking ? user.booking.length : 0}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Admin>
  );
};

export default UserDetails;
