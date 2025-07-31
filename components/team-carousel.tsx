'use client';

import { useState, useRef } from 'react';

interface TeamMember {
  role: string;
  name: string;
  description: string;
  initials: string;
  isSpecial?: boolean; // For the counselor with different styling
}

interface TeamCarouselProps {
  members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth / 3; // Show 3 slides at once on desktop
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
                {/* Replace with actual image */}
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
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
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
