'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [slideDown, setSlideDown] = useState(false);

  useEffect(() => {
    // Auto slide down after 2.5 seconds
    const timer = setTimeout(() => {
      setSlideDown(true);
      setTimeout(onComplete, 1000);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ y: 0 }}
      animate={{ y: slideDown ? '100%' : 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top left text */}
      <div className="absolute top-8 left-8 text-white text-2xl font-bold">
        GemTU.fun
      </div>

      {/* Smaller text above logo */}
      <div className="text-center mb-4">
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          Welcome to
        </p>
      </div>

      {/* Logo in center */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.svg"
            alt="GemTU.fun logo"
            width={200}
            height={200}
            priority
            className="object-contain brightness-0 invert"
          />
        </div>
        <h1 className="text-white text-6xl font-bold">
          GemTU.fun
        </h1>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-16">
        <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
      </div>
    </motion.div>
  );
}