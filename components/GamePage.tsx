'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function GamePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('pricing');
  
  const handleWishlistClick = () => {
    window.open('https://tally.so/r/1Ab89b', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://youtube.com/@gemtufun', '_blank');
  };

  const handleItchClick = () => {
    window.open('https://gemtu.itch.io/call-of-buddy', '_blank');
  };

  const handleSteamClick = () => {
    window.open('https://store.steampowered.com/app/placeholder', '_blank');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  const exampleComments = [
    { id: 1, user: "GamerPro42", comment: "This game looks amazing! Can't wait to play with my buddies! 🔥", date: "2 hours ago" },
    { id: 2, user: "IndieLover", comment: "The co-op feature sounds incredible. Love the art style!", date: "5 hours ago" },
    { id: 3, user: "SteamUser88", comment: "Added to my wishlist. When is the beta coming out?", date: "1 day ago" },
    { id: 4, user: "BuddyFan", comment: "Finally a game about friendship and teamwork! 🙌", date: "2 days ago" },
    { id: 5, user: "GameMaster", comment: "The trailer looks epic! Those graphics are insane!", date: "3 days ago" },
  ];

  return (
    <>
      {/* ANIMATED BACKGROUND - ADDED HERE */}
      <AnimatedBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white relative overflow-x-hidden"
      >
        <div className="w-full px-4 py-6">
          {/* Header with Sign In button - Top Right */}
          <div className="flex justify-end items-center mb-4">
            <div className="relative">
              {isLoggedIn ? (
                <motion.button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 rounded-lg px-3 py-2 border border-gray-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">John Doe</div>
                    <div className="text-xs text-gray-500">@johndoe</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleLogin}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-md px-5 py-2.5 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </motion.button>
              )}

              <AnimatePresence>
                {showUserMenu && isLoggedIn && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">JD</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">John Doe</div>
                          <div className="text-xs text-gray-500">@johndoe</div>
                          <div className="text-xs text-gray-600 mt-1">Joined Dec 2024</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <button className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </button>
                      <button className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Favorite Games
                      </button>
                      <button className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </button>
                    </div>
                    
                    <div className="border-t border-gray-700 py-2">
                      <button 
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-800 flex items-center gap-3"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Game Title - Centered */}
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-white">Call of Buddy</h1>
            <p className="text-gray-400 mt-2">The Ultimate Co-op Adventure</p>
          </div>

          {/* Rest of your content remains exactly the same */}
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-center w-full px-0">
              {/* Trailer/Video Section */}
              <div className="mb-12 rounded-xl overflow-hidden shadow-2xl bg-gray-900 w-full">
                {!isPlaying ? (
                  <div 
                    className="relative aspect-video cursor-pointer group bg-gradient-to-br from-gray-800 to-gray-900 w-full"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎮</div>
                        <p className="text-gray-400">Watch the Official Trailer</p>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60 transition-all">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white text-left">
                      <p className="text-sm font-semibold">Watch Trailer</p>
                      <p className="text-xs text-gray-300">1:45</p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Call of Buddy Game Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* Publisher Info */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm">PUBLISHED BY</p>
                <p className="text-white font-semibold text-lg">Indieverse</p>
              </div>

              {/* Social & Platform Links */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <motion.button
                  onClick={handleYouTubeClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Image
                    src="/youtube-color-icon.svg"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  YouTube
                </motion.button>
                
                <motion.button
                  onClick={handleItchClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#FA5C5C] hover:bg-[#E04E4E] text-white font-semibold rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Image
                    src="/itch.io-logo.svg"
                    alt="itch.io"
                    width={20}
                    height={20}
                    className="object-contain brightness-0 invert"
                  />
                  itch.io
                </motion.button>
                
                <motion.button
                  onClick={handleSteamClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#1B2838] hover:bg-[#2A3A5A] text-white font-semibold rounded-md transition-all duration-300 flex items-center gap-2"
                >
                  <Image
                    src="/steam-1.svg"
                    alt="Steam"
                    width={20}
                    height={20}
                    className="object-contain brightness-0 invert"
                  />
                  Steam
                </motion.button>
              </div>

              {/* TABS SECTION */}
              <div className="mt-16 mb-12">
                <div className="flex justify-center border-b border-gray-800 mb-8">
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                      activeTab === 'pricing'
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    💰 Pricing
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                      activeTab === 'features'
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    ✨ Features
                  </button>
                  <button
                    onClick={() => setActiveTab('faq')}
                    className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                      activeTab === 'faq'
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    ❓ FAQ
                  </button>
                </div>

                <div className="max-w-5xl mx-auto">
                  {activeTab === 'pricing' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {/* Free Plan */}
                      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all">
                        <div className="text-center">
                          <div className="text-4xl mb-3">🎁</div>
                          <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                          <div className="text-3xl font-bold text-white mb-4">$0</div>
                          <p className="text-gray-400 text-sm mb-6">Perfect for trying us out</p>
                          <ul className="text-left text-sm text-gray-400 space-y-2 mb-6">
                            <li>✓ Basic game page</li>
                            <li>✓ 1 game slot</li>
                            <li>✓ Trailer embedding</li>
                            <li>✓ Basic analytics</li>
                            <li>✓ Community comments</li>
                            <li>✗ Custom domain</li>
                            <li>✗ Priority support</li>
                          </ul>
                          <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md transition-all">
                            Get Started
                          </button>
                        </div>
                      </div>

                     
                      {/* Studio Plan */}
                      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all">
                        <div className="text-center">
                          <div className="text-4xl mb-3">🏢</div>
                          <h3 className="text-xl font-bold text-white mb-2">Studio</h3>
                          <div className="text-3xl font-bold text-white mb-4">Free<span className="text-lg">/mo</span></div>
                          <p className="text-gray-400 text-sm mb-6">For teams and publishers</p>
                          <ul className="text-left text-sm text-gray-400 space-y-2 mb-6">
                            <li>✓ Everything in Pro</li>
                            <li>✓ Unlimited game slots</li>
                            <li>✓ Team collaboration</li>
                            <li>✓ API access</li>
                            <li>✓ 24/7 priority support</li>
                            <li>✓ White-label solution</li>
                            <li>✓ Dedicated account manager</li>
                          </ul>
                          <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md transition-all">
                            Contact Sales
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-900 rounded-xl p-8 border border-gray-800"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6 text-center">Everything you need to promote your game</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">🎮</span>
                            <div>
                              <h4 className="text-white font-semibold">Professional Game Pages</h4>
                              <p className="text-gray-400 text-sm">Beautiful, customizable pages that convert visitors to wishlists</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">📊</span>
                            <div>
                              <h4 className="text-white font-semibold">Analytics Dashboard</h4>
                              <p className="text-gray-400 text-sm">Track views, clicks, and wishlist conversions</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">💬</span>
                            <div>
                              <h4 className="text-white font-semibold">Community Comments</h4>
                              <p className="text-gray-400 text-sm">Engage with your audience directly on your page</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">🔗</span>
                            <div>
                              <h4 className="text-white font-semibold">Platform Integrations</h4>
                              <p className="text-gray-400 text-sm">Connect Steam, itch.io, YouTube, and more</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">🎨</span>
                            <div>
                              <h4 className="text-white font-semibold">Custom Branding</h4>
                              <p className="text-gray-400 text-sm">Add your logo, colors, and custom domain</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">📱</span>
                            <div>
                              <h4 className="text-white font-semibold">Mobile Optimized</h4>
                              <p className="text-gray-400 text-sm">Perfect on all devices</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'faq' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-900 rounded-xl p-8 border border-gray-800"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h3>
                      <div className="space-y-6 max-w-3xl mx-auto">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Do I need a credit card to start?</h4>
                          <p className="text-gray-400 text-sm">No! The Free plan includes everything you need to get started. Upgrade anytime.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Can I switch plans later?</h4>
                          <p className="text-gray-400 text-sm">Yes, you can upgrade or downgrade at any time.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Can I use my own domain?</h4>
                          <p className="text-gray-400 text-sm">Yes! Pro and Studio plans include custom domain support.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Is there a contract?</h4>
                          <p className="text-gray-400 text-sm">No contracts, cancel anytime. Month-to-month billing.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">How do I get started?</h4>
                          <p className="text-gray-400 text-sm">Sign up for free, create your game page, and start promoting in minutes!</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Release info */}
              <p className="text-sm text-gray-600 mt-8">
                Coming 2025 • PC, Mac, Linux • Also on Steam Deck
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar buttons */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
          <motion.button
            onClick={() => setShowDetails(true)}
            whileHover={{ x: 5 }}
            className="bg-white text-black py-6 px-3 rounded-r-md shadow-lg"
          >
            <span className="text-sm font-semibold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              READ ABOUT GAME
            </span>
          </motion.button>
        </div>

        <div className="fixed bottom-6 right-6 z-40">
          <motion.button
            onClick={() => setShowComments(true)}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-200 text-black font-semibold rounded-md shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-1 p-3"
            style={{ width: '75px', height: '75px' }}
          >
            <Image
              src="/comment.svg"
              alt="Comments"
              width={20}
              height={20}
              className="object-contain brightness-0"
            />
            <span className="text-[10px] font-bold tracking-wider">COMMENTS</span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showComments && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowComments(false)}
                className="fixed inset-0 bg-black/70 z-50"
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-700 z-50 shadow-2xl overflow-y-auto"
              >
                <button
                  onClick={() => setShowComments(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
                <div className="p-8 pt-16">
                  <h2 className="text-3xl font-bold mb-6 text-white">Community Comments</h2>
                  <div className="mb-8">
                    <textarea
                      placeholder="Share your thoughts about Call of Buddy..."
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                      rows={3}
                    />
                    <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors">
                      Post Comment
                    </button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-300 mb-3">Recent Comments</h3>
                    {exampleComments.map((comment) => (
                      <div key={comment.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-white">{comment.user}</span>
                          <span className="text-xs text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{comment.comment}</p>
                        <div className="flex gap-4 mt-2">
                          <button className="text-xs text-gray-500 hover:text-gray-300">👍 Like</button>
                          <button className="text-xs text-gray-500 hover:text-gray-300">💬 Reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showDetails && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowDetails(false)}
                className="fixed inset-0 bg-black/70 z-50"
              />
              
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className="fixed left-0 top-0 h-full w-full max-w-md bg-gray-900 border-r border-gray-700 z-50 shadow-2xl overflow-y-auto"
              >
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
                <div className="p-8 pt-16">
                  <h2 className="text-3xl font-bold mb-6 text-white">About Call of Buddy</h2>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Description</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Call of Buddy is an exciting co-op adventure where you and your friends team up 
                      to complete challenging missions, defeat enemies, and unlock powerful abilities. 
                      Experience the ultimate buddy system in gaming!
                    </p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">System Requirements</h3>
                    <div className="space-y-2 text-gray-400">
                      <p><span className="text-gray-300">OS:</span> Windows 10/11 (64-bit)</p>
                      <p><span className="text-gray-300">Processor:</span> Intel Core i5-8400 / AMD Ryzen 5 2600</p>
                      <p><span className="text-gray-300">Memory:</span> 8 GB RAM</p>
                      <p><span className="text-gray-300">Graphics:</span> NVIDIA GTX 1060 / AMD Radeon RX 580</p>
                      <p><span className="text-gray-300">Storage:</span> 20 GB available space</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Expected Release Date</h3>
                    <p className="text-gray-400">Q3 2025</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Features</h3>
                    <ul className="text-gray-400 space-y-2 list-disc list-inside">
                      <li>Co-op multiplayer for up to 4 players</li>
                      <li>Cross-platform play</li>
                      <li>Regular free content updates</li>
                      <li>Steam Achievements & Cloud Saves</li>
                      <li>Full controller support</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleWishlistClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 px-6 py-3 bg-white text-black font-semibold rounded-md 
                     hover:bg-gray-200 transition-all duration-300 
                     shadow-lg hover:shadow-xl z-50 flex items-center gap-2"
        >
          <span>📝</span> Join the Wishlist to use this website!
        </motion.button>
      </motion.div>
    </>
  );
}