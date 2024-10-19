import React, { useEffect, useState } from 'react';
import '../styles/domainSelection.css';

const domains = [
  {
    name: "Technical",
    description: "Develop software projects, participate in coding competitions, and explore new technologies.",
    image: "/images/technical.png"
  },
  {
    name: "Creatives",
    description: "Design graphics, create user interfaces, and develop engaging content for our projects.",
    image: "/images/creatives.png"
  },
  {
    name: "Events",
    description: "Organize and manage technical events, workshops, and hackathons.",
    image: "/images/events.png"
  },
  {
    name: "Business",
    description: "Handle project management, marketing, and outreach activities for the club.",
    image: "/images/business.png"
  },
];

const DomainSelection = () => {
  // console.log(domains);
  const [currentDomain, setCurrentDomain] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-js', '');
    window.addEventListener('load', () => document.documentElement.removeAttribute('data-loading'));
    return () => {
      window.removeEventListener('load', () => document.documentElement.removeAttribute('data-loading'));
    };
  }, []);

  const handleDomainChange = (index: number) => {
    if (isTransitioning) {
      return;
    }
    setIsTransitioning(true);
    const newDirection = index > currentDomain ? 1 : -1;
    setDirection(newDirection);
    setCurrentDomain(prevDomain => {
      if (index === prevDomain) {
        return prevDomain;
      }
      if (index === 0 && prevDomain === domains.length - 1) {
        return -1;
      }
      if (index === domains.length - 1 && prevDomain === 0) {
        return domains.length;
      }
      return index;
    });
    setTimeout(() => {
      setCurrentDomain(index);
      setIsTransitioning(false);
    }, 500);
  };

  const getTransformStyle = (index: number) => {
    if (index === currentDomain) {
      return 'translate-x-0';
    }
    if (direction > 0) {
      return index < currentDomain ? '-translate-x-full' : 'translate-x-full';
    } else {
      return index > currentDomain ? 'translate-x-full' : '-translate-x-full';
    }
  };

  return (
    <div className="min-h-screen relative isolate flex flex-col gap-8 overflow-hidden bg-black" style={{ "--slides": domains.length } as React.CSSProperties}>
      {domains.map((domain, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getTransformStyle(index)
            }`}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={domain.image}
            alt={domain.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      <div className="relative z-10 flex-1 px-7 flex flex-col justify-between text-white">
        <div className="mt-8">
          <div className="flex items-center mb-2">
            <h1 className="text-4xl font-bold w-1/2">Explore Our Domains</h1>
            <nav className="flex font-medium text-lg gap-6 w-1/2 justify-end">
              {domains.map((domain, index) => (
                <button
                  key={index}
                  onClick={() => handleDomainChange(index)}
                  className={`${index === currentDomain ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-300`}
                >
                  {domain.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="bg-white/60 mt-2">
            <div className="bg-white h-0.5 w-full origin-left transition-all duration-300" style={{ transform: `scaleX(${(currentDomain + 1) / domains.length})` }}></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="text-mask-box">
            <p className="text-3xl font-light leading-relaxed text-center max-w-2xl">
              {domains[currentDomain]?.description}
            </p>
          </div>
        </div>
        <div className="mb-16">
          <span className="block uppercase font-medium tracking-widest mb-4">{domains[currentDomain]?.name}</span>
          <p className="font-serif text-7xl">Join our <em>{domains[currentDomain]?.name}</em> team</p>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;
