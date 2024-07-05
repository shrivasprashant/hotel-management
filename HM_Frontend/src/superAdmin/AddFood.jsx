import React, { useState } from 'react';
import SuperAdmin from '../superAdmin/SuperAdmin';

const AddFood = () => {
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState(null); // Added state for food image
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true); // Assuming default is available
  const [schedule, setSchedule] = useState('');
  const [submittedFoods, setSubmittedFoods] = useState([]);

  const handleAddFood = (event) => {
    event.preventDefault();
    const newFood = {
      foodName,
      foodImage, // Added foodImage to newFood object
      category,
      description,
      price,
      available,
      schedule
    };
    // Update the list of submitted foods
    setSubmittedFoods([...submittedFoods, newFood]);
    // Clear form fields after submission
    setFoodName('');
    setFoodImage(null);
    setCategory('');
    setDescription('');
    setPrice('');
    setAvailable(true);
    setSchedule('');
  };

  return (
    <SuperAdmin>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <h1 className="text-2xl font-bold text-center bg-[#BC9476] text-white py-4">Add Food</h1>
          <form onSubmit={handleAddFood} className="px-6 py-4">

            {/* Food Name */}
            <div className="mb-4">
              <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">Food Name</label>
              <input
                id="foodName"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                required
              />
            </div>

            {/* Food Image */}
            <div className="mb-4">
              <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">Food Image</label>
              <input
                id="foodImage"
                type="file"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setFoodImage(e.target.files[0])}
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="appetizer">Appetizer</option>
                <option value="beverage">Beverage</option>
                <option value="brunch">Brunch</option>
                <option value="buffet">Buffet</option>
                <option value="dessert">Dessert</option>
                <option value="high tea">High Tea</option>
                <option value="main course">Main Course</option>
                <option value="snack">Snack</option>
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

            {/* Price */}
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (INR)</label>
              <input
                id="price"
                type="number"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            {/* Availability Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Availability Status</label>
              <select
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={available}
                onChange={(e) => setAvailable(e.target.value === 'true')}
                required
              >
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            </div>

            {/* Schedule Availability */}
            <div className="mb-4">
              <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">Schedule Availability</label>
              <input
                id="schedule"
                type="text"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add Food
              </button>
            </div>
          </form>
        </div>

        {/* Display submitted foods */}
        <div className="mt-6">
  <h2 className="text-xl font-bold mb-2">Submitted Foods</h2>
  {submittedFoods.length > 0 ? (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {submittedFoods.map((food, index) => (
      <li key={index} className="py-2">
        <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
          {food.foodImage && (
            <img
              src={URL.createObjectURL(food.foodImage)}
              alt={food.foodName}
              className="w-[240px] h-[200px] object-cover rounded-md mb-4"
            />
          )}
          <div>
            <p className="text-lg font-medium">{food.foodName}</p>
            <p className="text-sm text-gray-600">{food.description}</p>
            <p className="text-sm text-gray-600">Category: {food.category}</p>
            <p className="text-sm text-gray-600">Price: ₹{food.price}</p>
            <p className="text-sm text-gray-600">
              Availability: {food.available ? 'Available' : 'Unavailable'}
            </p>
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
  <p className="text-sm text-gray-600 text-center mt-4">No foods added yet.</p>
)}

</div>

      </div>
    </SuperAdmin>
  );
};

export default AddFood;
