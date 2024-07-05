import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const AddCabs = () => {
  const [cabType, setCabType] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [availability, setAvailability] = useState(true); // Assuming default is available
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submittedCabs, setSubmittedCabs] = useState([]);

  const handleAddCab = (event) => {
    event.preventDefault();
    const newCab = {
      cabType,
      registrationNumber,
      driverName,
      contactInfo,
      availability,
      additionalNotes
    };
    // Update the list of submitted cabs
    setSubmittedCabs([...submittedCabs, newCab]);
    // Clear form fields after submission
    setCabType('');
    setRegistrationNumber('');
    setDriverName('');
    setContactInfo('');
    setAvailability(true);
    setAdditionalNotes('');
  };

  return (
    <SuperAdmin>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <h1 className="text-2xl font-bold text-center bg-[#BC9476] text-white py-4">Add Cab</h1>
          <form onSubmit={handleAddCab} className="px-6 py-4">

            {/* Cab Type */}
            <div className="mb-4">
              <label htmlFor="cabType" className="block text-sm font-medium text-gray-700">Cab Type</label>
              <select
                id="cabType"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={cabType}
                onChange={(e) => setCabType(e.target.value)}
                required
              >
                <option value="">Select Cab Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                {/* Add more options for other cab types */}
              </select>
            </div>

            {/* Registration Number */}
            <div className="mb-4">
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
              <input
                id="registrationNumber"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
              />
            </div>

            {/* Driver Name */}
            <div className="mb-4">
              <label htmlFor="driverName" className="block text-sm font-medium text-gray-700">Driver Name</label>
              <input
                id="driverName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                required
              />
            </div>

            {/* Contact Information */}
            <div className="mb-4">
              <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Contact Information</label>
              <input
                id="contactInfo"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                required
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
                <option value="false">Unavailable</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div className="mb-4">
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                id="additionalNotes"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                rows="2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add Cab
              </button>
            </div>
          </form>
        </div>

        {/* Display submitted cabs */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Submitted Cabs</h2>
          {submittedCabs.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {submittedCabs.map((cab, index) => (
                <li key={index} className="py-2">
                  <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
                    <p className="text-lg font-medium">Cab {index + 1}</p>
                    <p className="text-sm text-gray-600">Cab Type: {cab.cabType}</p>
                    <p className="text-sm text-gray-600">Registration Number: {cab.registrationNumber}</p>
                    <p className="text-sm text-gray-600">Driver Name: {cab.driverName}</p>
                    <p className="text-sm text-gray-600">Contact Info: {cab.contactInfo}</p>
                    <p className="text-sm text-gray-600">Availability: {cab.availability ? 'Available' : 'Unavailable'}</p>
                    {cab.additionalNotes && <p className="text-sm text-gray-600">Additional Notes: {cab.additionalNotes}</p>}
                    <div className="mt-4 flex justify-center space-x-3">
                      <button className="px-3 py-[6px] bg-blue-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-blue-600 hover:-translate-y-1 focus:ring-2 focus:ring-blue-300">Update</button>
                      <button className="px-3 py-[6px] bg-red-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-red-600 hover:-translate-y-1 focus:ring-2 focus:ring-red-300">Delete</button> 
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 text-center mt-4">No cabs added yet.</p>
          )}
        </div>

      </div>
    </SuperAdmin>
  );
};

export default AddCabs;
