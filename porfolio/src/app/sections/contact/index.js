"use client";
import { SectionWrapper } from "@/app/components/section-wrapper";

const usefulLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sachin-mohite-0893a7203/", target: "_blank" },
  { name: "GitHub", href: "https://github.com/sachin708", target: "_blank" },
  { name: "Twitter", href: "#", target: "_blank" }, // Replace with actual Twitter if needed
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="xl:min-h-[50vh]! pt-16 xl:pt-22" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        
        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-xl xl:text-[28px] font-bold">Contact Me</h3>
          <p className="text-[14px] xl:text-[18px]">Phone No: <a href="tel:9021465072" className=" hover:text-gray-400">9021465072</a> / <a href="tel:7378525215" className="underline hover:text-gray-400">7378525215</a></p>
          <p className="text-[14px] xl:text-[18px]">Email: <a href="mailto:sachinmohite708@gmail.com" className=" hover:text-gray-400">sachinmohite708@gmail.com</a></p>
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold xl:text-[28px]">Useful Links</h3>
          {usefulLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block capitalize hover:text-gray-400 text-[14px] xl:text-[18px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold xl:text-[28px]">Social Links</h3>
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              target={link.target}
              rel="noopener noreferrer"
              className="block hover:text-gray-400 text-[14px] xl:text-[18px]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}