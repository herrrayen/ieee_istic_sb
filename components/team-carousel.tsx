'use client';

import { useState, useRef, useEffect } from 'react';
import TeamImage from './team-image';

interface TeamMember {
  role: string;
  name: string;
  description: string;
  image: string; // Path to the profile image
  isSpecial?: boolean; // For the counselor with different styling
}

interface TeamCarouselProps {
  teamMembers?: TeamMember[]; // Optional prop for testing
}

export default function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  // Default members if not provided (for development/testing)
  const members: TeamMember[] = teamMembers || [
    {
      role: "Chair",
      name: "Hamza Mellouli",
      description: "Leading our IEEE Student Branch with vision and dedication to create impact through technology.",
      image: "/images/testimonials/hamza.jpg" // Using existing image
    },
    {
      role: "Vice Chair",
      name: "Yosri Ziadi",
      description: "Supporting branch initiatives and helping to coordinate our technical activities.",
      image: "/images/team/yosri.jpg" // Placeholder image
    },
    {
      role: "General Secretary",
      name: "Maram El Kamel",
      description: "Managing communications and ensuring smooth operation of all branch activities.",
      image: "/images/team/maram.jpg" // Placeholder image
    },
    {
      role: "Treasurer",
      name: "Fatma Boughanmi",
      description: "Handling financial planning and ensuring resources are available for our activities.",
      image: "/images/team/fatma.jpg" // Placeholder image
    },
    {
      role: "Webmaster",
      name: "Mohamed Rayen Trabelsi",
      description: "Managing our digital presence and ensuring our technological infrastructure.",
      image: "/images/team/rayen.jpg" // Placeholder image
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Handle responsive behavior and scroll correction
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(3);
      }
      
      // Re-scroll to the active slide after resize
      if (carouselRef.current) {
        setTimeout(() => {
          scrollToSlide(activeSlide);
        }, 100);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Initial setup to scroll to first item
  useEffect(() => {
    if (carouselRef.current) {
      // Force initial position
      setTimeout(() => {
        scrollToSlide(0);
      }, 100);
    }
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
    <div className="relative overflow-hidden" aria-roledescription="carousel" aria-label="Team Members Carousel">
      {/* Carousel wrapper */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide pt-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region" 
        aria-live="polite"
      >
        {members.map((member, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 snap-start transition-all duration-300">
            <div 
              className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border ${activeSlide === index ? 'border-blue-500 dark:border-blue-400 shadow-xl scale-[1.02]' : 'border-gray-200 dark:border-gray-700'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full`}
              aria-current={activeSlide === index ? "true" : "false"}
            >
              <TeamImage 
                src={member.image} 
                name={member.name} 
                isSpecial={member.isSpecial}
              />
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
