"use client";
import { useState } from "react";
import { SectionWrapper } from "@/app/components/section-wrapper";

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      link: "https://staging.narayanagroup.com/",
      title: "Narayana group v2",
      img: "/projects/narayana-group-v2-1024.webp",
    },
    {
      link: "https://gtet.in/",
      title: "GTET Website",
      img: "/projects/gtet-768.webp",
    },
    {
      link: "https://narayanaias.com/",
      title: "UPSC Website",
      img: "/projects/upsc-320.webp",
    },
    {
      link: "https://www.narayanaschools.in/",
      title: "Narayana Schools",
      img: "/projects/narayana-school.webp",
    },
    {
      link: "https://petpals-masai.vercel.app/",
      title: "PetPals Website",
      img: "/projects/petpals-1024.webp",
    },
    {
      link: "https://gem-garden-jewellery.vercel.app/",
      title: "Gem Garden Jewellery",
      img: "/projects/jewellery-1024.webp",
    },
    {
      link: "https://kitchen-kingdom-ai.vercel.app/auth/login",
      title: "Kitchen Kingdom AI",
      img: "/projects/kitchen-king-1024.webp",
    },
    {
      link: "https://velvety-maamoul-e37b50.netlify.app/",
      title: "Travel Project",
      img: "/projects/trival-640.webp",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  

  return (
    <SectionWrapper id="projects" className="pt-16 xl:pt-22">
      <h2 className="text-4xl xl:text-6xl text-center font-semibold mb-6 xl:mb-16">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 p-2">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="transition p-6 rounded-[48px] bg-[rgba(102,112,255,0.05)] backdrop-blur-[3px] "
          >
            <div className="w-full h-54 object-cover rounded-[18px] mb-4 overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full transition-transform duration-300 hover:scale-110 "
            />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 mx-auto block bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          View More
        </button>
      )}
      {
        showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-8 mx-auto block bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
          >
            View Less
          </button>
        )
      }
    </SectionWrapper>
  );
}