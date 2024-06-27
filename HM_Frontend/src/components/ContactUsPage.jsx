import React from 'react';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md focus:outline-none">Submit</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-2">123 Hotel Street</p>
            <p className="mb-2">City, Country</p>
            <p className="mb-2">Phone: +123 456 7890</p>
            <p className="mb-2">Email: info@example.com</p>
            {/* You can add a map component or embed map here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
