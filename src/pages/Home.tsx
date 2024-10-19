import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const toggleContactVisibility = () => {
    setIsContactVisible(!isContactVisible);
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-background">
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slideInLeft {
            animation: slideInLeft 1s ease-out forwards;
          }
        `}
      </style>
      <section className="hero bg-primary text-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Alexa Developers SRM</h1>
          <p className="text-xl mb-8">Voices United, Tech Amplified</p>
          <button 
            onClick={scrollToAbout} 
            className="btn-primary bg-primary text-background hover:bg-background hover:text-primary transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </section>

      <section id="about" ref={aboutRef} className={`py-16 ${isAboutVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">About Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img src="/club.png" alt="Club" className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg text-secondary mb-4">
                Alexa Developers SRM is a technical club that focuses on various domains including web development, AI, creative design, and business strategies. Our mission is to provide a platform for students to learn, collaborate, and innovate in the field of technology.
              </p>
              <p className="text-lg text-secondary mb-4">
                We organize workshops, seminars, hackathons, and other events to help students enhance their skills and knowledge. Join us to be a part of a vibrant community of tech enthusiasts and take your skills to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2
            className="text-3xl font-bold mb-8 text-primary cursor-pointer transition-colors duration-300 hover:text-accent inline-block relative group"
            onClick={toggleContactVisibility}
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </h2>
          <div
            className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
              isContactVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-secondary mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-secondary mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-secondary mb-2">Message</label>
                    <textarea id="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" rows={4}></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <p className="text-lg text-secondary mb-4">
                  If you have any questions or would like to learn more about Alexa Developers SRM, feel free to reach out to us. We are always here to help and provide more information about our club and activities.
                </p>
                <p className="text-lg text-secondary mb-4">
                  Email: contact@alexadeveloperssrm.com
                </p>
                <p className="text-lg text-secondary mb-4">
                  Phone: +91 12345 67890
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
