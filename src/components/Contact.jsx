import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { user } from "../constants/content";

const iconComponents = {
  "fa-github": FaGithub,
  "fa-linkedin": FaLinkedin,
  "fa-instagram": FaInstagram,
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formState);
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-red-900/20 rounded-full filter blur-3xl"
        animate={{ 
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-red-800/10 rounded-full filter blur-3xl"
        animate={{ 
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In <span className="text-red-600">Touch</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-2/5 space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-3">
                  <FaPaperPlane className="text-white" size={12} />
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <FaPaperPlane className="text-red-600 mr-4 text-xl" />
                  {user.email}
                </p>
                
                <p className="flex items-center text-gray-300">
                  <FaPhone className="text-red-600 mr-4 text-xl" />
                  {user.phone}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-sm uppercase text-gray-500 mb-4">Find me on</h4>
                <div className="flex gap-5">
                  {user.socials.map((social, index) => {
                    const Icon = iconComponents[social.icon];
                    return (
                      <motion.a 
                        key={index}
                        href={social.url} 
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl text-gray-400 hover:text-red-600"
                        whileHover={{ y: -5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {Icon && <Icon />}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={user.resume}
                download
                className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-3/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-4 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-800 peer transition-all"
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-4 transition-all duration-200 ${
                    formState.name ? 'text-xs text-red-500 -top-2.5 bg-black px-1' : 'top-4 text-gray-400'
                  } peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-2.5 peer-focus:bg-black peer-focus:px-1`}
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-4 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-800 peer transition-all"
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 transition-all duration-200 ${
                    formState.email ? 'text-xs text-red-500 -top-2.5 bg-black px-1' : 'top-4 text-gray-400'
                  } peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-2.5 peer-focus:bg-black peer-focus:px-1`}
                >
                  Your Email
                </label>
              </div>
              
              <div className="relative">
                <textarea 
                  name="message"
                  id="message" 
                  rows="6"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-800 resize-none peer transition-all"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 transition-all duration-200 ${
                    formState.message ? 'text-xs text-red-500 -top-2.5 bg-black px-1' : 'top-4 text-gray-400'
                  } peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-2.5 peer-focus:bg-black peer-focus:px-1`}
                >
                  Your Message
                </label>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                Send Message
                <FaPaperPlane className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}