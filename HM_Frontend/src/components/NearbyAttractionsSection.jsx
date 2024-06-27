import React from 'react';

const attractions = [
  {
    id: 1,
    name: 'Local Park',
    description: 'A serene park perfect for picnics and outdoor activities.',
    distance: '0.5 miles',
    imageUrl: 'https://images.unsplash.com/photo-1564409972016-2825589beaed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Museum of Art',
    description: 'Explore historical artifacts and modern art exhibitions.',
    distance: '1 mile',
    imageUrl: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Shopping Center',
    description: 'A hub of shops, restaurants, and entertainment venues.',
    distance: '0.8 miles',
    imageUrl: 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const NearbyAttractionsSection = () => {
  return (
    <section id="attractions" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Nearby Attractions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map(attraction => (
            <div key={attraction.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                <p className="text-gray-700 mb-2">{attraction.description}</p>
                <p className="text-gray-600">{attraction.distance} away</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractionsSection;
