import React from 'react';
import { motion } from 'framer-motion';
import { user } from '../constants/content';
import {theme ,animations} from '../constants/content';

const Logo = () => {
  return (
    <div className="relative">
      {/* Glow effect behind logo */}
      <div className="absolute inset-0 rounded-full blur-md" 
        style={{ background: theme.gradients.primary, opacity: 0 }}
      />
      
      <motion.img 
        src={user.logo}
        alt="Sagar Ganiga Logo" 
        className="h-16 relative z-10"
        initial={{ rotateY: 0 }}
        {...animations.logoSpin}
        whileHover={{ 
          scale: 1.2, 
        }}
      />
    </div>
  );
};

export default Logo;