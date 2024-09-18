import React, { useState } from "react";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/Subscription/subscribe', { email });
      setSuccess('Subscription successful!');
      setEmail(''); // Clear the input field
    } catch (error) {
      // Check if the error has a response
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Set error message from server response
      } else {
        setError('Failed to subscribe. Please try again.'); // Fallback error message
      }
    }
  };

  return (
    <div className="bg-green-600 text-white py-10 px-5 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Us Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">About Us</h1>
          <p className="text-sm text-white">
            We are dedicated to providing healthcare and education for all,
            empowering communities to build a sustainable and healthy future.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="text-sm text-white">
            Gurugram, Haryana - 122503, India
          </p>
          <p className="text-sm text-white">
            Email: info@admedusociety.org
          </p>
          <p className="text-sm text-white">
            Phone: +91-9958586721
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Newsletter</h1>
          <p className="text-sm text-white mb-4">
            Subscribe to get updates about our latest activities.
          </p>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md text-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 p-2 rounded-md hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
          {success && <p className="text-green-300 mt-2">{success}</p>}
          {error && <p className="text-red-300 mt-2">{error}</p>}
        </div>
      </div>

      <div className="border-t border-white mt-10">
        <p className="text-center text-sm py-4">
          © 2024 All Rights Reserved : Renu Sharma Healthcare & Education Foundation
        </p>
      </div>
    </div>
  );
};

export default Footer;
