import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    description: "Leading the frontend architecture for a high-traffic enterprise application using React and Tailwind CSS. Implementing sophisticated UI/UX designs and ensuring perfect performance. Spearheaded the migration to modern state management, reducing load times by 40%."
  },
  {
    id: 2,
    role: "Frontend Web Developer",
    company: "Creative Digital Agency",
    period: "2022 - 2024",
    description: "Developed elegant marketing websites and interactive web apps. Integrated Supabase for real-time features and managed state with modern React practices. Collaborated closely with designers to ensure pixel-perfect, jaw-dropping animations."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Visionaries",
    period: "2021 - 2022",
    description: "Assisted in building minimal landing pages using HTML, CSS, and Vanilla JavaScript. Gained solid foundational experience in database management with SQL, setting the groundwork for full-stack frontend capabilities."
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // We make the section 300vh tall to allow scrolling through the 3 experiences.
  // The content inside will be sticky.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 1) to the 3 experiences
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-stone-950">
      
      {/* Sticky container that stays in view while we scroll through the 300vh */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/40" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-stone-200">
              Professional <span className="font-medium text-stone-400">Path</span>
            </h2>
            <div className="h-[1px] w-12 bg-stone-700" />
            <p className="mt-4 text-stone-500 text-sm tracking-widest uppercase font-medium">Scroll to explore</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start min-h-[400px]">
            
            {/* Left Side: Timeline List */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2 relative">
              <div className="absolute left-[3px] top-4 bottom-4 w-px bg-stone-800/50" />
              
              {experiences.map((exp, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={exp.id}
                    // We remove onClick/onHover because it's now driven purely by scroll
                    className={`relative pl-6 py-4 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                  >
                    {/* Animated Indicator */}
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] rounded-full bg-stone-400"
                      initial={false}
                      animate={{ height: isActive ? 32 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    
                    {!isActive && (
                      <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-stone-700 transition-colors" />
                    )}

                    <h3 className={`text-lg transition-colors duration-300 ${isActive ? 'text-stone-200 font-medium' : 'text-stone-400 font-light'}`}>
                      {exp.company}
                    </h3>
                    <p className="text-xs font-mono tracking-widest uppercase text-stone-500 mt-1">
                      {exp.period}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Detailed View */}
            <div className="md:col-span-7 lg:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="glass-card p-8 md:p-12 rounded-2xl border-stone-800/60 bg-stone-900/30 backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-stone-700/10 rounded-full blur-[80px] pointer-events-none" />

                  <div className="relative z-10">
                    <p className="text-stone-500 font-mono text-xs tracking-widest uppercase mb-4">
                      {experiences[activeIndex].company} • {experiences[activeIndex].period}
                    </p>
                    
                    <h3 className="text-2xl md:text-3xl font-light text-stone-100 mb-6 leading-tight">
                      {experiences[activeIndex].role}
                    </h3>
                    
                    <p className="text-base text-stone-400 leading-relaxed font-light">
                      {experiences[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
