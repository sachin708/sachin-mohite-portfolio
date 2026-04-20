"use client";
import { AnimatedRoles } from "@/app/components/animated-text";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { motion } from "framer-motion";

export function Home() {
  const text = "SACHINMOHITE"; // extra spaces for spacing
  const repeatedText = Array(10).fill(text).join(""); // repeat to cover screen
 
 const handleResume = () => {
  const fileUrl = "/resume/Sachin_Mohite_Resume.pdf";

  window.open(fileUrl, "_blank");
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Sachin_Mohite_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
            ease: "linear",
          }}
        >
          {repeatedText}
        </motion.div>
        <h2 className="text-4xl font-bold z-10">Hi, I'm Sachin!</h2>
        <AnimatedRoles />
        <div className="w-[75%] xl:w-[24%] z-10">
          <motion.img
            src="/self-image/optimized_image.png"
            className="rounded-[20px] mt-6  w-full"
          />
        </div>
        <button
          className="group relative flex items-center justify-center gap-2 
          mt-4 md:mt-8 px-6 py-2 
          border-2 border-black rounded-full overflow-hidden
          transition-all duration-300 ease-in-out
          hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          onClick={() => handleResume()}
        >
          {/* Animated background */}
          <span
            className="absolute inset-0 bg-black 
            scale-x-0 origin-left 
            transition-transform duration-300 ease-in-out 
            group-hover:scale-x-100"
          ></span>

          {/* Content wrapper (IMPORTANT FIX) */}
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-black group-hover:text-white transition-colors duration-300">
              Resume
            </span>

            <img
              src="/resume/download.svg"
              alt="download"
              className="w-5 h-5 transition-all duration-300 group-hover:translate-y-0.5 group-hover:invert"
            />
          </span>
        </button>
      </div>
    </SectionWrapper>
  );
}
