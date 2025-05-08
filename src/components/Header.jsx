import React, { useEffect, useState } from "react";
import { user } from "../constants/content";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

export default function Header() {
  const [text] = useTypewriter({
    words: [user.title, 'React Developer', 'UI/UX Enthusiast', 'Problem Solver'],
    loop: true,
    delaySpeed: 2000
  });
  
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="relative h-screen flex justify-center items-center">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              rotate: [0, Math.random() * 10 - 5],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3 + i,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`,
              background: 'linear-gradient(45deg, #e50914, #b20710)',
              borderRadius: '50%',
              filter: 'blur(8px)',
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 drop-shadow-[0_5px_5px_rgba(229,9,20,0.4)]">
              {user.name}
            </span>
          </h1>
          
          <div className="text-xl md:text-3xl text-gray-300 font-light h-12">
            <span>{text}</span>
            <Cursor cursorColor="#e50914" />
          </div>
          
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-lg transition-all duration-300 inline-flex items-center"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}