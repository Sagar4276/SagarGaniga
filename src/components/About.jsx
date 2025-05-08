import React from "react";
import { about, user, tabs } from "../constants/content";
import TabContent from "./TabContent";
import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiHtml5, SiCss3, 
  SiJavascript, SiPython, SiMongodb, SiMysql
} from "react-icons/si";

const skillIcons = [
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiMysql, color: "#4479A1" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/20 to-transparent -z-10 rounded-l-full"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            className="md:w-1/3 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform -rotate-6"></div>
            <img
              src={user.image}
              alt={user.name}
              className="w-full object-cover rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-[1.03] group-hover:shadow-red-500/30"
            />
          </motion.div>
          
          <div className="md:w-2/3 space-y-6">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About <span className="text-red-600">Me</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 whitespace-pre-line leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {about.description}
            </motion.p>
            
            {/* 3D Skill Icons */}
            <div className="flex flex-wrap gap-6 my-8">
              {skillIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative perspective-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    rotateY: 180,
                    z: 20,
                  }}
                >
                  <div className="skill-icon-wrapper preserve-3d transition-all duration-500 w-14 h-14 md:w-16 md:h-16">
                    <div className="skill-icon absolute inset-0 flex items-center justify-center bg-gray-900 rounded-xl shadow-lg p-3 backface-hidden">
                      <item.Icon size={36} color={item.color} />
                    </div>
                    <div className="skill-icon-back absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl shadow-lg p-1 text-center text-sm text-white rotate-y-180 backface-hidden">
                      <span className="text-red-500 font-semibold leading-tight">
                        {item.Icon.name.replace(/^Si/, '')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <TabContent tabs={tabs} />
          </div>
        </div>
      </div>
    </section>
  );
}