import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const AddHall = () => {
  const [halls, setHalls] = useState([]); // State for storing halls
  const [formData, setFormData] = useState({
    hallName: '',
    location: '',
    capacity: '',
    amenities: [],
    bookingPrice: '',
    description: '',
    availability: [],
    hallType: '',
    images: [],
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value),
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], ...files],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddHall = (event) => {
    event.preventDefault();
    const newHall = { ...formData };
    setHalls([...halls, newHall]);
    clearFormFields();
  };

  const clearFormFields = () => {
    setFormData({
      hallName: '',
      location: '',
      capacity: '',
      amenities: [],
      bookingPrice: '',
      description: '',
      availability: [],
      hallType: '',
      images: [],
      contactName: '',
      contactPhone: '',
      contactEmail: '',
    });
  };

  const amenitiesOptions = ['Projector', 'Wi-Fi', 'Sound System'];
  const availabilityOptions = ['Available', 'Not Available'];
  const hallTypeOptions = ['Conference Hall', 'Banquet Hall', 'Meeting Room'];

  return (
    <SuperAdmin>
      <div className="container mx-auto p-6 bg-slate-100 min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Add Hall</h1>
          <form onSubmit={handleAddHall}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="hallName" className="block text-sm font-medium text-gray-700">
                  Hall Name
                </label>
                <input
                  type="text"
                  id="hallName"
                  name="hallName"
                  value={formData.hallName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                  Capacity
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Amenities</label>
                {amenitiesOptions.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={amenity}
                      name="amenities"
                      value={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={amenity}>{amenity}</label>
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="bookingPrice" className="block text-sm font-medium text-gray-700">
                  Booking Price
                </label>
                <input
                  type="number"
                  id="bookingPrice"
                  name="bookingPrice"
                  value={formData.bookingPrice}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Availability</label>
                {availabilityOptions.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option}
                      name="availability"
                      value={option}
                      checked={formData.availability.includes(option)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="hallType" className="block text-sm font-medium text-gray-700">
                  Hall Type
                </label>
                <select
                  id="hallType"
                  name="hallType"
                  value={formData.hallType}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                >
                  <option value="">Select Hall Type</option>
                  {hallTypeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                  Images
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                  Contact Phone
                </label>
                <input
                  type="text"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Hall
            </button>
          </form>
        </div>

        {/* Display submitted halls */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Submitted Halls</h2>
          {halls.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {halls.map((hall, index) => (
                <li key={index} className="bg-white shadow-lg rounded-lg p-4">
                  {hall.images.length > 0 && (
                    <img
                      src={URL.createObjectURL(hall.images[0])}
                      alt={hall.hallName}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <div>
                    <p className="text-lg font-medium">{hall.hallName}</p>
                    <p className="text-sm text-gray-600">{hall.location}</p>
                    <p className="text-sm text-gray-600">Capacity: {hall.capacity}</p>
                    <p className="text-sm text-gray-600">Amenities: {hall.amenities.join(', ')}</p>
                    <p className="text-sm text-gray-600">Booking Price: {hall.bookingPrice}</p>
                    <p className="text-sm text-gray-600">Description: {hall.description}</p>
                    <p className="text-sm text-gray-600">Availability: {hall.availability.join(', ')}</p>
                    <p className="text-sm text-gray-600">Hall Type: {hall.hallType}</p>
                    <p className="text-sm text-gray-600">Contact Name: {hall.contactName}</p>
                    <p className="text-sm text-gray-600">Contact Phone: {hall.contactPhone}</p>
                    <p className="text-sm text-gray-600">Contact Email: {hall.contactEmail}</p>
                    <div className="flex justify-end mt-4 gap-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">No halls have been submitted yet.</p>
          )}
        </div>
      </div>
    </SuperAdmin>
  );
};

export default AddHall;
