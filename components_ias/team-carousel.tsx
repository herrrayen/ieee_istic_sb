'use client';

import { useState, useRef, useEffect } from 'react';
import TeamImage from './team-image';

interface TeamMember {
  role: string;
  name: string;
  description: string;
  image: string;
  isSpecial?: boolean;
}

interface TeamCarouselProps {
  teamMembers?: TeamMember[];
}

export default function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  const members: TeamMember[] = teamMembers || [
    {
      role: "Chapter Chair",
      name: "Mariem Ksibi",
      description: "Leading our IEEE IAS Chapter with focus on industrial applications and power systems innovation.",
      image: "/images/team/mariem.jpg"
    },
    {
      role: "General Secretary",
      name: "Malek naffeti",
      description: "Managing communications and coordinating power systems research activities.",
      image: "/images/team/malek.jpg"
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : 3);
      if (carouselRef.current) {
        setTimeout(() => {
          scrollToSlide(activeSlide);
        }, 100);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      setTimeout(() => scrollToSlide(0), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const effectiveVisible = Math.min(visibleSlides, members.length);
  const noScrollNeeded = members.length <= effectiveVisible;

  const getWidthClass = () => {
    if (visibleSlides === 1) return 'w-full';
    if (members.length === 2 && visibleSlides > 1) return 'w-full md:w-1/2 lg:w-1/2';
    return 'w-full md:w-1/3 lg:w-1/3';
  };

  const scrollToSlide = (index: number) => {
    if (noScrollNeeded) {
      setActiveSlide(index);
      return;
    }
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth / effectiveVisible;
      const newPosition = slideWidth * index;
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setActiveSlide(index);
    }
  };

  const handlePrevious = () => {
    if (noScrollNeeded) return;
    const newSlide = activeSlide > 0 ? activeSlide - 1 : members.length - 1;
    scrollToSlide(newSlide);
  };

  const handleNext = () => {
    if (noScrollNeeded) return;
    const newSlide = activeSlide < members.length - 1 ? activeSlide + 1 : 0;
    scrollToSlide(newSlide);
  };

  return (
    <div className="relative overflow-hidden" aria-roledescription="carousel" aria-label="Team Members Carousel">
      <div
        ref={carouselRef}
        className={`flex pb-8 pt-4 snap-x snap-mandatory scrollbar-hide ${
          noScrollNeeded ? 'justify-center gap-4 overflow-x-hidden' : 'overflow-x-auto'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region"
        aria-live="polite"
      >
        {members.map((member, index) => (
          <div key={index} className={`${getWidthClass()} flex-shrink-0 px-4 snap-start transition-all duration-300`}>
            <div
              className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border ${
                activeSlide === index
                  ? 'border-green-500 dark:border-green-400 shadow-xl scale-[1.02]'
                  : 'border-gray-200 dark:border-gray-700'
              } rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full`}
              aria-current={activeSlide === index ? 'true' : 'false'}
            >
              <TeamImage
                src={member.image}
                name={member.name}
                isSpecial={member.isSpecial}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{member.role}</h3>
              <h4 className="text-lg font-semibold mb-4 text-green-600">{member.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!noScrollNeeded && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-green-600 hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-green-600 hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="flex justify-center mt-6">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              activeSlide === index ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
