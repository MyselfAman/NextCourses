"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import myCourses from "@/data/myCoursesData.json"

interface Course {
  id:string,
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
}

export default function page() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center pt-36 flex-wrap gap-y-16">
    {
        myCourses.map((course:Course) => (
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
                key={course.id}
                >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {course.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                        {course.description}
                    </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        ))
    }
 
  </div>
  );
}
