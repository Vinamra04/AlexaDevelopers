import React from 'react';
import { useLocation } from 'react-router-dom';

const domains = [
  {
    name: "Technical",
    description: "Develop software projects, participate in coding competitions, and explore new technologies.",
  },
  {
    name: "Creatives",
    description: "Design graphics, create user interfaces, and develop engaging content for our projects.",
  },
  {
    name: "Events",
    description: "Organize and manage technical events, workshops, and hackathons.",
  },
  {
    name: "Business",
    description: "Handle project management, marketing, and outreach activities for the club.",
  },
];

const ApplyDomains = () => {
  const location = useLocation();
  const locationState = location.state || {};

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Select a Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {domains.map((domain, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{domain.name}</h3>
              <p>{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyDomains;