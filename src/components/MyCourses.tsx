"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import myCoursesData from "@/data/myCoursesData.json";

interface Course {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
}

export default function MyCourses() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center pb-10">
        <p className="uppercase text-3xl">Our Courses</p>
        <p className="uppercase text pt-2">Bring your ideas into reality</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {myCoursesData.map((course: Course) => (
          <BackgroundGradient className=" rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {course.title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {course.description}
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>{course.duration} </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                {course.level}
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
