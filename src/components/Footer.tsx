import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Alexa Developers SRM</h3>
            <p className="text-sm">Empowering students with voice technology</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-light">Home</a></li>
              <li><a href="/team" className="hover:text-light">Our Team</a></li>
              <li><a href="/events" className="hover:text-light">Events</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-light"><Facebook size={20} /></a>
              <a href="#" className="hover:text-light"><Twitter size={20} /></a>
              <a href="#" className="hover:text-light"><Instagram size={20} /></a>
              <a href="#" className="hover:text-light"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Alexa Developers SRM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;