import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className=" min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-10 ">
          <Navbar />
          <Hero />
        </div>
        <div className=" h-10 xl:h-12 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-10 mt-10">
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
