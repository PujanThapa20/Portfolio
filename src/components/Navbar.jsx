import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide navbar as soon as the user scrolls slightly from the very top
    if (latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? -20 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] px-4 py-4 sm:px-6 sm:py-6 md:px-12 flex items-center justify-between pointer-events-none"
    >
      {/* Logo */}
      <div className={`pointer-events-auto transition-opacity duration-300 ${hidden ? 'hidden' : 'block'}`}>
        <a href="#" className="text-xl md:text-2xl font-heading font-medium tracking-widest text-stone-200 hover:text-white transition-colors">
          PUJAN<span className="text-stone-500">.</span>
        </a>
      </div>

      {/* Contact Button */}
      <div className={`pointer-events-auto transition-opacity duration-300 ${hidden ? 'hidden' : 'block'}`}>
        <a 
          href="#contact"
          className="px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm rounded-full border border-stone-700/50 bg-stone-900/50 backdrop-blur-md text-stone-300 font-medium hover:bg-stone-800 hover:text-white hover:border-stone-500 transition-all duration-300 shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
