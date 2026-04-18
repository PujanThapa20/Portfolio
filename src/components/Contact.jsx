import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] py-24 relative flex items-center">
      {/* Background abstract shape */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-stone-900/30 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-stone-200">
            Get in <span className="font-medium text-stone-400">Touch</span>
          </h2>
          <div className="h-[1px] w-16 bg-stone-700 mx-auto" />
          <p className="mt-6 text-stone-400 max-w-lg mx-auto text-base font-light">
            Have a project in mind or want to collaborate? Let's build something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8 lg:pl-8"
          >
            {[
              { icon: <Mail className="w-5 h-5" />, title: "Email", value: "hello@pujanthapa.dev" },
              { icon: <Phone className="w-5 h-5" />, title: "Phone", value: "+1 (555) 123-4567" },
              { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Kathmandu, Nepal" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-stone-800 bg-stone-900/40 flex items-center justify-center text-stone-400 group-hover:bg-stone-800 group-hover:text-stone-200 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-stone-500 text-[10px] uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-base text-stone-300 font-light group-hover:text-stone-100 transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form - Made smaller and perfectly fitted */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <form className="glass-card p-6 md:p-8 rounded-xl relative group border-stone-800/80 w-full max-w-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-stone-400 text-[10px] uppercase tracking-widest font-medium mb-1.5">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-md px-3 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-[10px] uppercase tracking-widest font-medium mb-1.5">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-md px-3 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-[10px] uppercase tracking-widest font-medium mb-1.5">Message</label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell me about your project..."
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-md px-3 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full py-3 rounded-md bg-stone-800 text-stone-200 text-sm font-medium tracking-wide hover:bg-stone-700 hover:text-white transition-colors duration-300 border border-stone-700 mt-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
