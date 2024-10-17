import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-background">
      <section className="hero bg-primary text-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Alexa Developers SRM</h1>
          <p className="text-xl mb-8">Empowering students with voice technology and AI</p>
          <a href="#about" className="btn-primary bg-accent text-primary hover:bg-light">Learn More</a>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">About Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team working together" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg mb-4 text-secondary">Alexa Developers SRM is a student-led tech club dedicated to exploring and innovating with voice technology and AI. We provide a platform for students to learn, collaborate, and build amazing projects using Amazon Alexa and other cutting-edge technologies.</p>
              <p className="text-lg mb-4 text-secondary">Our mission is to foster a community of passionate developers who are ready to shape the future of voice-first experiences and artificial intelligence.</p>
              <a href="/team" className="inline-flex items-center text-accent font-semibold hover:text-secondary">
                Meet our team <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Workshops</h3>
              <p className="text-secondary">Regular hands-on sessions to learn and practice Alexa Skills development and AI concepts.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Hackathons</h3>
              <p className="text-secondary">Exciting competitions to challenge your skills and create innovative voice-based solutions.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Projects</h3>
              <p className="text-secondary">Collaborative projects to build real-world applications using Alexa and other AI technologies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Join Us Today!</h2>
          <p className="text-xl mb-8 text-secondary">Ready to embark on an exciting journey into the world of voice technology and AI?</p>
          <button className="btn-primary">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;