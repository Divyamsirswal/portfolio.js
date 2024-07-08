import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const social = [
    {
      link: "https://www.linkedin.com/in/divyamsirswal/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/Divyamsirswal",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://x.com/divyam_sirswal",
      label: "X",
      icon: SiX,
    },
  ];
  return (
    <nav className={cn(" py-10 flex justify-between items-center", className)}>
      <h1 className="text-sm  sm:text-2xl font-bold underline underline-offset-7 hover:-skew-x-2 transition-all duration-800 decoration-green-500 -rotate-2">
        Divyam Sirswal 🧑‍💻
      </h1>
      <div className=" flex items-center gap-3">
        {social.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className=" w-4 h-4 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
