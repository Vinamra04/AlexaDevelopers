import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleNext = () => {
    setShowForm(false);
    setTimeout(() => {
      navigate('/apply-domains', { state: { name, email } }); // Navigate to the domain information page with state
    }, 300); // Delay to allow the form to disappear smoothly
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {showForm ? (
        <div className="bg-white p-8 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4">Apply</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-0">
          {/* Placeholder for smooth transition */}
        </div>
      )}
    </div>
  );
};

export default Apply;