"use client";
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    // Handle contact button click
    console.log("Contact button clicked");
  };

//   const handleContactKeyDown = (event) => {
//     if (event.key === 'Enter' || event.key === ' ') {
//       event.preventDefault();
//       handleContactClick();
//     }
//   };

  return (
    <section className="sticky top-0 h-screen bg-[#D8D8D4] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>

        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/assets/dotted-bg.jpg')",
            opacity: 0.3,
        }}
        />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main content - centered */}
        <div className="space-y-8">
          {/* Main heading with mixed typography */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight" style={{ fontFamily: 'serif' }}>
              <span 
                className={`inline-block text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-black tracking-tight transform transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.2s', fontFamily: 'serif' }}
              >
                MARKETING
                <span 
                  className={`inline-block text-gray-900 ml-6 font-black tracking-tight transform transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: '0.4s'}}
                >
                  AND
                </span>
              </span>
              <br />
              <span 
                className={`inline-block text-gray-900 font-black tracking-tight transform transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.6s'}}
              >
                GROWTH
                <span 
                  className={`inline-block text-orange-500 bg-gradient-to-r from-orange-400 ml-5 to-orange-600 bg-clip-text font-black tracking-tight transform transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: '0.8s', fontFamily: 'serif' }}
                >
                  AGENCY
                </span>
              </span>
            </h1>
          </div>

          {/* Description text */}
          <div 
            className={`max-w-2xl mx-auto transform transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1.0s' }}
          >
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium font-serif">
              Our long experience in marketing and growth agency helps us spot essential things while selecting a design that business owners often miss.
            </p>
          </div>

          {/* CTA Button */}
          <div 
            className={`pt-4 transform transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-6 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <button
              onClick={handleContactClick}
              tabIndex="0"
              aria-label="Send a message to start conversation"
              className="group relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 font-bold text-sm tracking-wide uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 font-sans"
            >
              <span className="relative block overflow-hidden">
                {/* First text with arrow - visible initially, slides out to right on hover */}
                <span className="inline-flex items-center gap-3 transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                  LET'S TALK - SEND A MESSAGE
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
                
                {/* Second text with arrow - hidden initially, slides in from left on hover */}
                <span className="absolute top-0 left-0 inline-flex items-center gap-3 transition-all duration-500 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  LET'S TALK - SEND A MESSAGE
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle animated dots */}
        <div 
          className={`absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full transition-all duration-2000 ease-out ${
            isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        />
        <div 
          className={`absolute top-32 right-24 w-3 h-3 bg-gray-400 rounded-full transition-all duration-2000 ease-out ${
            isLoaded ? 'opacity-20 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transitionDelay: '0.8s' }}
        />
        <div 
          className={`absolute bottom-24 left-32 w-2 h-2 bg-orange-300 rounded-full transition-all duration-2000 ease-out ${
            isLoaded ? 'opacity-25 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transitionDelay: '1.1s' }}
        />
        <div 
          className={`absolute bottom-20 right-20 w-4 h-4 bg-gray-300 rounded-full transition-all duration-2000 ease-out ${
            isLoaded ? 'opacity-15 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transitionDelay: '1.4s' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
