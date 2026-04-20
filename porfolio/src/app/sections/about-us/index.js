"use client";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { TextGenerateEffect } from "@/app/components/text-generate-effect";
import { motion } from "framer-motion";

export function About() {
  const paragraphs = [
    "Hi, I'm sachin — I began my journey as a software developer at Masai School, where I am actively learning and building skills in both frontend and backend development. Through hands-on projects and structured learning, I am developing a strong foundation as a full-stack MERN developer, continuously improving my problem-solving abilities and coding practices.",
    "A web developer who turns ideas into fast, interactive, and seamless web experiences. I specialize in building user-focused applications that not only function flawlessly but also feel smooth and modern. Every project is an opportunity to create something purposeful, impactful, and aligned with real user needs..",
    "My tech stack is centered around Next.js and React.js, enabling me to build fast, scalable, and dynamic web applications. I enhance user experiences with smooth animations using Framer Motion.",
    " I am passionate about continuous learning and staying up to date with the latest technologies and industry trends. I enjoy collaborating with teams, taking on new challenges, and building applications that deliver real value. My goal is to grow as a developer while contributing to innovative projects that make a meaningful impact.",
  ];

  const handleClick = () => {
    window.open("/resume/SachinMohiteCoverLetter.pdf", "_blank");
  }

  return (
    <SectionWrapper
      id="about"
      className="xl:max-w-300! mx-auto pt-16 xl:pt-22 px-2"
    >
      <h2 className="text-4xl xl:text-6xl text-center font-semibold mb-6 xl:mb-16">
        About Me!
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 1 }, // 1 second between each paragraph
          },
        }}
      >
        {paragraphs.map((p, i) => (
          <TextGenerateEffect
            key={i}
            words={p}
            className="mb-4 border border-blue-400/30 p-4 rounded-lg bg-gray-100/50  text-gray-800"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            duration={0.5}
            textSize="text-sm md:text-lg"
          />
        ))}
      </motion.div>

      <button className="group relative flex items-center group-hover:gap-6 justify-center bg-white text-black px-12 py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out mx-auto"
       onClick={handleClick}
      >
        {/* Text */}
        <span className="font-semibold text-lg transition-all duration-300 group-hover:translate-x-[-10px]">
          Read My CV
        </span>

        {/* Icon */}
        <span
          className="absolute right-2 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full 
             opacity-0 translate-x-6 
              group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-12
               transition-all duration-300 ease-in-out"
        >
          📄
        </span>
      </button>
    </SectionWrapper>
  );
}
