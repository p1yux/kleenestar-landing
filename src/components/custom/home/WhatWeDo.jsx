"use client";
import { useState, useEffect } from 'react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const section = document.getElementById('what-we-do-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "Strategic Brand Positioning",
      description: "Define your unique voice, values, and vision to stand out in a crowded market."
    },
    {
      number: "03",
      title: "Campaign-Ready Design Systems",
      description: "Build scalable design assets for paid ads, organic content, and web experiences."
    },
    {
      number: "04",
      title: "Integrated Brand Messaging",
      description: "Align messaging across all customer touchpoints—from landing pages to newsletters."
    },
    {
      number: "06", 
      title: "Customer-Centric Narratives",
      description: "Tell stories that resonate, convert, and build loyalty with your ideal customers."
    },
    {
      number: "07",
      title: "Full-Funnel Marketing Support", 
      description: "From brand awareness to performance ads, we help you create marketing that feels as good as it performs."
    },
    {
      number: "09",
      title: "Brand Refresh & Evolution",
      description: "Modernize and optimize your existing brand to meet today's fast-changing expectations."
    }
  ];

  return (
    <section 
      id="what-we-do-section"
      className="relative min-h-screen bg-gray-800"
      style={{
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        boxShadow: '0 -20px 50px rgba(0, 0, 0, 0.3)',
        zIndex: 10,
        marginTop: '0px'
      }}
    >
      {/* Curved top overlay for better 3D effect */}
      <div 
        className="absolute -top-1 left-0 right-0 h-16 bg-gray-800"
        style={{
          borderTopLeftRadius: '60px',
          borderTopRightRadius: '60px',
        }}
      />

      <div className="relative z-20 px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="mb-16">
            <h2 
              className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight text-white"
              style={{ fontFamily: 'serif' }}
            >
              <span 
                className={`inline-block transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                WE
              </span>
              <span 
                className={`inline-block ml-4 transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                HELP
              </span>
              <span 
                className={`inline-block ml-4 transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                CREATE
              </span>
              <span 
                className={`inline-block ml-4 transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                FANTASTIC
              </span>
              <br />
              <span 
                className={`inline-block text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                BRAND
              </span>
              <span 
                className={`inline-block text-white ml-4 transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.7s' }}
              >
                AND
              </span>
              <span 
                className={`inline-block text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text ml-4 transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '0.8s' }}
              >
                IDENTITIES.
              </span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={service.number}
                className={`group transition-all duration-800 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Service Item */}
                <div className="flex h-full">
                  {/* Number Badge */}
                  <div className="mr-4">
                    <div className="w-10 h-30 bg-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:bg-[#D8D8D4]">
                      <span 
                        className="text-2xl font-black text-white group-hover:text-gray-800"
                        style={{ fontFamily: 'serif' }}
                      >
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300"
                      style={{ fontFamily: 'serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-medium text-base sm:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section
          <div className={`text-center mt-20 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '1.4s' }}
          >
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand and accelerate growth? Let's create something extraordinary together.
            </p>
            <button className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 font-bold text-sm tracking-wide uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 font-sans rounded-lg">
              <span className="relative block overflow-hidden">
                <span className="inline-flex items-center gap-3 transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                  START YOUR BRAND JOURNEY
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute top-0 left-0 inline-flex items-center gap-3 transition-all duration-500 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  START YOUR BRAND JOURNEY
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
