'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './lib/useAuth';
import DumbbellScene from 'components/DumbbellScene';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from "../components/LoginForm";

export default function LandingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <main className="bg-black text-white min-h-screen snap-y snap-mandatory overflow-scroll">
      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center h-screen px-10 relative">
  {/* Dumbbell animation */}
  <AnimatePresence>
    {!showLogin && (
      <motion.div
        className="absolute top-10"
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <DumbbellScene />
      </motion.div>
    )}
  </AnimatePresence>

  {/* Title + Taglines */}
  <motion.h1
    style={{ fontFamily: 'Base Neue Expanded' }}
    className="text-5xl font-base font-bold mb-4 mt-40"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    FORGE.
  </motion.h1>
  <motion.p
    className="text-gray-400 mb-1 font-ibm text-base font-thin italic"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    Built for those who don’t skip.
  </motion.p>

  <motion.p
    className="text-gray-400 mb-1 font-ibm text-base font-thin italic"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    Built for lifters, by a lifter.
  </motion.p>
  <motion.h2
    className="font-heading font-bold italic text-2xl mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.45 }}
  >
    Track. Train. Transform.
  </motion.h2>

  {/* Login button or form */}
  <div className="w-full max-w-sm">
    <AnimatePresence mode="wait">
      {!showLogin ? (
        <motion.button
          key="join-btn"
          onClick={() => setShowLogin(true)}
          className="bg-[#F62020] text-white font-bebas font-bold py-2 px-6 rounded-md hover:bg-[#7e3f3f] transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          JOIN THE GRIND
        </motion.button>
      ) : (
        <motion.div
          key="login-form"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <LoginForm
            onClose={() => setShowLogin(false)}
            onSuccess={() => router.push('/dashboard')}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</section>

      {/* Gamify Section */}
      <motion.section 
      initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}className="py-24 px-6 text-center min-h-screen">
        <h2 className="font-heading font-bold italic text-3xl mb-6"> <em>GAMIFY</em> YOUR GYM LIFE</h2>
        <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-300">
          <li>• Heatmap to track your streaks</li>
          <li>• XP for every log</li>
          <li>• Progress rings & live stats</li>
          <li>• Badges + ranks</li>
          <li>• Make training addictive, not a chore</li>
        </ul>
      </motion.section>

      {/* Save Splits & Meals */}
      <motion.section 
      initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="py-24 px-6 text-center min-h-screen">
        
        <h2 className="font-heading font-bold italic text-3xl mb-6"> <em>SAVE</em> YOUR SPLITS & MEALS</h2>
        <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-300">
          <li>• Create your own split, save workouts</li>
          <li>• Log food, repeat meals</li>
          <li>• Build your own templates over time</li>
        </ul>
      </motion.section>

      {/* AI Trainer */}
      <motion.section 
      initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-6 text-center min-h-screen">
        <h2 className="font-heading font-bold italic text-3xl mb-6">The <em>AI Trainer</em> (Ghostface)</h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-6">
          The AI Trainer doesn’t just track your sets — it learns from your grind.
          Whether you’re bulking, cutting, or maintaining, it adapts to your performance and goals.
        </p>
        <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-300 min-h-screen">
          <li>• Auto-adjusted Plans: Smarter plans based on history + performance</li>
          <li>• Intelligent Diet Logs: Macros, suggestions, improvement tips</li>
          <li>• Recovery Monitoring: Warns when you're overtraining</li>
          <li>• Consistency Reports: Weekly breakdowns of effort and slack</li>
        </ul>
      </motion.section>
    </main>
  );
}
