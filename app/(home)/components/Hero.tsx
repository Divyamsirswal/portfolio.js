import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function Hero() {
  return (
    <div className=" min-h-[60vh] flex lg:flex-row flex-col-reverse lg:gap-0 gap-14 items-center justify-between">
      <div className=" space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />
          <span className=" underline underline-offset-8 decoration-green-500">
            {"I'm Divyam Sirswal."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India, I'm a Fullstack developer passionate about building a modern web application that users love and me tooo.."
          }
        </p>
        <Link
          href={"mailto:divyamsirswal361@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact me 📧" />
        </Link>
      </div>
      <div className=" relative">
        <div className=" w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className=" flex gap-3 translate-x-8">
            <div className=" w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className=" w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className=" flex gap-3 -translate-x-8">
            <div className=" w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className=" w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[30%] right-1/2 -z-10"></div>
        </div>
        <div className=" absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-2 font-semibold text-xs"
          >
            <p>📢 Available for work.</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
