import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="navbar">
      <motion.div 
        className="navbar-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="home" smooth={true} duration={500}>Home</Link>
      </motion.div>
      <motion.div 
        className="navbar-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="about" smooth={true} duration={500}>O mnie</Link>
      </motion.div>
      <motion.div 
        className="navbar-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
      </motion.div>
      <motion.div 
        className="navbar-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="contact" smooth={true} duration={500}>Kontakt</Link>
      </motion.div>
    </nav>
  );
}

export default Navbar;