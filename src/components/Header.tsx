import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-background">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Alexa Developers SRM Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">Alexa Developers SRM</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-light">Home</Link></li>
            <li><Link to="/team" className="hover:text-light">Our Team</Link></li>
            <li><Link to="/events" className="hover:text-light">Events</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;