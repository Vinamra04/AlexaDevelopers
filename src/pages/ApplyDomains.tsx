import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const domains = [
  {
    name: "Technical",
    description: "Develop Alexa skills, create innovative voice-based solutions, and explore cutting-edge technologies.",
  },
  {
    name: "Management",
    description: "Organize events, manage projects, and coordinate team activities to ensure smooth operations.",
  },
  {
    name: "Design",
    description: "Create visually appealing graphics, user interfaces, and marketing materials for our projects and events.",
  },
  {
    name: "Content",
    description: "Produce engaging written and visual content for our website, social media, and technical documentation.",
  },
];

const ApplyDomains = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleDomainSelection = (domain: string) => {
    setSelectedDomains(prevState =>
      prevState.includes(domain)
        ? prevState.filter(d => d !== domain)
        : [...prevState, domain]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      ...location.state,
      selectedDomains,
    };
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
    navigate('/');
  };

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Select Your Domains</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 mb-8">
            {domains.map((domain, index) => (
              <div key={index} className="flex items-start bg-light p-4 rounded-lg shadow">
                <input
                  type="checkbox"
                  id={domain.name}
                  name={domain.name}
                  checked={selectedDomains.includes(domain.name)}
                  onChange={() => handleDomainSelection(domain.name)}
                  className="mt-1 mr-4"
                />
                <label htmlFor={domain.name} className="text-secondary">
                  <span className="font-medium text-lg text-primary block mb-1">{domain.name}</span>
                  {domain.description}
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={() => navigate(-1)} className="px-6 py-2 border border-secondary rounded-md text-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Back
            </button>
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyDomains;