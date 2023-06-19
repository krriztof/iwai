import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../images/zdj1.png';

function Portfolio() {
  return (
    <motion.section 
      id="portfolio" 
      className="portfolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
      </motion.h2>
      <motion.div 
        className="gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.img 
          src={myPhoto} 
          alt="Project 1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        />
        <motion.img 
          src={myPhoto} 
          alt="Project 2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.img 
          src={myPhoto} 
          alt="Project 3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
    </motion.section>
  );
}

export default Portfolio;