"use client";
import React from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Network, Briefcase, Users2, ArrowRight, Sparkles } from "lucide-react";
import { fontMono } from "@/config/fonts";
import { fontLocal } from "@/config/fonts";
import TextTransition, { presets } from "react-text-transition";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import {
  Carousel,
  Typography,
  Button as MTButton,
} from "@material-tailwind/react";

const TEXTS = [
  "Where Innovation Begins",
  "Your Journey Starts Here",
  "From Students to Changemakers",
];

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentSection, setCurrentSection] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const sectionRefs = [
    React.useRef<HTMLElement>(null),
    React.useRef<HTMLElement>(null),
    React.useRef<HTMLElement>(null),
  ];

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // Auto-play for carousel
  React.useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(carouselInterval);
  }, []);

  // Scroll-based section switching
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(2, currentSection + direction));
      
      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        sectionRefs[nextSection].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
      
      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (isScrolling) return;
        
        setIsScrolling(true);
        
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const nextSection = Math.max(0, Math.min(2, currentSection + direction));
        
        if (nextSection !== currentSection) {
          setCurrentSection(nextSection);
          sectionRefs[nextSection].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
        
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Section Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentSection(i);
              sectionRefs[i].current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 group ${
              currentSection === i 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg shadow-blue-500/50' 
                : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:scale-110'
            }`}
          >
            <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
              currentSection === i ? 'opacity-100' : 'opacity-0'
            } bg-gradient-to-r from-blue-600 to-purple-600 animate-ping`}></div>
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section 
        ref={sectionRefs[0]}
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      >
        <div className="text-center max-w-6xl w-full px-6 relative z-10">
          <div className="mb-8">
            <ShinyText
              text="Welcome to IEEE ISTIC SB"
              disabled={false}
              speed={3}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 font-sans text-4xl md:text-6xl lg:text-7xl font-bold"
            />
          </div>
          
          <div className="mb-8 relative flex flex-col items-center">
            <div className="text-center">
              <TextTransition
                springConfig={presets.wobbly}
                className="text-gray-700 font-local text-2xl md:text-4xl lg:text-5xl font-semibold"
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <div className="mt-2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          
          <div className="text-center text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-600 mb-12">
            IEEE ISTIC SB is your launchpad into the world of engineering,
            innovation, and global opportunities.
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={sectionRefs[1]}
        className="relative flex flex-col items-center justify-center min-h-screen py-20"
      >
        <div className="text-center max-w-7xl w-full px-6">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              Why Join Us?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Network,
                title: "Expand Your Network",
                description: "Meet 450,000+ professionals around the world and in your field.",
                gradient: "from-blue-500 to-cyan-500",
                shadowColor: "shadow-blue-500/25"
              },
              {
                icon: Briefcase,
                title: "Advance Your Career",
                description: "Stay ahead with exclusive IEEE tools and learning resources.",
                gradient: "from-purple-500 to-pink-500",
                shadowColor: "shadow-purple-500/25"
              },
              {
                icon: Users2,
                title: "Grow as a Leader",
                description: "Mentor, lead teams, and shape tomorrow's tech world.",
                gradient: "from-emerald-500 to-teal-500",
                shadowColor: "shadow-emerald-500/25"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${item.shadowColor}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className={`relative z-10 mb-6 w-16 h-16 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`}></div>
              </div>
            ))}
          </div>

          <Link
            href="https://www.ieee.org/membership/benefits/index.html"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 group"
          >
            Explore All IEEE Member Benefits
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={sectionRefs[2]}
        className="relative flex flex-col items-center justify-center min-h-screen py-20"
      >
        <div className="w-full max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-4">
              What Our Members Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Custom carousel implementation */}
            <div className="relative w-full h-[70vh] max-h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              {[
                {
                  image: "/images/testimonials/hamza.jpg",
                  name: "Hamza Mellouli",
                  quote: "Leading this Student Branch has been an incredible journey. I'm proud of what we've accomplished together and excited for the future we're building—one driven by innovation, teamwork, and passion for engineering.",
                  position: "object-bottom"
                },
                {
                  image: "/images/testimonials/manef.jpg",
                  name: "Manef Bourogaoui",
                  quote: "It has been a privilege to guide and support such a motivated and dynamic group of students. Their dedication to excellence, leadership, and innovation reflects the true spirit of IEEE.",
                  position: "object-center"
                },
                {
                  image: "/images/testimonials/hideya.jpg",
                  name: "Hideya B'hajyoussef",
                  quote: "Being part of this Student Branch has been one of the most rewarding experiences of my academic journey. I've grown both technically and personally, made amazing friends, and found a community that truly supports and inspires me.",
                  position: "object-center"
                }
              ].map((testimonial, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className={`h-full w-full object-cover ${testimonial.position}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center max-w-4xl">
                        <div className="mb-8 relative">
                          <div className="text-6xl text-white/20 absolute -top-4 -left-4">"</div>
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative z-10 text-white">
                            {testimonial.name}
                          </h3>
                        </div>
                        
                        <p className="text-lg md:text-xl leading-relaxed opacity-95 italic text-white">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="mt-8 flex justify-center">
                          <div className="w-16 h-1 bg-gradient-to-r from-white/50 to-white/80 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`block h-2 cursor-pointer rounded-full transition-all duration-300 ${
                    currentSlide === i 
                      ? "w-12 bg-white shadow-lg" 
                      : "w-6 bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}