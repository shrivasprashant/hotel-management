import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const Category = () => {
  const [categoryType, setCategoryType] = useState('');
  const [image, setImage] = useState(null);
  const [submittedCategories, setSubmittedCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      categoryType,
      image
    };
    setSubmittedCategories([...submittedCategories, newCategory]);
    setCategoryType('');
    setImage(null);
    setSuccessMessage('Category added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <SuperAdmin>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Category</h1>

        <form onSubmit={handleSubmit} className="bg-slate-200 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="categoryType">
              Category
            </label>
            <select
              id="categoryType"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              <option>Private Room</option>
              <option>Deluxe Room</option>
              <option>Super Deluxe Room</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image/File
            </label>
            <input
              id="image"
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Add
          </button>
        </form>

        {successMessage && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md">
            {successMessage}
          </div>
        )}

        {submittedCategories.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Submitted Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {submittedCategories.map((category, index) => (
                <div key={index} className="p-4 bg-slate-100 border border-gray-200 rounded-lg shadow-sm">
                  <p className="text-sm sm:text-base lg:text-lg"><strong>Type:</strong> {category.categoryType}</p>
                  {category.image && (
                    <div className="mt-2">
                      <strong>Image:</strong>
                      <img
                        src={URL.createObjectURL(category.image)}
                        alt="uploaded"
                        className="mt-2 w-80 h-52 object-cover rounded-md border border-gray-300"
                      />
                     <div className="mt-2 flex justify-center space-x-4">
  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-blue-600 hover:-translate-y-1 focus:ring-2 focus:ring-blue-300">Update</button>
  <button className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md transition-transform transform hover:bg-red-600 hover:-translate-y-1 focus:ring-2 focus:ring-red-300">Delete</button> 
</div>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SuperAdmin>
  );
};

export default Category;
