"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// GSAP plugin registration for ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Reference for fade-in text
  const textRef = useRef(null);

  // GSAP animation setup
  useEffect(() => {
    // Text Fade-in Animation
    gsap.to(textRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
        
    });

    // Scroll-triggered animation for About Section
    gsap.fromTo(
      "#about",
      {
        opacity: 0,
        y: 50, // Starting 50px below original position
      },
      {
        opacity: 1,
        y: 0, // Ending at original position
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%", // Starts when #about is 80% from viewport top
          end: "top 20%", // Ends at 20% from top
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-slate-900 px-4 py-10">
      {/* Fade-in and repeat text section */}
      <div ref={textRef} className="text-2xl font-bold text-center opacity-0">
        <h1 className="text-5xl font-bold text-gray-100 mb-6">About Me</h1>

        {/* Profile Section with ID */}
        <section id="about" className="flex flex-col items-center justify-center space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/download (5).jpeg" // Ensure image path is correct
              alt="Rahima's Profile Picture"
              width={500}
              height={500}
              className="rounded-full shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Main Introduction */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="bg-blue-200 p-6 rounded-lg text-indigo-950 text-3xl font-bold opacity-95">
              Hi, I am Rahima, a passionate web developer with a knack for creating sleek and responsive websites. Currently, I am mastering AI, web3 & metaverse, aiming to build unique and functional web applications.
            </h2>

            {/* Secondary Information */}
            <h2 className="bg-blue-200 p-6 rounded-lg text-indigo-950 text-3xl font-bold opacity-80 leading-relaxed">
              With a background in IT and hands-on experience in front-end development, I bring creativity and technical expertise to every project I work on.
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
