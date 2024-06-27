import React from 'react';

const offers = [
  {
    id: 1,
    title: 'Summer Getaway',
    description: 'Enjoy a 20% discount on our deluxe rooms this summer.',
    imageUrl: 'https://images.unsplash.com/photo-1615880480697-aa0f93626652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VtbWVyJTIwR2V0YXdheXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    title: 'Spa Package',
    description: 'Relax with our special spa package including treatments and accommodations.',
    imageUrl: 'https://images.unsplash.com/photo-1635868388769-b2c0cd93e52d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Family Fun',
    description: 'Book a family room and get free breakfast for kids.',
    imageUrl: 'https://www.momondo.in/himg/93/be/d8/expediav2-306986-65eda4-947217.jpg',
  },
];

const SpecialOffersSection = () => {
  return (
    <section id="offers" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {offers.map(offer => (
            <div key={offer.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={offer.imageUrl} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-700 mb-4">{offer.description}</p>
                <a href="#" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 inline-block">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
