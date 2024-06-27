import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">123 Hotel Street, City, Country</p>
            <p className="mb-2">Phone: +123 456 7890</p>
            <p className="mb-2">Email: info@example.com</p>
            {/* Small map can be added here */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">Rooms</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
              <li className="mb-2"><a href="#">Booking</a></li>
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.63 9.04 8.36 9.8v-6.94H7.5v-2.75h2.86V9.72c0-2.83 1.69-4.38 4.27-4.38 1.23 0 2.54.22 2.54.22v2.8h-1.43c-1.4 0-1.83.87-1.83 1.76v2.12h3.12l-.5 2.75h-2.62V21.8C18.37 21.47 20 17.9 20 14.55c0-2.84-2.41-4.9-5.72-4.9z"
  ></path>
</svg>

              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              className="w-full py-2 px-4 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
