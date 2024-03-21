import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MyCourses from "@/components/MyCourses";
import TestimonialCard from "@/components/TestimonialCard";
import { WavyBackground } from "@/components/ui/wavy-background";
import MyReviews from "@/components/MyReviews"
import { UpcomingWebinar } from "@/components/UpcomingWebinar";
import { AboutUs } from "@/components/AboutUs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] 
    antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <MyCourses/>
      <MyReviews/>
      <TestimonialCard/>
      <UpcomingWebinar/>
      {/* <WavyBackground/> */}
      <AboutUs/>
      <Footer/>
    </main>
  );
}
