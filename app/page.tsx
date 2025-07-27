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

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center pt-10 pb-64">
          <ShinyText
            text="Welcome to IEEE ISTIC SB"
            disabled={false}
            speed={3}
            className="text-black font-sans text-6xl"
          />
          <br />
          <TextTransition
            springConfig={presets.wobbly}
            className="text-black font-local text-6xl text-center justify-center"
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
          <br />

          <div className="text-center">
            IEEE ISTIC SB is your launchpad into the world of engineering,
            innovation, and global opportunities.
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="flex flex-col items-center justify-center gap-4 md:py-10 pb-96">
        <div className="text-center pb-64">
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
            className="pt-6"
          >
            {" "}
            Explore All IEEE Member Benefits{" "}
          </Link>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="flex flex-col items-center justify-center gap-4 md:py-10 ">
        <div className=" max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
          <Carousel
            className="rounded-xl w-full"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <div className="relative h-full w-full">
              <img
                src="/images/testimonials/hamza.jpg"
                alt="image 1"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center content-center"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Hamza Mellouli
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    "Leading this Student Branch has been an incredible journey.
                    I’m proud of what we've accomplished together and excited
                    for the future we’re building—one driven by innovation,
                    teamwork, and passion for engineering."
                  </Typography>
                  <div className="flex justify-center gap-2"></div>
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
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Manef Bourogaoui
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    It has been a privilege to guide and support such a
                    motivated and dynamic group of students. Their dedication to
                    excellence, leadership, and innovation reflects the true
                    spirit of IEEE. I’m confident they will continue to make a
                    lasting impact.
                  </Typography>
                  <div className="flex gap-2"></div>
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
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Hideya B'hajyoussef
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2"></div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
