import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';
const SuperAdminProfile = () => {
  const [fullName, setFullName] = useState('Basant Meena');
  const [email, setEmail] = useState('mbasant805@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('6268738997');
  const [role, setRole] = useState('Super Admin');
  const [profilePicture, setProfilePicture] = useState('');

  const handleUpdate = () => {
    alert('Profile updated!');
  };

  const handleLogout = () => {
    alert('Logged out!');
  };

  const handleDelete = () => {
    alert('Profile deleted!');
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <SuperAdmin>
    <div className="max-w-2xl mx-auto p-6 bg-slate-200 shadow-2xl rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Super Admin Profile</h1>
      <div className="flex flex-col items-center mb-6">
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" className="w-32 h-32 object-cover border-black border-2 border-solid rounded-full mb-4" />
        ) : (
          <div className="w-32 h-32 bg-gray-200 object-cover rounded-full mb-4 flex items-center justify-center">
            Profile Picture
          </div>
        )}
        <input type="file" onChange={handlePictureChange} className="text-center" />
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-around mt-6">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={handleLogout}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Logout
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
    </SuperAdmin>
  );
};

export default SuperAdminProfile;
