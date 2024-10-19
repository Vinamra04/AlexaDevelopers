import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

// Dummy data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2023-08-15",
    time: "14:00",
    location: "Virtual",
    description: "Learn about the latest AI technologies and their applications.",
    image: "/images/AIWorkshop.jpg"
  },
  {
    id: 2,
    title: "Hackathon 2023",
    date: "2023-09-01",
    time: "09:00",
    location: "SRM Campus",
    description: "48-hour coding challenge to solve real-world problems.",
    image: "/images/Hackathon.png"
  },
  {
    id: 3,
    title: "Tech Talk: Blockchain",
    date: "2023-09-15",
    time: "16:00",
    location: "Virtual",
    description: "Explore the potential of blockchain technology in various industries.",
    image: "/images/TedTalk.jpg"
  }
];

// Dummy data for past events
const pastEvents = [
  {
    id: 4,
    title: "Web Development Bootcamp",
    date: "2023-05-20",
    location: "SRM Campus",
    description: "Intensive 3-day bootcamp on modern web development technologies.",
    image: "/images/Bootcamp.jpg"
  },
  {
    id: 5,
    title: "IoT Seminar",
    date: "2023-04-10",
    location: "Virtual",
    description: "Exploring the Internet of Things and its impact on our daily lives.",
    image: "/images/Seminar.jpg"
  },
  {
    id: 6,
    title: "Coding Competition",
    date: "2023-03-05",
    location: "SRM Campus",
    description: "Annual coding competition to test your programming skills.",
    image: "/images/CodingComp.png"
  }
];

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderEvent = (event: any, isUpcoming: boolean) => (
    <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">
          {isUpcoming ? `${event.date} at ${event.time}` : event.date}
        </p>
        <p className="text-gray-600 mb-2">{event.location}</p>
        <p className="text-gray-700">{event.description}</p>
        {isUpcoming && (
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300">
            Register
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className={`bg-background py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Events</h1>

        <section id="upcoming" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => renderEvent(event, true))}
          </div>
        </section>

        <section id="past">
          <h2 className="text-3xl font-semibold mb-8">Our Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map(event => renderEvent(event, false))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
