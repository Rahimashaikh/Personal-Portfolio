import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';



// Define a Product interface for the product structure
interface Product {
  name: string;
  description: string;
  image: string;
  url: string;
}

const products: Product[] = [
  {
    name: ' Project 1',
    description: 'This project showcases my skills in web development and design.',
    image: '/images/makeuo.jpeg',
    url: 'https://web-by-rahima.vercel.app/',
  

  },
  {
    name: ' Project 2',
    description: 'This project showcases my skills of html , css & javascript',
    image: '/images/download2.jpg',
    url: 'https://resume-builder-by-rahima.vercel.app/',
  },
  {
    name: ' Project 3',
    description: 'This project showcases my skills of html & css',
    image: '/images/3.jpeg',
    url: 'https://static-resume-by-rahimavercelapp.vercel.app//',
  },
  {
    name: ' Project 4',
    description: 'In this project i am creating a arthmethic calculator by using html , css & javascript',
    image: '/images/4.jpg',
    url: 'https://calculator-by-rahima.vercel.app//',
  },
  {
    name: ' Project 5',
    description: 'I created a simple word-counter using html , css & javascript . It is counts the words and a number of words in a given text. ',
    image: '/images/333.jpeg',
    url: 'https://word-counter-by-rahima.vercel.app//',
  },
  {
    name: ' Project 6',
    description: 'I created my static resume cv using html , css & javascript ',
    image: '/images/static.webp',
    url: 'https://milestone-1-two-kappa.vercel.app/',
  },
];

const ProductSection = () => {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // IntersectionObserver to trigger animation when element is visible in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'ease.out',
          });
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    // Observe each product card
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Clean up observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-10">My 
        Creation (PROJECTS)</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product: Product, index: number) => (
          <a
            key={index}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-200 shadow-lg rounded-lg overflow-hidden max-w-sm transform transition duration-500 hover:scale-105"
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover block transition-transform duration-500 hover:scale-110" />
            <div className="p-6 block transition-transform duration-500 hover:scale-110">
              <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="bg-pink-500 text-white rounded-full px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300">
                View Project
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
