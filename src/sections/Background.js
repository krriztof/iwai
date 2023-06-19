import React from 'react';
import { motion } from 'framer-motion';

function Background() {
  const variants = {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div 
      className="background"
      variants={variants}
      initial="initial"
      animate="animate"
      transition="transition"
    />
  );
}

export default Background;