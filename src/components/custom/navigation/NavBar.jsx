"use client";
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Trigger navbar animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleMobileMenuToggle();
    }
  };

  const navigationLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'About', href: '#about' },
    { name: 'Cases', href: '#cases' },
    { name: 'Contact', href: '#contact' },
    { name: 'AI', href: '#ai' },
  ];

  const handleLinkClick = (href) => {
    console.log(`Navigating to: ${href}`);
    // Add navigation logic here
  };

  const handleLinkKeyDown = (event, href) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLinkClick(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all rounded-b-4xl duration-300 ${
      isScrolled 
        ? 'bg-[#D8D8D4]/95 backdrop-blur-sm border-b border-gray-300/20 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className={`text-3xl font-bold text-gray-900 transition-all duration-700 ease-out transform ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: '0.1s',
                fontFamily: 'var(--font-bricolage-grotesque)',
                fontWeight: '600',
              }}
              tabIndex="0"
              aria-label="Kleenestar homepage"
            >
              Kleenestar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8" style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}>
              {navigationLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  onKeyDown={(e) => handleLinkKeyDown(e, link.href)}
                  tabIndex="0"
                  aria-label={`Navigate to ${link.name}`}
                  className={`relative text-gray-900 font-medium text-sm uppercase tracking-wide transition-all duration-700 ease-out group transform ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : '-translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  {link.name}
                  {/* Hover underline effect */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              onKeyDown={handleMobileMenuKeyDown}
              tabIndex="0"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-700 ease-out transform ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 border-t border-gray-300/20 ${
          isScrolled ? 'bg-[#D8D8D4]/98' : 'bg-[#D8D8D4]/90 backdrop-blur-sm'
        }`}>
          {navigationLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
                setIsMobileMenuOpen(false);
              }}
              onKeyDown={(e) => {
                handleLinkKeyDown(e, link.href);
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsMobileMenuOpen(false);
                }
              }}
              tabIndex="0"
              aria-label={`Navigate to ${link.name}`}
              className={`relative block px-3 py-2 text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide transition-all duration-500 ease-out group transform ${
                isMobileMenuOpen && isLoaded
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {link.name}
              {/* Mobile hover underline effect */}
              <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-6"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
