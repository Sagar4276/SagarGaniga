import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { theme, animations } from "../constants/content";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-xl overflow-hidden h-[420px] transition-all duration-300"
      style={{
        boxShadow: hovered ? theme.shadows.hover : theme.shadows.card,
        transition: theme.transitions.medium,
      }}
      whileHover={{ y: -10 }}
    >
      {/* Gradient border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{
          background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          padding: "2px",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <div className="absolute inset-[2px] bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden z-10">
        <div className="relative h-48">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{project.desc}</p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Centered buttons that appear on hover */}
          <motion.div
            className="absolute flex gap-4 justify-center left-0 right-0 bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.link}
              className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: theme.shadows.subtleGlow,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUpRightFromSquare size={18} />
            </motion.a>

            <motion.a
              href={project.github}
              className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: theme.shadows.subtleGlow,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
