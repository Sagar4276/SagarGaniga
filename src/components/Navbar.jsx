import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import from react-scroll
import Logo from "./Logo";
import { theme } from "../constants/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "header", label: "Home" },
    { to: "about", label: "About Me" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact Me" }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      style={{ 
        background: scrolled 
          ? 'rgba(0, 0, 0, 0.9)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))',
        boxShadow: scrolled ? theme.shadows.card : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        <ul className={`md:flex md:static md:bg-transparent md:w-auto md:h-auto md:p-0 
          fixed top-0 bg-black h-screen p-10 duration-500 z-30
          ${menuOpen ? 'right-0 w-72' : 'right-[-200px] w-0'}`}>
          
          {navItems.map((item, index) => (
            <motion.li 
              key={item.to} 
              className="md:ml-8 md:my-0 my-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <motion.div className="relative cursor-pointer">
                {/* Replace <a> with react-scroll Link */}
                <Link 
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80} // Adjust based on navbar height
                  duration={800}
                  className="text-white hover:text-red-600 text-lg md:text-base transition duration-300 nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                <motion.span 
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.li>
          ))}
          
          <FaTimes 
            onClick={closeMenu} 
            className="absolute top-6 right-6 text-white text-2xl cursor-pointer md:hidden hover:text-red-600 transition-colors"
          />
        </ul>
        
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="md:hidden"
        >
          <FaBars 
            onClick={openMenu} 
            className="text-white text-2xl cursor-pointer hover:text-red-600 transition-colors"
          />
        </motion.div>
      </div>
      
      {/* Animated gradient border */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
        initial={{ width: '0%', left: '50%' }}
        animate={{ width: scrolled ? '100%' : '0%', left: scrolled ? '0%' : '50%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  );
}