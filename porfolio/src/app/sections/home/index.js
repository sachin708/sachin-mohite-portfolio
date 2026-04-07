"use client"
import { AnimatedRoles } from "@/app/components/animated-text";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { motion } from "framer-motion";

export function Home() {
  const text = "SACHINMOHITE"; // extra spaces for spacing
  const repeatedText = Array(10).fill(text).join(""); // repeat to cover screen

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
        
        {/* Scrolling background text */}
        <motion.div
          className="z-10 absolute text-[220px] font-bold select-none top-1/2 left-0 -translate-y-1/2 text-black opacity-50"
          animate={{ x: ["0px", "-2000px"] }} // adjust -2000px based on total text width
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {repeatedText}
        </motion.div>

        <h2 className="text-4xl font-bold z-10">Hi, I'm Sachin!</h2>
        <AnimatedRoles />
       <div className="w-[80%] xl:w-[25%] z-10">
        <motion.img
          src="/self-image/optimized_image.png"
          className="rounded-[20px] mt-6  w-full"
        />
        </div>
      </div>
    </SectionWrapper>
  );
}