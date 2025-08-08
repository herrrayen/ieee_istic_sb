"use client";
import React from "react";
import { Network, Briefcase, Users2, ArrowRight, Sparkles } from "lucide-react";
import { fontLocal } from "@/config_ias/fonts";
import TextTransition, { presets } from "react-text-transition";
import TestimonialCarousel from "@/components/testimonial-carousel";
const TEXTS = [
  "Where Innovation Begins",
  "Your Journey Starts Here",
  "From Students to Changemakers",
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
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-center">
              Welcome to IEEE ISTIC SB
            </h1>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center h-20 md:h-24 relative z-10">
            <div className="w-full flex justify-center">
              <TextTransition
                springConfig={presets.wobbly}
                className={`${fontLocal.className} text-blue-400 dark:text-gray-300 text-5xl md:text-6xl lg:text-7xl font-medium italic`}
                style={{
                  // Optional: keep explicit font-family via variable (works if variable injected somewhere)
                  fontFamily: "var(--font-local)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <div className="mt-6 pt-1 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full "></div>
          </div>

          <div className="text-center text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 font-medium mb-14">
            IEEE ISTIC SB is your launchpad into the world of engineering,
            innovation, and global opportunities.
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
                <h3 className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-4 tracking-wide">
                  JOIN US!
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-800 dark:text-white">
                  Networking, Mentorship, and Cutting-Edge Resources!
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4"></div>
              </div>

              <ul className="space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Join a community of over 450,000 technology and engineering
                    professionals.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Access resources and opportunities to stay updated on
                    technology changes.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Network with professionals in your local area or specific
                    technical fields.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
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
                    "Meet 450,000+ professionals around the world sharing your passion.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Users2,
                  title: "Advance Your Career",
                  description:
                    "Stay ahead with exclusive IEEE tools and learning resources.",
                  gradient: "from-indigo-500 to-blue-500",
                },
                {
                  icon: Briefcase,
                  title: "Grow as a Leader",
                  description:
                    "Mentor, lead teams, and shape tomorrow's tech world.",
                  gradient: "from-purple-500 to-indigo-500",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-600 dark:text-blue-400 text-xl font-bold mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
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
              href="https://www.ieee.org/membership/benefits/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-3 text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md w-fit"
            >
              <span
                className="text-white font-medium text-base flex items-center
                justify-center"
              >
                Explore More IEEE Benefits
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
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
              What Our Members Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-xl mx-auto mt-6">
            <TestimonialCarousel
              testimonials={[
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
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}