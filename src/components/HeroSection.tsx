'use client'
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Spotlight is the new trend.
      </h1>
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Spotlight effect is a great way to draw attention to a specific part of
        the page. Here, we are drawing the attention towards the text section of
        the page. I don&apos;t know why but I&apos;m running out of copy.
      </p>
      <div className="mt-4">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Our Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
