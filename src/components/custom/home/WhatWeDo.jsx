"use client";
import { useState, useEffect } from 'react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('what-we-do-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const visibleStart = Math.max(0, windowHeight - sectionTop);
      const visibleEnd = Math.min(windowHeight, windowHeight - sectionTop + sectionHeight);
      const visibleHeight = Math.max(0, visibleEnd - visibleStart);
      
      // Calculate progress (0 to 100)
      const progress = Math.min(100, Math.max(0, (visibleHeight / windowHeight) * 100));
      setLineProgress(progress);

      // Calculate slide progress for "Why Choose Us" section
      const scrollProgress = Math.max(0, Math.min(100, ((windowHeight - sectionTop) / windowHeight) * 100));
      
      if (scrollProgress > 98) {
        setShowWhyChooseUs(true);
        const slideAmount = Math.min(100, ((scrollProgress - 98) / 2) * 100);
        setSlideProgress(slideAmount);
      } else {
        setShowWhyChooseUs(false);
        setSlideProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      number: "01",
      title: "Strategic Brand Positioning",
      description: "Define your unique voice, values, and vision to stand out in a crowded market."
    },
    {
      number: "02", 
      title: "Visual Identity Design",
      description: "Craft logos, typography, color palettes, and guidelines that build consistent brand recall."
    },
    {
      number: "03",
      title: "Content That Connects", 
      description: "Deliver powerful content across formats—social, blogs, video, and email—to engage your audience."
    },
    {
      number: "04",
      title: "Campaign-Ready Design Systems",
      description: "Build scalable design assets for paid ads, organic content, and web experiences."
    },
    {
      number: "05",
      title: "Integrated Brand Messaging",
      description: "Align messaging across all customer touchpoints—from landing pages to newsletters."
    },
    {
      number: "06", 
      title: "Customer-Centric Narratives",
      description: "Tell stories that resonate, convert, and build loyalty with your ideal customers."
    }
  ];

  const whyChooseUsItems = [
    {
      number: "01",
      title: "Content Creation",
        description:"Create stunning posts, stories, carousels, and blogs in minutes using our intuitive editor and AI-powered templates"
      },
    {
      number: "02",
      title: "Ad Campaigns", 
      description: "Launch targeted ad campaigns across Facebook, Instagram, Google, and LinkedIn—all from one dashboard with AI-suggested headlines and creatives."
    },
    {
      number: "03",
      title: "Analytics",
      description: "Track what works with in-depth analytics on reach, engagement, and ROI. Optimize your strategy with actionable data and growth insights."
    }
  ];

  return (
    <section 
      id="what-we-do-section"
      className="relative min-h-screen bg-gray-800 overflow-hidden"
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

      {/* Animated Vertical Line */}
      <div className="absolute right-20 top-24 bg-gradient-to-t from-orange-400 to-orange-600 bottom-16 w-1 hidden lg:block">
        <div 
          className="absolute bottom-0 w-full transition-all bg-gray-800 duration-300 ease-out"
          style={{ 
            height: `${lineProgress}%`,
            maxHeight: '100%'
          }}
        />
        
        {/* Line end indicator */}
        <div 
          className="absolute w-3 h-3 bg-orange-500 rounded-full -left-1 transition-all duration-300 ease-out"
          style={{ 
            bottom: `${Math.min(lineProgress, 110)}%`,
            transform: 'translateY(50%)',
            opacity: lineProgress > 5 ? 1 : 0
          }}
        />
      </div>

      {/* First Section - What We Do */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${slideProgress}%)`
        }}
      >
        <div className="relative z-20 px-6 sm:px-8 lg:px-12 pt-24 pb-16 h-full">
          <div className="max-w-7xl mx-auto h-full">
            {/* Main Heading */}
            <div className="mb-16">
              <h2 
                className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight text-white"
                style={{ fontFamily: 'var(--font-bricolage-grotesque)', fontWeight: '600' }}
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
                    <div className="mr-4 overflow-hidden">
                      <div className="w-10 h-25 bg-orange-500 flex items-center justify-center transform transition-transform duration-300 group-hover:bg-[#D8D8D4]">
                        <span 
                          className="text-4xl font-black text-white group-hover:text-gray-800 -mb-2"
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
                        style={{ fontFamily: 'var(--font-bricolage-grotesque)', fontWeight: '600' }}
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
          </div>
        </div>
      </div>

      {/* Second Section - Why Choose Us */}
      <div
        className="absolute inset-0 bg-[#D8D8D4] transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(${100 - slideProgress}%)`
        }}
      >
        <div className="relative z-20 px-6 sm:px-8 lg:px-12 pt-24 pb-16 h-full">
          <div className="max-w-7xl mx-auto h-full">
            {/* Header Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Side - Main Heading */}
              <div>
                <h2 
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900"
                  style={{ fontFamily: 'serif' }}
                >
                  <span 
                    className={`inline-block transition-all duration-1000 ease-out transform ${
                      slideProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.1s' }}
                  >
                    WHY
                  </span>
                  <span 
                    className={`inline-block ml-4 transition-all duration-1000 ease-out transform ${
                      slideProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.2s' }}
                  >
                    CHOOSE
                  </span>
                  <span 
                    className={`inline-block ml-4 transition-all duration-1000 ease-out transform ${
                      slideProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.3s' }}
                  >
                    OUR
                  </span>
                  <br />
                  <span 
                    className={`inline-block text-gray-900 transition-all duration-1000 ease-out transform ${
                      slideProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.4s' }}
                  >
                    PLATFORM?
                  </span>
                </h2>
              </div>

              {/* Right Side - Large Text with Decoration */}
              <div className="relative">
                <div className="text-right">
                  <h3 
                    className={`text-8xl sm:text-9xl lg:text-[12rem] font-black text-orange-500 leading-none opacity-20 transition-all duration-1200 ease-out transform ${
                      slideProgress > 30 ? 'translate-x-0 opacity-20' : 'translate-x-12 opacity-0'
                    }`}
                    style={{ 
                      fontFamily: 'serif',
                      WebkitTextStroke: '2px #f97316',
                      WebkitTextFillColor: 'transparent',
                      transitionDelay: '0.5s'
                    }}
                  >
                    EXPERT
                  </h3>
                </div>
              </div>
            </div>

            {/* Why Choose Us Items */}
            <div className="space-y-0">
              {whyChooseUsItems.map((item, index) => (
                <div 
                  key={item.number} 
                  className={`border-t border-gray-400 py-8 transition-all duration-1000 ease-out transform ${
                    slideProgress > 40 + (index * 10) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span 
                        className={`text-2xl font-black text-gray-600 transition-all duration-800 ease-out transform ${
                          slideProgress > 40 + (index * 10) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                        style={{ 
                          fontFamily: 'serif',
                          transitionDelay: `${0.7 + index * 0.1}s`
                        }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-3">
                      <h3 
                        className={`text-2xl sm:text-3xl font-bold text-gray-900 transition-all duration-1000 ease-out transform ${
                          slideProgress > 40 + (index * 10) ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ 
                          fontFamily: 'var(--font-bricolage-grotesque)',
                          transitionDelay: `${0.8 + index * 0.1}s`
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-8">
                      <p 
                        className={`text-gray-600 text-lg leading-relaxed transition-all duration-1000 ease-out transform ${
                          slideProgress > 40 + (index * 10) ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                        }`}
                        style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
