import React from "react";
import {
  SiApifox,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "Portfolio Site",
      tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
      link: "/",
      cover: "/project-3.png",
      background: "bg-indigo-500",
    },
    {
      title: "Graphic Geeks",
      tech: [SiReact, SiTailwindcss, SiReactquery, SiFramer, SiReactrouter],
      link: "https://graphic-geeks.vercel.app/",
      cover: "/project-2.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className=" py-10 p-5 sm:p-0">
      <Title
        text="Projects 📁"
        className=" flex flex-col items-center justify-center rotate-4"
      />
      <div className=" grid grid-cols-1  sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md transition-all duration-700", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className=" w-full space-y-5 cursor-pointer"
                >
                  <div className=" space-y-2">
                    <h1 className=" font-bold">{project.title}</h1>
                    <div className=" flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
