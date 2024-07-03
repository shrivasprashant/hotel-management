import React from 'react';

const CreateRoom = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Room</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Room Number</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select className="mt-1 p-2 w-full border rounded-md">
            <option>Private Room</option>
            <option>Deluxe Room</option>
            <option>Super Deluxe Room</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Sub Category</label>
          <select className="mt-1 p-2 w-full border rounded-md">
            <option>Single Bed</option>
            <option>Double Bed</option>
            <option>Triple Bed</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateRoom;
