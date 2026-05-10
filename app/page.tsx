'use client';
import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import GamePage from '@/components/GamePage';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      <AnimatedBackground />
      {!showGame ? (
        <SplashScreen onComplete={() => setShowGame(true)} />
      ) : (
        <GamePage />
      )}
    </>
  );
}