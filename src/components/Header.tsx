import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import useScrollToSection from '../hooks/useScrollToSection';

const Header = () => {
  const scrollToSection = useScrollToSection();

  const navItems = [
    {
      name: 'Home',
      path: '/',
      subItems: [
        { name: 'About Us', path: '/#about' },
        { name: 'Contact', path: '/#contact' },
      ],
    },
    {
      name: 'Our Team',
      path: '/team',
      subItems: [
        { name: 'The Core', path: '/team#core' },
        { name: 'The Heads', path: '/team#heads' },
        { name: 'The Leads', path: '/team#leads' },
        { name: 'The Executives', path: '/team#executives' },
      ],
    },
    {
      name: 'Events',
      path: '/events',
      subItems: [
        { name: 'Upcoming Events', path: '/events#upcoming' },
        { name: 'Past Events', path: '/events#past' },
      ],
    },
  ];

  return (
    <header className="bg-primary text-background">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Alexa Developers SRM Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">Alexa Developers SRM</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="dropdown">
                <Link to={item.path} className="nav-link dropbtn">
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="dropdown-content">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.path}
                        className="sub-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(subItem.path);
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
