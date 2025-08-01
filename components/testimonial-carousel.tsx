'use client';

import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  quote: string;
  gradient: string;
  accent: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[]; // Optional prop for testing
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  // Default testimonials if not provided (for development/testing)
  const defaultTestimonials: Testimonial[] = [
    {
      image: "/images/testimonials/hamza.jpg",
      name: "Hamza Mellouli",
      role: "Student Branch Chair",
      quote:
        "Leading this Student Branch has been an incredible journey. I'm deeply grateful for meeting and working with these amazing people. I'm proud of what we've accomplished together and excited for the future we're building, one driven by innovation and teamwork.",
      gradient: "from-blue-600 to-purple-600",
      accent: "border-blue-500/20",
    },
    {
      image: "/images/testimonials/manef.jpg",
      name: "Manef Bourogaoui",
      role: "Student Branch Counselor",
      quote:
        "It has been a privilege to guide and support such a motivated and dynamic group of students. Their dedication to excellence, leadership, and innovation reflects the true spirit of IEEE.",
      gradient: "from-purple-600 to-pink-600",
      accent: "border-purple-500/20",
    },
    {
      image: "/images/testimonials/mouhib.jpg",
      name: "Mouhib Farhat",
      role: "Active Member",
      quote:
        "Being part of this Student Branch has been one of the most rewarding experiences of my academic journey. I've grown both technically and personally.",
      gradient: "from-blue-600 to-cyan-600",
      accent: "border-emerald-500/20",
    },
  ];

  const items = testimonials || defaultTestimonials;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1); // Default to 1 for testimonials

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Testimonial carousel always shows 1 slide at a time regardless of screen size
      setVisibleSlides(1);
      
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
  }, [activeSlide]);
  
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
      const slideWidth = carouselRef.current.clientWidth;
      const newPosition = slideWidth * index;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setActiveSlide(index);
    }
  };

  const handlePrevious = () => {
    const newSlide = activeSlide > 0 ? activeSlide - 1 : items.length - 1;
    scrollToSlide(newSlide);
  };

  const handleNext = () => {
    const newSlide = activeSlide < items.length - 1 ? activeSlide + 1 : 0;
    scrollToSlide(newSlide);
  };

  return (
    <div className="relative overflow-hidden" aria-roledescription="carousel" aria-label="Testimonials Carousel">
      {/* Carousel wrapper */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region" 
        aria-live="polite"
      >
        {items.map((testimonial, idx) => (
          <div key={idx} className="w-full flex-shrink-0 px-4 snap-start">
            <div
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border ${testimonial.accent} dark:border-gray-700 transition-all duration-500 ${activeSlide === idx ? 'shadow-2xl shadow-black/10 dark:shadow-white/10 scale-[1.02]' : ''}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-4xl text-gray-200 dark:text-gray-600 group-hover:text-gray-300 dark:group-hover:text-gray-500 transition-colors">
                "
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {testimonial.name}
                  </h3>
                  <p
                    className={`text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 leading-relaxed text-sm md:text-base transition-colors">
                "{testimonial.quote}"
              </p>

              {/* Accent Line */}
              <div
                className={`mt-6 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 z-10"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={handleNext}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 z-10"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Carousel dots/indicators */}
      <div className="flex justify-center mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 ${activeSlide === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} transition-colors duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={activeSlide === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
