"use client";

import Head from "next/head";
import Image from "next/image";
import "aos/dist/aos.css";
import Contact from "@/component/contact";
import About from "@/component/about";
import Skills from "@/component/skills";
import Product from "@/component/product";

import Link from "next/link";
import { FaCss3Alt, FaFacebook, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaRegKeyboard } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.set(".profile-img, .intro-text", { opacity: 0 });

    gsap.to(".profile-img", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.to(".intro-text", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    gsap.to(".star", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      opacity: "random(0.5, 1)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <Head>
        <title>Rahima&apos;s Portfolio</title>
        <meta name="description" content="Rahima's personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star bg-white rounded-full absolute"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          ></div>
        ))}
      </div>

      {/* Header Section */}
      <header className="bg-black text-white py-4 fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="text-3xl font-bold">Rahima&apos;s Portfolio</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/#about" className="hover:text-pink-600">About Me</Link></li>
              <li><Link href="/#skills" className="hover:text-pink-600">My Skills</Link></li>
              <li><Link href="/#product" className="hover:text-pink-600">My Projects</Link></li>
              <li><Link href="/#contact" className="hover:text-pink-600">Contact Me</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="relative flex items-center justify-center min-h-screen">
        <div className="relative z-10 flex items-center w-full max-w-5xl p-6">
          <div className="flex-1 text-center">
            <Image 
              src="/images/pic 1.jpeg"
              alt="Rahima's Profile Picture"
              width={300}
              height={300}
              className="profile-img rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="flex-1 text-center intro-text">
            <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Rahima Salahuddin</h1>
            <p className="text-gray-300 text-xl mb-6">
              A Web Developer With A Passion For Creating Dynamic And Interactive Web Applications.
            </p>
            <a
              href="https://www.linkedin.com/in/rahima-shaikh-2b09a328b/"
              className="bg-pink-500 text-white rounded-full px-4 py-3 flex items-center justify-center space-x-2 shadow-lg hover:bg-blue-600 transition duration-300"
            >
              <span>Contact Me Via LinkedIn</span>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </main>
      {/* About Section */}
      <About />
      
      
    
      <section className="py-10 bg-slate-900" id="skills">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            <span className="text-purple-100">My</span> Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaRegKeyboard className="text-4xl text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">TypeScript</h2>
              <p className="text-gray-600 hover:bg-slate-200 mb-4">
                I am proficient in integrating TypeScript into both frontend and
                backend projects, ensuring type safety across large codebases
                and making the development process more efficient. I constantly
                stay updated with the latest advancements in TypeScript,
                applying best practices to enhance the quality and
                maintainability of every project I work on.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaJs className="text-4xl text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">JavaScript</h2>
              <p className="text-gray-600 hover:bg-slate-200 mb-4">
                I have a strong foundation in JavaScript and use it to create
                dynamic, interactive web applications. With a focus on both core
                JavaScript and modern frameworks, I build optimized,
                high-performance projects. I am constantly learning and
                improving my skills, staying up to date with the latest
                advancements to enhance my development capabilities every day.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaHtml5 className="text-4xl text-teal-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">HTML </h2>
                <p className="text-gray-600 hover:bg-slate-200 mb-4">
                I have a strong grasp of HTML, creating well-structured and
                accessible web pages using HTML. I focus on writing clean,
                semantic code that ensures a seamless user experience across
                devices and browsers. I am proficient in optimizing HTML for 
                search engines (SEO) and ensuring that web pages are compliant 
                with web standards. My expertise includes using HTML to create 
                interactive forms, embedding multimedia elements, and leveraging 
                the latest HTML APIs to enhance functionality.
                </p>
              <a href="#" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaCss3Alt className="text-4xl text-teal-500 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">CSS </h2>
                        <p className="text-gray-600 mb-4">
                            As a CSS expert, I excel in creating visually stunning and responsive
                            designs. With a strong grasp of layout techniques, animations, and
                            preprocessors like Sass, I ensure consistency and elegance in user
                            interfaces, enhancing usability and brand identity.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
  






      {/* Product Section */}
      
      <Skills />

      <Product />
      
      <Contact />
     
      {/* Footer Section */}


      {/* Footer Section */}
      <footer className="bg-black text-white overflow-hidden py-6 mt-auto">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Rahima&apos;s Portfolio. All rights
          reserved.
          <div className="mb-6 sm:mb-0">
            <h3 className="text-pink-500 text-lg font-semibold mb-4">
              Follow Me
            </h3>
            <div className="flex justify-center space-x-3 mb-6 sm:mb-0 ">
              <a
                href="https://www.facebook.com/rahima.cuteie"
                className="text-gray-400 hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-pink-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/rahima-shaikh-2b09a328b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRvMI%2Fz8GRFWXO6kLt3gtdg%3D%3D"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
   
   
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
