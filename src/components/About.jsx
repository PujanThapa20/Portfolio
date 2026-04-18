import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="min-h-screen py-16 md:py-24 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-stone-950/30" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-stone-200">
            About <span className="font-medium text-stone-400">Me</span>
          </h2>
          <div className="h-[1px] w-16 bg-stone-700" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Details Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-stone-400 font-light leading-relaxed mb-6">
              Hello! I'm <strong className="font-medium text-stone-200">Pujan Thapa</strong>, a passionate Computer Science graduate and Frontend Developer. I thrive on bringing creative designs to life with elegant, efficient code. My focus is on crafting minimal, sophisticated user experiences that feel deeply engaging.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-stone-400 font-light leading-relaxed mb-10 md:mb-12">
              When I'm not writing code, you'll find me exploring the latest web technologies, experimenting with UI/UX motion design, or enjoying the tranquility of nature, which deeply inspires my design aesthetic.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: <Code className="w-5 h-5 text-stone-400" />, title: "Frontend", desc: "React, HTML, CSS" },
                { icon: <Database className="w-5 h-5 text-stone-400" />, title: "Backend", desc: "Supabase, SQL" },
                { icon: <User className="w-5 h-5 text-stone-400" />, title: "Degree", desc: "Computer Science" },
                { icon: <Globe className="w-5 h-5 text-stone-400" />, title: "Location", desc: "Available Worldwide" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:bg-stone-900/40 transition-colors"
                >
                  <div className="p-2.5 bg-stone-800/50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-stone-200 font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-xs tracking-wide">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Made smaller and perfectly square */}
            <div className="relative group w-full max-w-[220px] sm:max-w-[260px]">
              <div className="absolute -inset-4 bg-stone-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative glass-card rounded-2xl p-2 z-10 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Minimal Workspace" 
                  className="rounded-xl w-full aspect-square object-cover opacity-90 sepia-[0.2] grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
