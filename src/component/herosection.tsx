"use client";

import Head from "next/head";
import Image from "next/image";
import "aos/dist/aos.css";
import Contact from "@/component/contact";
import About from "@/component/about";
import Skills from "@/component/skills";
import {
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaRegKeyboard,
} from "react-icons/fa";
import Product from "@/component/product";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";



export default function Home() {
  

  return (

    <div className="bg-slate-200">


      <Head>
        <title>Rahima&apos;s Portfolio</title>
        <meta
          name="description"
          content="Rahima's personal portfolio website"
        
         />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Rahima&apos;s Portfolio</h1>
          <nav className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-pink-600" />
              </SheetTrigger>
              <SheetContent  className="bg-slate-200">
                <SheetHeader>
                  <SheetTitle className=" bg-slate-200 underline font-bold text-purple-800 text-3xl">
                    Rahima&apos;s Portfolio
                  </SheetTitle>
                  <SheetDescription>
                    <ul className=" font-bold mt-7 flex flex-col  items-center space-y-4">
                      <li className=" bg-slate-200 ">
                        <Link
                          href="/#about"
                          className="text-pink-700 bg-slate-200 italic text-3xl font-semibold hover:text-black"
                        >
                          About Me
                        </Link>
                      </li>
                      <li className=" bg-slate-200  flex flex-col  items-center space-y-4">
                        <Link
                          href="/#skills"
                          className="text-pink-700  flex flex-col  items-center space-y-4 bg-slate-200  italic text-3xl font-semibold hover:text-black"
                        >
                          My Skills
                        </Link>
                        <Link
                          href="/#product"
                          className="text-pink-700  flex flex-col  items-center space-y-4 bg-slate-200  italic text-3xl font-semibold hover:text-black"
                        >
                          My Creation (Projects)
                        </Link>
                        <Link
                          href="/#contact"
                          className="text-pink-700 bg-slate-200  flex flex-col  items-center space-y-4 italic text-3xl font-semibold hover:text-black"
                        >
                          Contact Me
                        </Link>
                      </li>
                    </ul>
                   
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </nav>


<nav className="hidden md:block">
  <ul className="flex space-x-4 text-lg">
    <li>
    <Link href="/#about" className="text-white font-semibold hover:text-pink-600">About Me</Link>
    </li>
    <li>
      <Link href="/#skills"className="text-white font-semibold hover:text-pink-600">My Services & Skills  </Link>
    </li>
    <li>
      <Link href="/#product"className="text-white font-semibold hover:text-pink-600">My Creation (Projects)</Link>
    </li> 
    <li>
      <Link href="/#contact" className="text-white font-semibold hover:text-pink-600">Contact Me</Link>
    </li>
  </ul>
</nav>
</div>










      </header>

        
        <main className="bg-slate-900 h-screen flex items-center justify-center">
    
      <div className="flex items-center justify-between w-full max-w-5xl">
        <div className="flex-1 text-center">
        <div data-aos="zoom-in-down rounded-lg shadow-lg" className="w-40 h-40 mx-auto"
        ></div>
        <Image 
            src="/images/pic 1.jpeg"
            alt="Rahima's Profile Picture"
            width={500}
            height={500}
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
          
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 ">
            Hi, I&apos;m Rahima Salahuddin
          </h1>
          <p className="text-gray-400 text-xl mb-4">
            A Web Developer With A Passion For Creating Dynamic And
            Interactive Web Development.
          </p>
          <a
  href="https://www.linkedin.com/in/rahima-shaikh-2b09a328b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BRvMI%2Fz8GRFWXO6kLt3gtdg%3D%3D"
  className="bg-pink-500 justify-center text-white rounded-full px-2 py-2 mt-4 hover:bg-blue-600 transition duration-300 flex items-center space-x-2"
>
  <span>Contact Me Via LinkedIn</span>
  <FaLinkedin />
</a>
 
</div>

      </div>
    </main>
     
      {/* About Section */}
      <About />
      
      
    
      <section className="py-10 bg-slate-800" id="skills">
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
