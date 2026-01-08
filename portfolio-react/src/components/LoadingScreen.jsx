import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
    >
      <div className="text-center space-y-6">
        {/* Progress Number */}
        <motion.h1
          key={progress}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl md:text-8xl font-bold gradient-text"
        >
          {progress}%
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 tracking-widest uppercase text-sm"
        >
          Loading your experience...
        </motion.p>

        {/* Animated Circles */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-primary-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
