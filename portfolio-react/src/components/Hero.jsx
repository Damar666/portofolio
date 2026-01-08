import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Halo, Saya Damar Arif Ghifari';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/6281369149235', color: '#25D366' },
    { icon: FaEnvelope, href: 'mailto:damarghifari2@gmail.com', color: '#EA4335' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/damararif', color: '#0A66C2' },
    { icon: FaGithub, href: 'https://github.com/damar666', color: '#ffffff' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
      >
        {/* Text Content */}
        <div className="space-y-4 md:space-y-6 order-2 md:order-1">
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {text}
            {showCursor && <span className="animate-pulse text-primary-400">|</span>}
          </motion.h1>

          <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
            Junior Web Developer
          </motion.h3>

          <motion.p variants={itemVariants} className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Mahasiswa Informatika yang antusias membangun website modern, responsif, dan fungsional. 
            Fokus menciptakan pengalaman pengguna yang menarik melalui kode yang rapi dan efisien.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(122, 162, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-primary-500 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg"
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="/cv-.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(122, 162, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-primary-500 text-primary-400 rounded-full text-sm sm:text-base font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Download CV <FaDownload />
            </motion.a>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, backgroundColor: social.color }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary-500 text-primary-400 hover:text-white transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center order-1 md:order-2"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow: '0 0 40px #00e5ff, 0 0 80px #ff00ff, 0 0 120px #ffee00',
            }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/damarr.jpeg"
              alt="Damar Arif Ghifari"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary-500 shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
