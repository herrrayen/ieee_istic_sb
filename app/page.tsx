"use client";
import React from "react";

import { Network, Briefcase, Users2, ArrowRight, Sparkles } from "lucide-react";
import { fontLocal } from "@/config/fonts";
import TextTransition, { presets } from "react-text-transition";


// No longer need to load Google Fonts since we're using local font

const TEXTS = [
  "Where Innovation Begins",
  "Your Journey Starts Here",
  "From Students to Changemakers",
];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  // No longer need to load Google Fonts

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // Removed scroll-based section switching

  return (
    <div className="transition-colors duration-300">

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-32 pb-16"
      >
        <div className="text-center max-w-6xl w-full px-8">
          <div className="mb-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-center">
              Welcome to IEEE ISTIC SB
            </h1>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center h-20 md:h-24">
            <div className="w-full flex justify-center">
              <div className={`${fontLocal.className} text-gray-700 dark:text-gray-300 text-2xl md:text-4xl lg:text-5xl font-medium italic`}
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </div>
            </div>
            <div className="mt-10 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full "></div>
          </div>

          <div className="text-center text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 font-medium mb-16">
            IEEE ISTIC SB is your launchpad into the world of engineering,
            innovation, and global opportunities.
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-blue-600 dark:text-blue-400 text-base font-semibold mb-3 tracking-wide">
                  JOIN US!
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5 text-gray-800 dark:text-white">
                  Networking, Mentorship, and Cutting-Edge Resources!
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6"></div>
              </div>

              <ul className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
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
                    "Meet 450,000+ professionals around the world sharing your passion.",
                },
                {
                  icon: Users2,
                  title: "Advance Your Career",
                  description:
                    "Stay ahead with exclusive IEEE tools and learning resources.",
                },
                {
                  icon: Briefcase,
                  title: "Grow as a Leader",
                  description:
                    "Mentor, lead teams, and shape tomorrow's tech world.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <item.icon className="w-7 h-7 text-gray-800 dark:text-gray-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 dark:text-white text-lg font-bold mb-1 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Accent border */}
                  <div
                    className="absolute inset-0 bg-gray-200 dark:bg-gray-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                  ></div>
                </div>
              ))}

              {/* Register Button */}
              <a
                href="https://www.ieee.org/membership/benefits/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl py-3 px-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md"
              >
                <h3 className="text-white text-base font-medium">
                  Explore More IEEE Benefits!
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
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
                image: "/images/testimonials/mouhib.jpg",
                name: "Mouhib Farhat",
                role: "Active Member",
                quote:
                  "Being part of this Student Branch has been one of the most rewarding experiences of my academic journey. I've grown both technically and personally.",
                gradient: "from-blue-600 to-cyan-600",
                accent: "border-emerald-500/20",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border ${testimonial.accent} dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10`}
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
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 leading-relaxed text-sm transition-colors">
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
