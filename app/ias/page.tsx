"use client";
import React from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components_ias/primitives";
import { GithubIcon } from "@/components_ias/icons";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Network, Briefcase, Users2, ArrowRight, Sparkles } from "lucide-react";
import { fontLocal } from "@/config/fonts";
import TextTransition, { presets } from "react-text-transition";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import TestimonialCarousel from "@/components_ias/testimonial-carousel";
import {
  Carousel,
  Typography,
  Button as MTButton,
} from "@material-tailwind/react";

// Font loading is now handled through Next.js font system
// Using local font defined in config/fonts.ts

const TEXTS = [
  "Powering Industrial Innovation",
  "Where Technology Meets Industry",
  "Building Tomorrow's Power Systems",
];

export default function Home() {
  const [index, setIndex] = React.useState(0);
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

  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-32 pb-16"
      >
        <div className="text-center max-w-6xl w-full px-8 relative z-10">
          <div className="mb-8 relative z-10">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-center">
              Welcome to IEEE IAS ISTIC Student Branch Chapter
            </h1>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center h-20 md:h-24 relative z-10">
            <div className="w-full flex justify-center">
              <TextTransition
                springConfig={presets.wobbly}
                className="text-green-400 dark:text-gray-300 text-5xl md:text-6xl lg:text-7xl font-medium italic"
                style={{
                  fontFamily: "var(--font-local)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <div className="mt-6 pt-1 w-32 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full "></div>
          </div>

          <div className="text-center text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 font-medium mb-14">
            IEEE IAS ISTIC Chapter is your gateway to industrial applications, power systems, and cutting-edge industrial technology innovations.
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="relative flex flex-col items-center justify-center py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Content */}
            <div className="space-y-2">
              <div>
                <h3 className="text-green-600 dark:text-green-400 text-lg font-semibold mb-4 tracking-wide">
                  JOIN IEEE IAS!
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-800 dark:text-white">
                  Industrial Applications & Power Systems Excellence!
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-4"></div>
              </div>

              <ul className="space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Connect with industry professionals specializing in power systems, motor drives, and industrial automation.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Access cutting-edge research and publications in industrial applications and power electronics.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Participate in conferences, workshops, and technical seminars on industrial technology.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Develop expertise in renewable energy, smart grids, and sustainable industrial systems.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Side - Benefits Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Network,
                  title: "Industrial Networking",
                  description:
                    "Connect with experts in power systems, motor drives, and industrial automation worldwide.",
                  gradient: "from-green-500 to-green-400",
                },
                {
                  icon: Users2,
                  title: "Technical Excellence",
                  description:
                    "Access IEEE IAS publications, standards, and cutting-edge industrial research.",
                  gradient: "from-green-600 to-green-500",
                },
                {
                  icon: Briefcase,
                  title: "Industry Leadership",
                  description:
                    "Lead projects in renewable energy, smart grids, and sustainable industrial systems.",
                  gradient: "from-teal-500 to-green-500",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-green-600 dark:text-green-400 text-xl font-bold mb-2 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
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
            </div>
          </div>
          
          {/* Benefits Button - Centered on screen */}
          <div className="w-full flex justify-center mt-12">
            <a
              href="https://ias.ieee.org/member-development/membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-3 text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md w-fit"
            >
              <span
                className="text-white font-medium text-base flex items-center
                justify-center"
              >
                Explore IEEE IAS Benefits
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative flex flex-col items-center justify-center py-16 mt-8"
      >
        <div className="w-full max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mb-4">
              What Our Members Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-xl mx-auto mt-6">
            <TestimonialCarousel
              testimonials={[
                {
                  image: "/images/team/mariem.jpg",
                  name: "Mariem Ksibi",
                  role: "IAS Chapter Chair",
                  quote:
                    "Leading this IAS Chapter has been transformative. We're bridging the gap between academic research and industrial applications, creating real impact in power systems and automation technologies.",
                  gradient: "from-green-600 to-green-500",
                  accent: "border-green-500/20",
                },
                {
                  image: "/images/testimonials/manef.jpg",
                  name: "Manef Bourogaoui",
                  role: "Chapter Advisor",
                  quote:
                    "The IEEE IAS Chapter at ISTIC represents excellence in industrial applications. Our students are developing cutting-edge solutions for power systems, renewable energy, and industrial automation.",
                  gradient: "from-green-700 to-green-500",
                  accent: "border-green-500/20",
                },
                {
                  image: "/images/testimonials/mouhib.jpg",
                  name: "Mouhib Farhat",
                  role: "Active Member",
                  quote:
                    "Through IEEE IAS, I've gained invaluable insights into industrial applications and power systems. The technical seminars and industry connections have shaped my career path significantly.",
                  gradient: "from-green-600 to-lime-500",
                  accent: "border-green-500/20",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 