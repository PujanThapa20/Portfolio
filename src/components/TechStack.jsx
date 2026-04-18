import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", 
  "Framer Motion", "Supabase", "SQL", "Git & GitHub", "UI/UX Design"
];

const TechStack = () => {
  return (
    <section className="min-h-[70vh] py-24 relative flex items-center justify-center">
      {/* Very subtle earthy background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-stone-800/10 rounded-[100%] blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-stone-200">
            Technical <span className="font-medium text-stone-400">Expertise</span>
          </h2>
          <div className="h-[1px] w-12 bg-stone-700 mx-auto" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(41, 37, 36, 0.8)" }} // stone-800
              className="px-6 py-3 rounded-full border border-stone-800 bg-stone-900/40 backdrop-blur-sm text-stone-300 text-sm md:text-base cursor-pointer transition-colors duration-300 shadow-sm"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
