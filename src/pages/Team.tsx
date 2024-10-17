import React from 'react';

const teamMembers = [
  { name: 'John Doe', role: 'President', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Jane Smith', role: 'Vice President', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Mike Johnson', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Sarah Brown', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'David Lee', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Emily Chen', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const Team = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-light rounded-lg shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{member.name}</h3>
                <p className="text-secondary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;