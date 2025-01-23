
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



// GSAP mein ScrollTrigger plugin ko register karna
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  useEffect(() => {
    gsap.fromTo(
      "#contact",
      {
        opacity: 0,   // Starting opacity (invisible)
        y: 50,        // Start 50px below original position
      },
      {
        opacity: 1,   // End opacity (fully visible)
        y: 0,         // End at original position
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%", // Animation starts when top of #contact is 80% from viewport top
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section id="contact" className="flex flex-col justify-center items-center text-center text-white h-screen relative z-10 p-8">
       

        <div className="max-w-md w-full flex flex-col mt-10 bg-rose-100 p-8 rounded-lg shadow-lg z-20">
          <h2 className="text-2xl font-bold mb-6 text-black">Contact Rahima</h2>

          <form action="#" method="POST">
            <div className="mb-4">
              <label className="block text-gray-900 font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-3 border border-gray-900 rounded focus:outline-dotted focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="bg-black mb-4">
              <button
                type="submit"
                className="w-full bg-rose-400 text-black py-3 rounded-lg font-semibold hover:bg-orange-300 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
