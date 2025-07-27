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
import {
  Users,
  Calendar,
  Component,
  Network,
  Briefcase,
  Users2,
} from "lucide-react";
import { fontMono } from "@/config/fonts";
import { fontLocal } from "@/config/fonts";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import TextTransition, { presets } from "react-text-transition";

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
            disabled={true}
            speed={5}
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
      <section className="flex flex-col items-center justify-center gap-4 md:py-10 pb-64">
        <Card className="flex flex-row w-full max-w-6xl max-h-96 bg-gray-100">
          <CardBody className="text-center ">
            Expand Your Network
            <Network className="w-15 h-15 self-center m-4 hover:scale-105 transition-all duration-300" />
            <text className="text-center">
              Meet 450,000+ professionals around the world and in your field.
            </text>
          </CardBody>
          <CardBody className="text-center">
            Advance Your Career
            <Briefcase className="w-15 h-15 self-center m-4 hover:scale-105 transition-all duration-300" />
            <text className="text-center">
            Stay ahead with exclusive IEEE tools and learning resources.
            </text>
          </CardBody>
          <CardBody className="text-center">
            Grow as a Leader
            <Users2 className="w-15 h-15 self-center m-4 hover:scale-105 transition-all duration-300" />
            <text className="text-center">
            Mentor, lead teams, and shape tomorrow’s tech world.
            </text>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
