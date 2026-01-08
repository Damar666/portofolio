import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaGithub, FaCode } from 'react-icons/fa';
import { SiFirebase, SiJenkins, SiCodeigniter } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: '#e34f26', level: 90 },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', level: 85 },
    { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 80 },
    { name: 'PHP', icon: FaPhp, color: '#777bb4', level: 75 },
    { name: 'CodeIgniter 4', icon: SiCodeigniter, color: '#ee4323', level: 70 },
    { name: 'MySQL', icon: FaDatabase, color: '#00758f', level: 80 },
    { name: 'Firebase', icon: SiFirebase, color: '#ffca28', level: 65 },
    { name: 'Jenkins', icon: SiJenkins, color: '#d24939', level: 60 },
    { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 85 },
    { name: 'Visual Studio', icon: FaCode, color: '#007acc', level: 90 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="glow-text text-primary-400">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                boxShadow: `0 20px 40px ${skill.color}40`,
              }}
              whileTap={{ scale: 0.95 }}
              className="glass p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer group relative overflow-hidden"
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <skill.icon size={40} style={{ color: skill.color }} className="md:w-12 md:h-12" />
              </motion.div>

              {/* Name */}
              <h3 className="text-white font-semibold text-center text-sm md:text-base relative z-10">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Percentage */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-sm text-gray-400 relative z-10"
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
