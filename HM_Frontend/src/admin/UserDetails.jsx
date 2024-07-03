import React, { useEffect, useState } from "react";
import axios from "axios";
import Admin from "./Admin";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/users/all", {
          withCredentials: true,
        });
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter(user =>
      user.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobileNumber.includes(searchTerm)
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <Admin>
      <div className="container bg-sky-100 mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">User Details</h2>
        <input
          type="text"
          placeholder="Search by name, email or mobile number"
          className="w-9/12  mb-6 mx-auto p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="bg-green-500 hover:bg-green-700 text-white ml-4 font-bold py-2 px-4 rounded">Search  </button>


        <div className="overflow-x-auto">
          <table className="min-w-full rounded-md divide-y divide-gray-200">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-1/4 py-3 px-6 text-left text-xm font-medium text-gray-900 uppercase tracking-wider">Name</th>
                <th className="w-1/4 py-3 px-6 text-left text-xm font-medium text-gray-900 uppercase tracking-wider">Email</th>
                <th className="w-1/4 py-3 px-6 text-left text-xm font-medium text-gray-900 uppercase tracking-wider">Mobile</th>
                <th className="w-1/4 py-3 px-6 text-left text-xm font-medium text-gray-900 uppercase tracking-wider">Bookings</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="py-2 px-6 text-sm font-medium text-gray-950">{user.Name}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{user.email}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{user.mobileNumber}</td>
                  <td className="py-2 px-6 text-sm text-gray-700">{user.booking ? user.booking.length : 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Admin>
  );
};

export default UserDetails;
