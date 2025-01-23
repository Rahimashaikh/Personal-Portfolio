import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Skill percentages
  const skillPercentages = [
    100, // HTML
    70, // CSS
    95, // JavaScript
    95, // TypeScript
    70, // Canvas
    100, // Word excel
    80, // content writing
    95, // Next.js
    90, // Tailwind CSS
  ];

  // Image URLs (You can replace these with your actual image paths)
  const skillImages = [
    "/images/html.png",
    "/images/css.png",
    "/images/js.png",
    "/images/ts.png",
    "/images/canvas.png",
    "/images/wordexcel.png",
    "/images/content.png",
    "/images/nextjs.png",
    "/images/tailwind.png",
  ];

  useEffect(() => {
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    skillItemsRef.current.forEach((item, index) => {
      if (item && progressBarsRef.current[index]) {
        gsap.fromTo(
          item,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 1, delay: index * 0.2, ease: "power3.out" }
        );

        gsap.fromTo(
          progressBarsRef.current[index],
          { width: "0%" },
          { width: `${skillPercentages[index]}%`, duration: 2, ease: "power3.out" }
        );
      }
    });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20" ref={skillsRef}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skillPercentages.map((percentage, index) => (
            <div
              ref={(el) => { if (el) skillItemsRef.current[index] = el }}
              key={index}
              className="skill-item flex items-center justify-center gap-4"
            >
              {/* Skill Image */}
              <Image
                src={skillImages[index]} // Dynamically use skill image
                alt={`${["HTML", "CSS", "JavaScript", "TypeScript", "Canvas", "Word Excel", "Content Writing", "Next.js", "Tailwind CSS"][index]} Icon`}
                width={130}
                height={130}
                className="rounded-full"
              />
              {/* Skill Name and Progress Bar */}
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{["HTML", "CSS", "JavaScript", "TypeScript", "Canvas", "Word", "Excel", "Next.js", "Tailwind CSS"][index]}</h3>
                <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
                  <div
                    ref={(el) => { if (el) progressBarsRef.current[index] = el }}
                    className="h-full bg-blue-500 rounded-full"
                  ></div>
                </div>
                {/* Percentage Text */}
                <div className="text-xl font-semibold mt-2">{percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}