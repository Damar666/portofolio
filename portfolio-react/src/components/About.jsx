import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="glow-text text-primary-400">Me</span>
        </motion.h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 md:order-1">
            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              {/* Glow Effect */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Siapa Saya?</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Saya adalah mahasiswa D3 Manajemen Informatika Politeknik Negeri Lampung yang fokus 
                  pada pengembangan web. Saya memiliki passion dalam menciptakan tampilan antarmuka 
                  yang modern dan interaktif.
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Saat ini, saya sedang mendalami teknologi Fullstack Javascript dan aktif mengerjakan 
                  berbagai proyek freelance untuk mengasah skill.
                </p>

                <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg mt-4"
                >
                  More About Me <FaArrowRight />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={imageVariants} className="flex justify-center order-1 md:order-2">
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              className="relative group w-full max-w-sm"
            >
              {/* Shadow Effect */}
              <div className="absolute inset-0 bg-primary-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src="/damar.jpeg"
                  alt="Damar Arif Ghifari"
                  className="w-full rounded-3xl border-2 border-white/20 shadow-2xl relative z-10"
                />
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
