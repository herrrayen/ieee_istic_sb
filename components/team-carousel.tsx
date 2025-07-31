'use client';

import { useState, useRef, useEffect } from 'react';

interface TeamMember {
  role: string;
  name: string;
  description: string;
  initials: string;
  isSpecial?: boolean; // For the counselor with different styling
}

interface TeamCarouselProps {
  teamMembers?: TeamMember[]; // Optional prop for testing
}

export default function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  // Default members if not provided (for development/testing)
  const members: TeamMember[] = teamMembers || [
    {
      role: "Chairperson",
      name: "Hamza Mellouli",
      description: "Leading our IEEE Student Branch with vision and dedication to create impact through technology.",
      initials: "CH"
    },
    {
      role: "Vice Chair",
      name: "Yosri Ziadi",
      description: "Supporting branch initiatives and helping to coordinate our technical activities.",
      initials: "VC"
    },
    {
      role: "Secretary",
      name: "Maram El Kamel",
      description: "Managing communications and ensuring smooth operation of all branch activities.",
      initials: "SE"
    },
    {
      role: "Treasurer",
      name: "Fatma Boughanmi",
      description: "Handling financial planning and ensuring resources are available for our activities.",
      initials: "TR"
    },
    {
      role: "Webmaster",
      name: "Mohamed Rayen Trabelsi",
      description: "Managing our digital presence and ensuring our technological infrastructure.",
      initials: "WM"
    },
    {
      role: "Student Branch Counselor",
      name: "Prof. Manef Bourougaoui",
      description: "Providing guidance and mentorship to our student branch while connecting us to faculty resources.",
      initials: "CO",
      isSpecial: true
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      // For mobile (1 slide) or desktop (3 slides)
      const slideWidth = carouselRef.current.clientWidth / visibleSlides;
      const newPosition = slideWidth * index;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setActiveSlide(index);
    }
  };

  const handlePrevious = () => {
    const newSlide = activeSlide > 0 ? activeSlide - 1 : members.length - 1;
    scrollToSlide(newSlide);
  };

  const handleNext = () => {
    const newSlide = activeSlide < members.length - 1 ? activeSlide + 1 : 0;
    scrollToSlide(newSlide);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Carousel wrapper */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
      >
        {members.map((member, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
              <div className={`w-28 h-28 rounded-full ${member.isSpecial ? 'bg-gradient-to-r from-purple-400 to-purple-700' : 'bg-gradient-to-r from-blue-400 to-blue-700'} mb-6 flex items-center justify-center overflow-hidden`}>
                {/* Replace with actual image later */}
                <div className="text-white text-3xl font-bold">{member.initials}</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{member.role}</h3>
              <h4 className="text-lg font-semibold mb-4 text-blue-600">{member.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Carousel dots/indicators */}
      <div className="flex justify-center mt-6">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 ${activeSlide === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
