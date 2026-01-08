import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="text-gray-300">
            © 2025 Damar Arif Ghifari. All Rights Reserved.
          </p>
          <motion.p
            className="text-gray-400 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span> by Damar
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
