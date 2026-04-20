"use client";
import { SectionWrapper } from "@/app/components/section-wrapper";
import {
  makeSmoothStaggerParent,
  makeSmoothYReveal,
  makeStaggerParent,
} from "@/motion/generators/variant";
import { EASE } from "@/motion/tokens/easings";
import { useState } from "react";
import { motion } from "framer-motion";

export function Skills() {
  const tech = [
    {
      name: "Next.JS",
      img: "/skills/next.js-96.png",
      description:
        "Next.js elevates web development by combining React’s power with seamless server-side rendering, static site generation, and file-based routing. It allows me to build fast, SEO-friendly, and scalable applications while keeping developer experience smooth and efficient.",
    },
    {
      name: "React.JS",
      img: "/skills/react-96.png",
      description:
        "React is a powerful JavaScript library for building dynamic user interfaces. It enables me to create reusable components, manage state efficiently, and build complex applications that are both fast and maintainable.",
    },
    {
      name: "Redux",
      img: "/skills/redux-96.png",
      description:
        "Redux is a predictable state container for JavaScript apps. It helps me manage application state consistently, handle complex logic, and coordinate asynchronous actions, all while keeping the code organized and testable.",
    },
    {
      name: "Tailwind",
      img: "/skills/tailwind-css-96.png",
      description:
        "Tailwind CSS is a utility-first framework that lets me build fully custom designs quickly. With pre-defined classes, I can style applications without writing large amounts of custom CSS, ensuring both speed and consistency.",
    },
    {
      name: "Sass",
      img: "/skills/sass-96.png",
      description:
        "Sass is a CSS preprocessor that enhances styling capabilities with variables, nested rules, mixins, and functions. It makes writing and maintaining CSS faster, cleaner, and more efficient for complex projects.",
    },
    {
      name: "CSS3",
      img: "/skills/css-icon.png",
      description:
        "CSS3 is the latest standard for styling web applications. With advanced features like Flexbox, Grid, animations, transitions, and responsive design tools, I can create visually appealing, interactive, and adaptive layouts.",
    },
    {
      name: "HTML5",
      img: "/skills/html-icon.png",
      description:
        "HTML5 is the backbone of modern web applications, providing semantic elements, multimedia support, forms, APIs, and enhanced accessibility. It enables me to build structured, interactive, and modern web pages efficiently.",
    },
    {
      name: "TypeScript",
      img: "/skills/typescript-96.png",
      description:
        "TypeScript extends JavaScript with strong typing, interfaces, and advanced tooling. It helps me catch errors early, write more reliable and maintainable code, and develop large-scale applications with confidence.",
    },
    {
      name: "JavaScript",
      img: "/skills/javascript-96.png",
      description:
        "JavaScript is the most widely used programming language for web development. It enables me to build interactive, dynamic, and responsive web experiences, manipulate the DOM, and integrate with APIs across the web.",
    },
    {
      name: "Node.js",
      img: "/skills/node-js-96.png",
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows me to build scalable server-side applications, real-time APIs, and backend services using JavaScript, making development faster and unified across the stack.",
    },
    {
      name: "MongoDB",
      img: "/skills/mongodb-96.png",
      description:
        "MongoDB is a flexible, document-oriented NoSQL database. It allows me to store data in JSON-like structures, scale horizontally, and manage applications that require fast, adaptable data storage.",
    },
    {
      name: "Git",
      img: "/skills/github-logo-94.png",
      description:
        "Git is a distributed version control system that lets me track code changes, manage project history, and collaborate seamlessly with other developers. It is essential for teamwork and maintaining a clean codebase.",
    },
    {
      name: "Framer Motion",
      img: "/skills/framer-logo-96.png",
      description:
        "Framer Motion is an animation library for React that allows me to create smooth, interactive, and expressive animations. It makes adding motion intuitive, helping interfaces feel alive and responsive without heavy code overhead.",
    },
  ];

  const soft = [
    {
      name: "Problem Solving",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description:
        "Ability to analyze problems, debug issues, and provide efficient solutions in real-world scenarios.",
    },
    {
      name: "Communication",
      img: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png",
      description:
        "Clearly explain technical concepts and collaborate effectively with team members.",
    },
    {
      name: "Team Collaboration",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      description:
        "Work efficiently with cross-functional teams to achieve project goals.",
    },
    {
      name: "Adaptability",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
      description:
        "Quickly learn and adapt to new technologies, tools, and environments.",
    },
    {
      name: "Time Management",
      img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      description:
        "Manage tasks effectively to meet deadlines and deliver projects on time.",
    },
    {
      name: "Attention to Detail",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
      description:
        "Write clean, maintainable code with focus on accuracy and quality.",
    },
  ];

  // Store flip state per card
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (name) => {
    setFlippedCards((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const headerStagger = makeSmoothStaggerParent({
    delayChildren: 0.1,
    staggerChildren: 0.12,
  });

  const cardsStagger = makeStaggerParent({ delayChildren: 0.1 });

  return (
    <SectionWrapper
      id="skills"
      className="pt-16 xl:pt-22"
      variants={headerStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      <h2 className="text-4xl xl:text-6xl text-center font-semibold mb-6 xl:mb-16">
        My Skills
      </h2>
      <h3 className="text-2xl xl:text-4xl text-center font-semibold mb-2 xl:mb-8">
        Tech Skills
      </h3>
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-14 p-2"
        variants={cardsStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {tech.map((t, i) => (
          <motion.div
            key={t.name}
            className="cursor-pointer w-full p-4 bg-blue-300/20 rounded-2xl"
            variants={makeSmoothYReveal({
              yInitial: 80,
              ease: EASE.inOut,
              duration: 1.0,
              delay: i * 0.25,
            })}
            onClick={() => toggleFlip(t.name)}
          >
            <div
              className={`bg-[#FFF] rounded-2xl relative w-full h-80 transition-transform duration-700 transform-style preserve-3d ${
                flippedCards[t.name] ? "rotate-x-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg flex flex-col items-center justify-center gap-4 p-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-32 h-32 object-contain mt-6"
                />
                <h4 className="font-medium text-lg">{t.name}</h4>
                <p className="text-sm mt-6">Tap to flip</p>
              </div>

              {/* Back Side */}
              <div className="flex flex-col absolute w-full h-full backface-hidden rotate-x-180 rounded-2xl bg-[#FFF] items-center p-6">
                <p className="text-md font-semibold text-gray-700">
                  {t.description}
                </p>
                <p className="text-sm mt-6 bottom-6 fixed">Tap to flip</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <h3 className="text-2xl xl:text-4xl text-center font-semibold mt-4 xl:mt-10 mb-2 xl:mb-8">
        Soft Skills
      </h3>
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-14 p-2"
        variants={cardsStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {soft.map((t, i) => (
          <motion.div
            key={t.name}
            className="cursor-pointer w-full p-3 bg-blue-300/20 rounded-2xl"
            variants={makeSmoothYReveal({
              yInitial: 80,
              ease: EASE.inOut,
              duration: 1.0,
              delay: i * 0.25,
            })}
            // onClick={() => toggleFlip(t.name)}
          >
            <div
              className={`bg-[#FFF] rounded-2xl relative w-full min-h-40 md:max-h-48 transition-transform duration-700 transform-style preserve-3d ${
                flippedCards[t.name] ? "rotate-x-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg flex flex-col items-center justify-center gap-3 p-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-26 h-26 object-contain mt-1"
                />
                <h4 className="font-medium text-lg">{t.name}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
