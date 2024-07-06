import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const AddAuditorium = () => {
  const [auditoriums, setAuditoriums] = useState([]); // State for storing auditoriums
  const [auditoriumName, setAuditoriumName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [facilities, setFacilities] = useState('');
  const [availability, setAvailability] = useState(true); // Default availability
  const [bookingPrice, setBookingPrice] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [description, setDescription] = useState('');
  const [auditoriumImage, setAuditoriumImage] = useState(null); // Added state for auditorium image

  const handleAddAuditorium = (event) => {
    event.preventDefault();
    const newAuditorium = {
      auditoriumName,
      capacity,
      location,
      facilities,
      availability,
      bookingPrice,
      contactInfo,
      description,
      auditoriumImage, // Added auditoriumImage to newAuditorium object
    };
    setAuditoriums([...auditoriums, newAuditorium]);
    clearFormFields();
  };

  const clearFormFields = () => {
    setAuditoriumName('');
    setCapacity('');
    setLocation('');
    setFacilities('');
    setAvailability(true);
    setBookingPrice('');
    setContactInfo('');
    setDescription('');
    setAuditoriumImage(null);
  };

  return (
    <SuperAdmin>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <h1 className="text-2xl font-bold text-center bg-[#BC9476] text-white py-4">Add Auditorium</h1>
          <form onSubmit={handleAddAuditorium} className="px-6 py-4">

            {/* Auditorium Name */}
            <div className="mb-4">
              <label htmlFor="auditoriumName" className="block text-sm font-medium text-gray-700">Auditorium Name</label>
              <input
                id="auditoriumName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={auditoriumName}
                onChange={(e) => setAuditoriumName(e.target.value)}
                required
              />
            </div>

            {/* Capacity and Location */}
            <div className="flex mb-4 space-x-4">
              {/* Capacity */}
              <div className="flex-1">
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacity</label>
                <input
                  id="capacity"
                  type="number"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                />
              </div>

              {/* Location */}
              <div className="flex-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  id="location"
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <label htmlFor="facilities" className="block text-sm font-medium text-gray-700">Facilities</label>
              <input
                id="facilities"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={facilities}
                onChange={(e) => setFacilities(e.target.value)}
              />
            </div>

            {/* Availability Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Availability Status</label>
              <select
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={availability}
                onChange={(e) => setAvailability(e.target.value === 'true')}
                required
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
            </div>

            {/* Booking Price */}
            <div className="mb-4">
              <label htmlFor="bookingPrice" className="block text-sm font-medium text-gray-700">Booking Price per Hour/Day</label>
              <input
                id="bookingPrice"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={bookingPrice}
                onChange={(e) => setBookingPrice(e.target.value)}
              />
            </div>

            {/* Contact Information */}
            <div className="mb-4">
              <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Contact Information for Management</label>
              <input
                id="contactInfo"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                required
              ></textarea>
            </div>

            {/* Auditorium Image */}
            <div className="mb-4">
              <label htmlFor="auditoriumImage" className="block text-sm font-medium text-gray-700">Upload Images (for showcasing the auditorium)</label>
              <input
                id="auditoriumImage"
                type="file"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setAuditoriumImage(e.target.files[0])}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add Auditorium
              </button>
            </div>
          </form>
        </div>

        {/* Display submitted auditoriums */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Submitted Auditoriums</h2>
          {auditoriums.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {auditoriums.map((auditorium, index) => (
                <li key={index} className="py-2">
                  <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
                    {auditorium.auditoriumImage && (
                      <img
                        src={URL.createObjectURL(auditorium.auditoriumImage)}
                        alt={auditorium.auditoriumName}
                        className="w-[240px] h-[200px] object-cover rounded-md mb-4"
                      />
                    )}
                    <div>
                      <p className="text-lg font-medium">{auditorium.auditoriumName}</p>
                      <p className="text-sm text-gray-600">Capacity: {auditorium.capacity}</p>
                      <p className="text-sm text-gray-600">Location: {auditorium.location}</p>
                      <p className="text-sm text-gray-600">Availability: {auditorium.availability ? 'Available' : 'Not Available'}</p>
                      <div className="mt-4 flex justify-center space-x-3">
                        <button className="px-3 py-[6px] bg-blue-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-blue-600 hover:-translate-y-1 focus:ring-2 focus:ring-blue-300">Edit</button>
                        <button className="px-3 py-[6px] bg-red-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-red-600 hover:-translate-y-1 focus:ring-2 focus:ring-red-300">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 text-center mt-4">No auditoriums added yet.</p>
          )}
        </div>

      </div>
    </SuperAdmin>
  );
};

export default AddAuditorium;
