import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Alexa Developers SRM</h3>
            <p className="text-sm">Empowering the Next Generation of Innovators</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-light">Home</a></li>
              <li><a href="/team" className="hover:text-light">Our Team</a></li>
              <li><a href="/events" className="hover:text-light">Events</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/alexadevsrm/" target="_blank" rel="noopener noreferrer" className="hover:text-light"><Facebook /></a>
              <a href="https://www.instagram.com/alexadevsrm/" target="_blank" rel="noopener noreferrer" className="hover:text-light"><Instagram /></a>
              <a href="https://in.linkedin.com/company/alexa-developers-srm" target="_blank" rel="noopener noreferrer" className="hover:text-light"><Linkedin /></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Falexadevsrm" target="_blank" rel="noopener noreferrer" className="hover:text-light"><Twitter /></a>
              <a href="https://www.youtube.com/channel/UCHRZ9VqG4hBiKk5JpN1Fvsg" target="_blank" rel="noopener noreferrer" className="hover:text-light"><Youtube /></a>
              <div className="relative group">
                <a href="mailto:alexadevsrm@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-light flex items-center">
                  <Mail />
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">alexadevsrm@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;