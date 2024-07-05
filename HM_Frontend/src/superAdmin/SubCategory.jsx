import React, { useState, useEffect } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const SubCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch the categories from the localStorage or API
  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(savedCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the subcategory
    setSuccessMessage('Sub Category added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <SuperAdmin>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Sub Category</h1>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.categoryType}>{category.categoryType}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Sub Category Name</label>
            <input
              type="text"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Add
          </button>
        </form>
        {successMessage && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md">
            {successMessage}
          </div>
        )}
      </div>
    </SuperAdmin>
  );
};

export default SubCategory;
