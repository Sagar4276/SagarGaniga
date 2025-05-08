import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NetflixBg from "./components/NetflixBg";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    };

    // Add event listeners to all anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <NetflixBg />
        
        <Navbar />
        
        <motion.main 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Header />
          <About />
          <Projects />
          <Contact />
        </motion.main>
        
        <footer className="py-8 text-center text-gray-500 relative z-10 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Sagar Ganiga. All rights reserved.</p>
            
            <motion.div 
              className="text-gray-400 mt-2 text-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              Crafted with <span className="text-red-500">♥</span> by Sagar
            </motion.div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;