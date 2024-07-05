import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const AddGarden = () => {
  const [gardenName, setGardenName] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [gardenType, setGardenType] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [submittedGardens, setSubmittedGardens] = useState([]);

  const handleAddGarden = (event) => {
    event.preventDefault();
    const newGarden = {
      gardenName,
      location,
      size,
      gardenType,
      description,
      photos
    };
    setSubmittedGardens([...submittedGardens, newGarden]);
    setGardenName('');
    setLocation('');
    setSize('');
    setGardenType('');
    setDescription('');
    setPhotos([]);
  };

  return (
    <SuperAdmin>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-slate-100 shadow-md rounded-lg overflow-hidden">
          <h1 className="text-2xl font-bold text-center bg-[#BC9476] text-white py-4">Add Garden</h1>
          <form onSubmit={handleAddGarden} className="px-6 py-4">

            {/* Garden Name */}
            <div className="mb-4">
              <label htmlFor="gardenName" className="block text-sm font-medium text-gray-700">Garden Name</label>
              <input
                id="gardenName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={gardenName}
                onChange={(e) => setGardenName(e.target.value)}
                required
              />
            </div>

            {/* Location */}
            <div className="mb-4">
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

            {/* Size */}
            <div className="mb-4">
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size (in square meters or acres)</label>
              <input
                id="size"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </div>

            {/* Type of Garden */}
            <div className="mb-4">
              <label htmlFor="gardenType" className="block text-sm font-medium text-gray-700">Type of Garden</label>
              <select
                id="gardenType"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={gardenType}
                onChange={(e) => setGardenType(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="flower">Flower Garden</option>
                <option value="vegetable">Vegetable Garden</option>
                <option value="herb">Herb Garden</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="2"
                required
              ></textarea>
            </div>

            {/* Photos */}
            <div className="mb-4">
              <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Photos</label>
              <input
                id="photos"
                type="file"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setPhotos([...e.target.files])}
                multiple
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add Garden
              </button>
            </div>
          </form>
        </div>

        {/* Display submitted gardens */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Submitted Gardens</h2>
          {submittedGardens.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {submittedGardens.map((garden, index) => (
                <li key={index} className="py-2">
                  <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
                    {garden.photos.length > 0 && (
                      <img
                        src={URL.createObjectURL(garden.photos[0])}
                        alt={garden.gardenName}
                        className="w-[240px] h-[200px] object-cover rounded-md mb-4"
                      />
                    )}
                    <div>
                      <p className="text-lg font-medium">{garden.gardenName}</p>
                      <p className="text-sm text-gray-600">{garden.description}</p>
                      <p className="text-sm text-gray-600">Location: {garden.location}</p>
                      <p className="text-sm text-gray-600">Size: {garden.size}</p>
                      <p className="text-sm text-gray-600">Type: {garden.gardenType}</p>
                    </div>
                    <div className="mt-4 flex justify-center space-x-3">
                      <button className="px-3 py-[6px] bg-blue-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-blue-600 hover:-translate-y-1 focus:ring-2 focus:ring-blue-300">Update</button>
                      <button className="px-3 py-[6px] bg-red-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-red-600 hover:-translate-y-1 focus:ring-2 focus:ring-red-300">Delete</button> 
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 text-center mt-4">No gardens added yet.</p>
          )}
        </div>
      </div>
    </SuperAdmin>
  );
};

export default AddGarden;
