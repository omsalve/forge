'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './lib/useAuth';
import { Heading1 } from 'lucide-react';

export default function LandingPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

   return (
    <main className="bg-black text-white min-h-screen snap-y snap-mandatory overflow-scroll">
      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center h-screen px-6">
        <h1 className="text-5xl font-bold mb-4">FORGE.</h1>
        <p className="text-gray-400 mb-1">Built for those who don’t skip.</p>
        <p className="text-gray-400 mb-1">Log workouts. Post progress. Level up with AI.</p>
        <p className="text-gray-400 mb-6">Built for lifters, by a lifter.</p>
        <h2 className="text-2xl font-semibold mb-6">Track. Train. Transform.</h2>
        
          <button className="bg-[#5e2b2b] text-white py-2 px-6 rounded-md hover:bg-[#7e3f3f] transition">
            Join The Grind
          </button>
        
      </section>

      {/* Gamify Section */}
      <section className="py-24 px-6 text-center min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Gamify your gym life</h2>
        <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-300">
          <li>• GitHub-style daily heatmap grid</li>
          <li>• Streak system (“7 days strong = 🔥 Beast Mode”)</li>
          <li>• Progress rings, stats dashboard</li>
          <li>• Every log = XP</li>
          <li>• Level bar, your current rank (e.g. “Rest Rookie” → “Iron Savage”)</li>
          <li>• Badges: “First PR”, “No Days Off”, “Meal Master”</li>
        </ul>
      </section>

      {/* Save Splits & Meals */}
      <section className="py-24 px-6 text-center min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Save your splits & Meals</h2>
        <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-300">
          <li>• Create your own split, save workouts</li>
          <li>• Log food, repeat meals</li>
          <li>• Build your own templates over time</li>
        </ul>
      </section>

      {/* AI Trainer */}
      <section className="py-24 px-6 text-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">The AI Trainer (Ghostface)</h2>
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
      </section>
    </main>
  );
}