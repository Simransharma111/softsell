import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-light py-1" id="hero" data-aos="fade-up" data-aos-duration="1000">
      <div className="container text-center">
        <motion.h1 
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Turn Unused Software into Cash
        </motion.h1>
        
        <motion.p 
          className="lead my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          SoftSell helps you resell unused software licenses in 3 easy steps.
        </motion.p>
        
        <motion.button 
  className="btn btn-primary btn-lg mt-3"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Get a Quote
</motion.button>


      </div>
    </section>
  );
};

export default Hero;
