import React from 'react';

const services = [
  {
    id: 1,
    name: 'Free Wi-Fi',
    description: 'Enjoy complimentary high-speed internet access.',
    iconUrl: 'https://plus.unsplash.com/premium_photo-1677345218397-2747d7ac05f4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Spa',
    description: 'Relax and rejuvenate at our full-service spa.',
    iconUrl: 'https://images.unsplash.com/photo-1610289982320-3891f7c9fd6d?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Gym',
    description: 'Stay fit with our state-of-the-art gym facilities.',
    iconUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Pool',
    description: 'Take a dip in our outdoor swimming pool.',
    iconUrl: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 5,
    name: 'Restaurant',
    description: 'Savor delicious meals at our on-site restaurant.',
    iconUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Conference Rooms',
    description: 'Host your events in our well-equipped conference rooms.',
    iconUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden p-4 text-center">
              <img src={service.iconUrl} alt={service.name} className="w-32 h-32 rounded-lg mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
