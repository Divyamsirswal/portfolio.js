"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwindcss",
      Icon: SiTailwindcss,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Gitgub",
      Icon: SiGithub,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "C++",
      Icon: SiCplusplus,
    },
  ];

  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="Skills 💯"
        className=" flex flex-col items-center justify-center -rotate-2"
      />

      <HoverEffect items={skills} />
    </div>
  );
}
