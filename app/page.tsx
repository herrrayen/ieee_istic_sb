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
import { Network, Briefcase, Users2 } from "lucide-react";
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
      setCurrentSlide((prev) => (prev + 1) % 3); // 3 is the number of slides
    }, 4000); // Change slide every 4 seconds

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
      {/* Section Navigation Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === i ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <section 
        ref={sectionRefs[0]}
        className="flex flex-col items-center justify-center gap-4 min-h-screen py-10"
      >
        <div className="inline-block max-w-4xl text-center justify-center px-4">
          <ShinyText
            text="Welcome to IEEE ISTIC SB"
            disabled={false}
            speed={3}
            className="text-black font-sans text-6xl mb-6"
          />
          <TextTransition
            springConfig={presets.wobbly}
            className="text-black font-local text-6xl text-center justify-center mb-6"
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>

          <div className="text-center text-lg max-w-2xl mx-auto">
            IEEE ISTIC SB is your launchpad into the world of engineering,
            innovation, and global opportunities.
          </div>
        </div>
      </section>

      {/* New Section */}
      <section 
        ref={sectionRefs[1]}
        className="flex flex-col items-center justify-center gap-4 md:py-10 min-h-screen"
      >
        <div className="text-center">
          <Card className="flex flex-row w-full max-w-6xl max-h-96 bg-gray-100 ">
            <CardBody className="text-center ">
              Expand Your Network
              <Network className="w-15 h-15 self-center m-4 hover:scale-105 transition-all duration-300" />
              <div className="text-center">
                Meet 450,000+ professionals around the world and in your field.
              </div>
            </CardBody>
            <CardBody className="text-center">
              Advance Your Career
              <Briefcase className="w-15 h-15 self-center m-4 hover:scale-105 transition-all duration-300" />
              <div className="text-center">
                Stay ahead with exclusive IEEE tools and learning resources.
              </div>
            </CardBody>
            <CardBody className="text-center">
              Grow as a Leader
              <Users2 className="w-15 h-15 self-center m-4 hover:scale-105 transition-all duration-300" />
              <div className="text-center">
                Mentor, lead teams, and shape tomorrow's tech world.
              </div>
            </CardBody>
          </Card>
          <Link
            href="https://www.ieee.org/membership/benefits/index.html"
            className="pt-6 block"
          >
            {" "}
            Explore All IEEE Member Benefits{" "}
          </Link>
        </div>
      </section>

      {/* Testimonials Section with Auto-moving Carousel */}
      <section 
        ref={sectionRefs[2]}
        className="flex flex-col items-center justify-center gap-4 min-h-screen py-10"
      >
        <div className="w-full max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
          <Carousel
            className="rounded-xl w-full h-[70vh] max-h-[600px]"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            activeIndex={currentSlide}
            autoplay={true}
            autoplayDelay={4000}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="relative h-full w-full">
              <img
                src="/images/testimonials/hamza.jpg"
                alt="image 1"
                className="h-full w-full object-cover object-bottom"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4 px-4">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-4 text-2xl md:text-3xl lg:text-4xl text-center"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Hamza Mellouli
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-6 opacity-80 text-sm md:text-base"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    "Leading this Student Branch has been an incredible journey.
                    I'm proud of what we've accomplished together and excited
                    for the future we're building—one driven by innovation,
                    teamwork, and passion for engineering."
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="/images/testimonials/manef.jpg"
                alt="image 2"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4 px-4">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-4 text-2xl md:text-3xl lg:text-4xl"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Manef Bourogaoui
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-6 opacity-80 text-sm md:text-base"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    It has been a privilege to guide and support such a
                    motivated and dynamic group of students. Their dedication to
                    excellence, leadership, and innovation reflects the true
                    spirit of IEEE. I'm confident they will continue to make a
                    lasting impact.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="/images/testimonials/hideya.jpg"
                alt="image 3"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4 px-4">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-4 text-2xl md:text-3xl lg:text-4xl"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Hideya B'hajyoussef
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-6 opacity-80 text-sm md:text-base"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Being part of this Student Branch has been one of the most
                    rewarding experiences of my academic journey. I've grown
                    both technically and personally, made amazing friends, and
                    found a community that truly supports and inspires me.
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}