import React from 'react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'A spacious room with a king-sized bed, ensuite bathroom, and stunning views.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661880010603-28d31dc051d3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Suite',
    description: 'An elegant suite with a separate living area, luxurious amenities, and beautiful decor.',
    imageUrl: 'https://images.unsplash.com/photo-1565623833408-d77e39b88af6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Standard Room',
    description: 'A comfortable room with a queen-sized bed, modern furnishings, and a cozy atmosphere.',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Family Room',
    description: 'A spacious room ideal for families, featuring multiple beds and ample space for everyone.',
    imageUrl: 'https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const RoomsAndSuitesSection = () => {
  return (
    <section id="rooms" className="bg-[#9c9a9a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Rooms and Suites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {rooms.map(room => (
            <div key={room.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={room.imageUrl} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-gray-700 mb-4">{room.description}</p>
                <a href="#" className="text-indigo-600 hover:text-white bg-white hover:bg-indigo-600 border border-blue-500 px-2 py-2 rounded-lg font-semibold">View Details</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">
            See All Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoomsAndSuitesSection;
