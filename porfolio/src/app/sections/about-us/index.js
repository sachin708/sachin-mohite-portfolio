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

  return (
    <SectionWrapper id="about" className="xl:max-w-300! mx-auto">
      <h2 className="text-4xl mb-6 text-center font-semibold">About Me!</h2>
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

      <button className="bg-white text-black px-4 py-2 mx-auto block mt-6 shadow rounded">
        Read My CV
      </button>
    </SectionWrapper>
  );
}
