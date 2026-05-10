'use client';
import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import GamePage from '@/components/GamePage';

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  if (!showGame) {
    return <SplashScreen onComplete={() => setShowGame(true)} />;
  }

  return <GamePage />;
}