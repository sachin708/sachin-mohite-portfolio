"use client";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Turn ideas into fully functional, attractive websites that engage visitors and drive them to take meaningful actions—whether purchasing, subscribing, or reaching out. This service includes deep research into your audience, thoughtful UX design for smooth navigation and clear prompts, and front-end development using modern technologies to deliver a visually appealing and highly effective website.",
      img: "/services/1.png",
    },
    {
      title: "Landing Page Development",
      description:
        "Create compelling landing pages that convert visitors into leads or customers. Our landing page development service focuses on clear value propositions, persuasive copy, and strategic call-to-action buttons to maximize conversion rates. We also conduct A/B testing, optimize page load speed, and implement analytics tracking to continuously improve performance and ensure your landing pages deliver measurable results.",
      img: "/services/2.png",
    },
    {
      title: "Responsive Design",
      description:
        "Your website needs to look great and function flawlessly across all devices, from desktop computers to tablets and smartphones. I use a responsive design approach to ensure your website adapts automatically to different screen sizes, delivering an optimal user experience for all visitors, regardless of their device. This includes mobile-first design principles, flexible layouts, and touch-friendly navigation to boost engagement, reduce bounce rates, and enhance SEO performance.",
      img: "/services/3.png",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Keep your website running smoothly with our comprehensive maintenance and support services. We provide regular updates, security patches, performance monitoring, and technical assistance to ensure your site remains up-to-date and secure. A website is a continuous investment. This service ensures your site remains current, secure, and reliable through regular updates, security audits, performance checks, and prompt resolution of technical issues—keeping your online presence running smoothly and protected against threats.",
      img: "/services/4.png",
    },
    {
      title: "Performance Optimization",
      description:
        "Improve the speed and efficiency of your website to enhance user experience and search engine rankings. This includes optimizing images, compressing files, reducing server response times, caching strategies, and improving code efficiency to ensure your website loads quickly and performs smoothly for all users.",
      img: "/services/1.png",
    },
    {
      title: "Design System Creation",
      description:
        "Develop a consistent and scalable design system that ensures cohesive branding and streamlined development processes.",
      img: "/services/2.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  return (
    <SectionWrapper
      id="services"
      className="xl:max-w-320! mx-auto pt-16 xl:pt-22"
    >
      <h2 className="text-4xl xl:text-6xl text-center font-semibold mb-6 xl:mb-16">
        Services
      </h2>

      <div className="flex flex-col md:flex-row gap-6 xl:gap-12">
        {/* Left sticky title column */}
        <div className="md:w-[35%] md:sticky top-32 h-max">
          <h3 className="hidden xl:block text-3xl mt-20">{services[activeIndex].title}</h3>
        </div>

        {/* Right scrolling description column */}
        <div className="md:w-[60%] flex flex-col gap-8">
          
          {services.map((s, i) => (
            
            <motion.div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className=" p-4 rounded-lg backdrop-blur-md text-gray-800 text-[16px] xl:text-[20px]"
              onViewportEnter={() => setActiveIndex(i)}
            >
                        <h3 className="xl:hidden text-2xl mb-4 text-[#5e5ed1]">{s.title}</h3>

              {s.description}
              <motion.img
                src={s.img}
                alt="error"
                className="w-24 h-24 mx-auto mt-10 hidden xl:block"
                animate={{
                  y: [0, -25, 0, 25, 0], // vertical movement: up and down
                  rotateZ: [0, 5, -5, 0], // subtle spin for extra effect
                }}
                transition={{
                  duration: 20, // time for one full oscillation
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
