import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Component() {
  const [dots, setDots] = useState(['', '', '']);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        const newDots = [...prevDots];
        const filledDotIndex = newDots.findIndex((dot) => dot === '');
        if (filledDotIndex === -1) {
          return ['', '', ''];
        } else {
          newDots[filledDotIndex] = '.';
          return newDots;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-background bg-opacity-50 backdrop-blur-sm'>
      <div className='text-center'>
        <motion.div
          className='text-4xl font-bold text-foreground mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Loading
        </motion.div>
        <motion.div
          className='flex justify-center space-x-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {dots.map((dot, index) => (
            <motion.div
              key={index}
              className='w-4 h-4 bg-blue-500 rounded-full'
              initial={{ scale: 0 }}
              animate={{ scale: dot ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
