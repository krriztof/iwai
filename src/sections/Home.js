import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';


function Home() {
  const { scrollY } = useViewportScroll();
  const scrollToNextSection = () => {
    window.scrollTo({ top: scrollY.get() + window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.section 
      id="home" 
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Witaj na mojej stronie</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis euismod, aliquam quam non, bibendum nulla. Cras ullamcorper elementum nunc, vitae lobortis nibh faucibus quis. Duis luctus purus eu metus aliquam, vel placerat arcu feugiat. Ut bibendum, sem vel eleifend hendrerit, nisi risus ultrices nulla, id dignissim mi risus sit amet sapien. Maecenas eu odio ac augue rutrum consequat. Donec efficitur mauris vel nunc venenatis, sed fermentum purus volutpat. Aliquam erat volutpat. Pellentesque justo lacus, interdum a convallis sed, tincidunt sed nulla.</p>
      <motion.button 
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0077cc',
          color: '#fff',
          borderRadius: '5px',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Zobacz więcej
      </motion.button>
    </motion.section>
  );
}

export default Home;