import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Sistem Akademik',
      description: 'Sistem informasi pengelolaan data mahasiswa, dosen, dan nilai berbasis web.',
      image: '/akademik.png',
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/damar666',
      demo: '#',
    },
    {
      title: 'Website E-Commerce',
      description: 'Platform jual beli online dengan fitur keranjang belanja dan checkout otomatis.',
      image: '/ecomerce.png',
      tech: ['CodeIgniter 4', 'MySQL', 'Midtrans'],
      github: 'https://github.com/damar666',
      demo: '#',
    },
    {
      title: 'Aplikasi Kasir (POS)',
      description: 'Aplikasi pencatatan transaksi penjualan toko real-time dan laporan keuangan harian.',
      image: '/kasir.png',
      tech: ['JavaScript', 'Firebase', 'CSS'],
      github: 'https://github.com/damar666',
      demo: '#',
    },
    {
      title: 'Website Portofolio',
      description: 'Website personal branding dengan tema Dark Mode, animasi scroll, dan layout responsif.',
      image: '/portofolio.png',
      tech: ['HTML', 'CSS Native', 'JavaScript'],
      github: 'https://github.com/damar666',
      demo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
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
          My <span className="glow-text text-primary-400">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-2 md:px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs md:text-sm font-medium border border-primary-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
