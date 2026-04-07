"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function AnimatedRoles() {
  const roles = [
    "Frontend Engineer",
    "ReactJS Developer",
    "NextJS Developer",
    "Software Developer",
    "MERN Developer",
    "Frontend Performance Engineer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <motion.p
      key={index}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="text-xl mt-4"
    >
      {roles[index]}
    </motion.p>
  );
}
