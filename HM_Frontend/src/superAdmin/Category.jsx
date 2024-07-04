import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const Category = () => {
  const [categoryType, setCategoryType] = useState('');
  const [image, setImage] = useState(null);
  const [submittedCategories, setSubmittedCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      categoryType,
      image
    };
    setSubmittedCategories([...submittedCategories, newCategory]);
    setCategoryType('');
    setImage(null);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <SuperAdmin>
      <div className="container h-full border-2 border-black bg-sky-100 mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-4">Category</h1>

        <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl">
          <div className="mb-4">
            <label className="block text-sm sm:text-base lg:text-lg font-medium text-black">Category</label>
            <select
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select a category</option>
              <option>Private Room</option>
              <option>Deluxe Room</option>
              <option>Super Deluxe Room</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700">Image/File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">Add</button>
        </form>

        {submittedCategories.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-1 font-semibold">Submitted Categories</h2>
            {submittedCategories.map((category, index) => (
              <div key={index} className="mb-2 p-4 sm:p-6 lg:p-8 bg-white border border-gray-300 rounded-lg shadow-xl">
                <p><strong>Type:</strong> {category.categoryType}</p>
                {category.image && (
                  <div>
                    <strong>Image/File:</strong>
                    <p>{category.image.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </SuperAdmin>
  );
};

export default Category;
