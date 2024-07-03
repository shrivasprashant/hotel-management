import React from 'react';

const AddGarden = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Garden</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Garden Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
      </form>
    </div>
  );
};

export default AddGarden;
