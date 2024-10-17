import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyNow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.name && formData.email) {
      navigate('/apply/domains', { state: formData });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="fixed bottom-4 right-4 btn-primary"
      >
        Apply Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-primary bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-primary">Apply to Join Alexa Developers SRM</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-secondary">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-secondary">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={toggleModal} className="px-4 py-2 border border-secondary rounded-md text-sm font-medium text-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                  Cancel
                </button>
                <button type="button" onClick={handleNext} className="btn-secondary">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyNow;