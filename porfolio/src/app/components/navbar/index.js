"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);

  const nav = ["home", "about", "stack", "services", "projects", "contact"];

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      nav.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(id);
          }
        }
      });
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
   <nav
  className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
             flex items-center justify-center
             bg-white/80 text-black p-2 px-2 rounded-[20px] 
             w-[90%] md:w-auto md:px-6
             xl:max-w-[50%] backdrop-blur-xl shadow-lg"
>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        {nav.map((n) => (
          <button
            key={n}
            onClick={() => scroll(n)}
            className={`capitalize px-3 py-1 rounded transition-colors duration-300 ${
              active === n ? "bg-[#f04646] text-white" : "hover:-translate-y-1 hover:scale-105"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Mobile menu toggle */}
      <div className="flex flex-col justify-end w-full">
        <button
          className="md:hidden text-2xl ml-2 text-end"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"} {/* Hamburger → Close */}
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div
            className="w-[90%] absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 p-4
                        bg-[#FFF] backdrop-blur-md rounded-[20px] md:hidden z-100"
          >
            {nav.map((n) => (
              <button
                key={n}
                onClick={() => scroll(n)}
                className={`w-full capitalize px-2 py-1 rounded transition-colors duration-300 ${
                  active === n ? "bg-[#29dce9] text-xl" : "hover:text-gray-300"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
