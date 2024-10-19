import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const teamMembers = [
  { name: 'John Doe', role: 'President', category: 'Core', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'John is the President and co-founder of the company.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Jane Smith', role: 'Vice President', category: 'Core', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Jane oversees operations and strategy.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Mike Johnson', role: 'Technical Lead', category: 'Heads', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Mike leads the technical team and development efforts.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Sarah Brown', role: 'Event Coordinator', category: 'Heads', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Sarah coordinates all major company events.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'David Lee', role: 'Marketing Lead', category: 'Leads', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'David is in charge of marketing and outreach.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Emily Chen', role: 'Content Creator', category: 'Leads', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Emily creates engaging content for our audience.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Jake Williams', role: 'Sales Lead', category: 'Leads', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Jake drives the company’s sales strategies and growth.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Olivia Walker', role: 'Chief Financial Officer', category: 'Executives', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Olivia manages the financial operations of the company.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Liam Anderson', role: 'Chief Operations Officer', category: 'Executives', image: 'https://images.unsplash.com/photo-1550418290-a8d86ad67468?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Liam oversees day-to-day operations.', socials: { linkedin: '#', twitter: '#' }},
  { name: 'Sophia Martinez', role: 'Chief Technology Officer', category: 'Executives', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Sophia drives the technology and product development.', socials: { linkedin: '#', twitter: '#' }},
];

const imageUrls = [
  '/images/club.png',
  '/images/team_members.png',
  '/images/team_members2.jpg',
  '/images/team_members3.jpg',
  
   // Add a third image
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalAnimation, setModalAnimation] = useState('hidden');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handleMemberClick = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    setModalAnimation('fade-in'); // Add fade-in class when modal opens
  };

  const closeModal = () => {
    setModalAnimation('fade-out'); // Add fade-out class when modal closes
    setTimeout(() => setSelectedMember(null), 300); // Delay removal to allow animation
  };

  const renderTeamMembersByCategory = (category: string) => {
    return teamMembers
      .filter((member) => member.category === category)
      .map((member, index) => (
        <div
          key={index}
          className="bg-light rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
          onClick={() => handleMemberClick(member)}
        >
          <img src={member.image} alt={member.name} className="w-full h-36 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-primary">{member.name}</h3>
            <p className="text-secondary">{member.role}</p>
          </div>
        </div>
      ));
  };

  return (
    <div className={`bg-background py-16 transition-transform duration-700 ease-in-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
      <div className="container mx-auto px-4">
        {/* Carousel-like Image Slider */}
        <div className="relative w-full h-[500px] mb-12">
          <div className="relative h-full overflow-hidden rounded-lg">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-8">
              <h1 className="text-5xl font-bold mb-6 text-center">Meet our Team!</h1>
              <p className="text-xl text-center max-w-3xl">
                We are a passionate and dedicated team driven to create innovative solutions and make a positive impact in the world of technology.
              </p>
            </div>
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Carousel Controls */}
            <button
              onClick={handlePrevClick}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
              aria-label="Previous"
            >
              &#10094;
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
              aria-label="Next"
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Existing Team Sections */}
        <div id="core" className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">The Core</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {renderTeamMembersByCategory('Core')}
          </div>
        </div>

        <div id="heads" className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">The Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {renderTeamMembersByCategory('Heads')}
          </div>
        </div>

        <div id="leads" className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">The Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {renderTeamMembersByCategory('Leads')}
          </div>
        </div>

        <div id="executives" className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">The Executives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {renderTeamMembersByCategory('Executives')}
          </div>
        </div>

        {/* Member details modal */}
        {selectedMember && (
          <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ease-out ${modalAnimation}`}>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
              <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>X</button>
              <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-36 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold mb-2">{selectedMember.name}</h3>
              <p className="text-secondary mb-4">{selectedMember.role}</p>
              <p className="mb-4">{selectedMember.description}</p>
              <div className="flex space-x-4">
                {selectedMember.socials.linkedin && <a href={selectedMember.socials.linkedin} className="text-blue-500">LinkedIn</a>}
                {selectedMember.socials.twitter && <a href={selectedMember.socials.twitter} className="text-blue-400">Twitter</a>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
