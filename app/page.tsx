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

// Add Google Fonts for calligraphy
const loadGoogleFonts = () => {
  if (typeof document !== "undefined") {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};

const TEXTS = [
  "Where Innovation Begins",
  "Your Journey Starts Here",
  "From Students to Changemakers",
];

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [currentSection, setCurrentSection] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const sectionRefs = [
    React.useRef<HTMLElement>(null),
    React.useRef<HTMLElement>(null),
    React.useRef<HTMLElement>(null),
  ];

  React.useEffect(() => {
    loadGoogleFonts();
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
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
        if (nextSection === 0) {
          // For first section, scroll to top of page
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else if (nextSection === 2) {
          // For last section, scroll to start (title area)
          sectionRefs[nextSection].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // For middle sections, scroll to center
          sectionRefs[nextSection].current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();

        if (isScrolling) return;

        setIsScrolling(true);

        const direction = e.key === "ArrowDown" ? 1 : -1;
        const nextSection = Math.max(
          0,
          Math.min(2, currentSection + direction)
        );

        if (nextSection !== currentSection) {
          setCurrentSection(nextSection);
          if (nextSection === 0) {
            // For first section, scroll to top of page
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else if (nextSection === 2) {
            // For last section, scroll to start (title area)
            sectionRefs[nextSection].current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          } else {
            // For middle sections, scroll to center
            sectionRefs[nextSection].current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }

        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-50'></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Section Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentSection(i);
              if (i === 0) {
                // For first section, scroll to top of page
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else if (i === 2) {
                // For last section, scroll to start (title area)
                sectionRefs[i].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              } else {
                // For middle sections, scroll to center
                sectionRefs[i].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
            className={`relative w-3 h-3 rounded-full transition-all duration-500 group ${
              currentSection === i
                ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-150 shadow-lg shadow-blue-500/50"
                : "bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:scale-125"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                currentSection === i ? "opacity-100" : "opacity-0"
              } bg-gradient-to-r from-blue-600 to-purple-600 animate-ping`}
            ></div>
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section
        ref={sectionRefs[0]}
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-4 pb-16"
      >
        <div className="text-center max-w-6xl w-full px-8 relative z-10">
          <div className="mb-8">
            <ShinyText
              text="Welcome to IEEE ISTIC SB"
              disabled={false}
              speed={3}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 font-sans text-4xl md:text-6xl lg:text-7xl font-bold"
            />
          </div>

          <div className="mb-12 relative flex flex-col items-center h-20 md:h-24">
            <div className="text-center absolute inset-0 flex items-center justify-center">
              <TextTransition
                springConfig={presets.wobbly}
                className="text-gray-700 text-2xl md:text-4xl lg:text-5xl font-medium italic"
                style={{
                  fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <div className="absolute bottom-0 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>

          <div className="text-center text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-800 font-medium mb-16">
            IEEE ISTIC SB is your launchpad into the world of engineering,
            innovation, and global opportunities.
          </div>

          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
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
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-50'></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-blue-600 text-xl font-semibold mb-4 tracking-wide">
                  JOIN US!
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
                  Networking, Mentorship, and Cutting-Edge Resources!
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-8"></div>
              </div>

              <ul className="space-y-6 text-lg leading-relaxed text-gray-700">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Join a community of over 450,000 technology and engineering
                    professionals.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Access resources and opportunities to stay updated on
                    technology changes.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Network with professionals in your local area or specific
                    technical fields.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Mentor the next generation of engineers and technologists.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Side - Benefits Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Network,
                  title: "Expand Your Network",
                  description:
                    "Connect Globally and Cultivate Relationships with IEEE ISTIC SB.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Users2,
                  title: "IEEE ISTIC Community",
                  description:
                    "Whatever your discipline at ISTIC, IEEE ISTIC SB meets all technical needs.",
                  gradient: "from-indigo-500 to-blue-500",
                },
                {
                  icon: Briefcase,
                  title: "Advance Your Career",
                  description:
                    "Boost your professional growth with top industry connections.",
                  gradient: "from-purple-500 to-indigo-500",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Accent border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>
                </div>
              ))}

              {/* Register Button */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg">
                <h3 className="text-white text-xl font-bold mb-2">
                  Register now to IEEE ISTIC SB!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={sectionRefs[2]}
        className="relative flex flex-col items-center justify-center min-h-screen py-20"
      >
        <div className="w-full max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-4">
              What Our Members Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          {/* Grid Layout for Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/testimonials/hamza.jpg",
                name: "Hamza Mellouli",
                role: "Student Branch Chair",
                quote:
                  "Leading this Student Branch has been an incredible journey. I'm proud of what we've accomplished together and excited for the future we're building—one driven by innovation, teamwork, and passion for engineering.",
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
                image: "/images/testimonials/hideya.jpg",
                name: "Hideya B'hajyoussef",
                role: "Active Member",
                quote:
                  "Being part of this Student Branch has been one of the most rewarding experiences of my academic journey. I've grown both technically and personally.",
                gradient: "from-blue-600 to-cyan-600",
                accent: "border-emerald-500/20",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border ${testimonial.accent} hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/10`}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-gray-200 group-hover:text-gray-300 transition-colors">
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
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors">
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
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-sm transition-colors">
                  "{testimonial.quote}"
                </p>

                {/* Accent Line */}
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
