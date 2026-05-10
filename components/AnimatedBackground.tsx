'use client';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  // Use fixed positions instead of random
  const positions = [
    { top: '10%', left: '15%', width: 80, height: 80, delay: 0 },
    { top: '25%', left: '70%', width: 60, height: 60, delay: 1 },
    { top: '45%', left: '30%', width: 100, height: 100, delay: 2 },
    { top: '60%', left: '80%', width: 70, height: 70, delay: 3 },
    { top: '75%', left: '20%', width: 90, height: 90, delay: 4 },
    { top: '85%', left: '55%', width: 50, height: 50, delay: 5 },
    { top: '15%', left: '85%', width: 65, height: 65, delay: 6 },
    { top: '50%', left: '10%', width: 75, height: 75, delay: 7 },
    { top: '30%', left: '45%', width: 55, height: 55, delay: 8 },
    { top: '70%', left: '65%', width: 85, height: 85, delay: 9 },
    { top: '90%', left: '40%', width: 45, height: 45, delay: 10 },
    { top: '5%', left: '50%', width: 95, height: 95, delay: 11 },
  ];

  const circlePositions = [
    { top: '20%', left: '25%', width: 150, height: 150, delay: 0 },
    { top: '50%', left: '60%', width: 200, height: 200, delay: 1 },
    { top: '70%', left: '15%', width: 120, height: 120, delay: 2 },
    { top: '35%', left: '80%', width: 180, height: 180, delay: 3 },
    { top: '80%', left: '70%', width: 140, height: 140, delay: 4 },
    { top: '10%', left: '40%', width: 100, height: 100, delay: 5 },
    { top: '65%', left: '45%', width: 160, height: 160, delay: 6 },
    { top: '40%', left: '10%', width: 130, height: 130, delay: 7 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Animated grid - top to bottom scanning */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-cyan-500/20"
            style={{ 
              top: `${i * 7}%`, 
              left: 0,
              right: 0,
            }}
            animate={{ 
              x: ['-100%', '100%'],
            }}
            transition={{ 
              duration: 8 + i * 0.5, 
              repeat: Infinity, 
              delay: i * 0.3,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Animated grid - left to right scanning */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-[1px] bg-cyan-500/20"
            style={{ 
              left: `${i * 7}%`, 
              top: 0,
              bottom: 0,
            }}
            animate={{ 
              y: ['-100%', '100%'],
            }}
            transition={{ 
              duration: 10 + i * 0.5, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes - fixed positions */}
      {positions.map((pos, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-cyan-500/15"
          style={{
            width: `${pos.width}px`,
            height: `${pos.height}px`,
            top: pos.top,
            left: pos.left,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: pos.delay,
          }}
        />
      ))}

      {/* Pulsing circles - fixed positions */}
      {circlePositions.map((circle, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-cyan-500/8"
          style={{
            width: `${circle.width}px`,
            height: `${circle.height}px`,
            top: circle.top,
            left: circle.left,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: circle.delay,
          }}
        />
      ))}

      {/* Diagonal scanning line */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute w-[200%] h-[200%] bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent"
          style={{ transform: 'rotate(45deg)' }}
          animate={{
            x: ['-50%', '50%'],
            y: ['-50%', '50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}