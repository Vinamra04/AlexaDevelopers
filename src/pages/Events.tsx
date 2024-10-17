import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: 'Alexa Skill Development Workshop',
    date: '2023-05-15',
    time: '14:00 - 17:00',
    location: 'Tech Hub, SRM University',
    description: 'Learn how to create your first Alexa Skill in this hands-on workshop.',
  },
  {
    title: 'AI in Voice Technology Seminar',
    date: '2023-06-02',
    time: '10:00 - 12:00',
    location: 'Main Auditorium, SRM University',
    description: 'Explore the latest advancements in AI and their applications in voice technology.',
  },
  {
    title: 'Voice-First Hackathon',
    date: '2023-07-10',
    time: '09:00 - 18:00',
    location: 'Innovation Center, SRM University',
    description: 'A full-day hackathon to build innovative voice-based solutions using Alexa.',
  },
];

const Events = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Upcoming Events</h1>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-light rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-primary">{event.title}</h2>
                <div className="flex items-center text-accent">
                  <Calendar className="mr-2" />
                  <span>{event.date}</span>
                </div>
              </div>
              <p className="text-secondary mb-2">{event.time}</p>
              <p className="text-secondary mb-4">{event.location}</p>
              <p className="text-secondary">{event.description}</p>
              <button className="mt-4 btn-secondary">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;