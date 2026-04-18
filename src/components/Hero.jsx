import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-16 pt-24 lg:pt-20">
      {/* Background Ambient Glows (Earth tones) */}
      <div className="absolute top-1/3 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-stone-800/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-emerald-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-stone-100"
          >
            Hi, I'm <br />
            <span className="text-gradient leading-tight">Pujan Thapa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-stone-400 mb-8 max-w-md font-light leading-relaxed"
          >
            A minimal, design-focused Frontend Developer & Computer Science Graduate crafting sophisticated digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#about" className="group flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
              <span className="text-xs tracking-widest uppercase font-medium">Discover More</span>
              <div className="w-8 h-[1px] bg-stone-600 group-hover:w-16 group-hover:bg-stone-400 transition-all duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image/Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.2 }}
          className="flex justify-center lg:justify-end perspective-1000 mt-12 lg:mt-0"
        >
          <div className="glass-card w-full max-w-[200px] sm:max-w-[280px] rounded-2xl p-3 flex flex-col relative group shadow-2xl overflow-hidden border-t border-l border-white/5 bg-stone-900/60 backdrop-blur-2xl">
            {/* Subtle nature accent inside card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-800/10 rounded-full blur-2xl" />

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
              <img
                src="/hero-image.jpeg"
                alt="Pujan Thapa"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="text-left px-2 mb-1">
              <h2 className="text-lg font-medium text-stone-200 tracking-wide mb-1">Frontend Dev.</h2>
              <p className="text-stone-500 font-mono text-[10px] tracking-widest uppercase">Base: Kathmandu</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-12 flex items-center gap-2 sm:gap-3 text-stone-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium rotate-[-90deg] origin-left translate-y-5">Scroll</span>
        <motion.div
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-stone-700 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
