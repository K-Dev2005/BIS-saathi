"use client";
import { useGamification } from '@/hooks/useGamification';
import { Trophy, Target, Award, Users, ChevronRight, CheckCircle, Shield, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_LEADERBOARD = [
  { name: "Rahul S.", points: 1250, badge: "Quality Ambassador" },
  { name: "Priya M.", points: 980, badge: "Quality Ambassador" },
  { name: "Amit K.", points: 740, badge: "Inspector" },
  { name: "Sneha G.", points: 520, badge: "Inspector" },
  { name: "Vikram P.", points: 310, badge: "Inspector" },
];

export const GamificationDashboard = () => {
  const { score, role, missions, verificationsCount } = useGamification();

  const getRankProgress = () => {
    if (score >= 300) return 100;
    if (score >= 100) return ((score - 100) / 200) * 100;
    return (score / 100) * 100;
  };

  const getNextRank = () => {
    if (score >= 300) return "Master Architect";
    if (score >= 100) return "Quality Ambassador";
    return "Inspector";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-navy rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Trophy className="w-32 h-32" />
            </div>
            
            <div className="relative z-10">
              <div className="bg-saffron w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-saffron/20">
                < Award className="w-10 h-10 text-navy" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-saffron/80 mb-1">Current Status</h2>
              <p className="text-4xl font-extrabold mb-6 tracking-tight">{role}</p>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium text-white/60">Total Points</span>
                  <span className="text-3xl font-black text-saffron">{score}</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${getRankProgress()}%` }}
                    className="bg-saffron h-full rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
                  <span>{role}</span>
                  <span>{getNextRank()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-sm">Verifications</span>
                  <span className="font-bold">{verificationsCount}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-sm">Badges Earned</span>
                  <span className="font-bold">{Object.values(missions).filter(Boolean).length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Missions and Leaderboard */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Micro Missions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Target className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Micro-Missions</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { id: 'verify5', label: "Verify 5 Products", points: 50, status: missions.verify5 },
                { id: 'firstComplaint', label: "File Your First Complaint", points: 100, status: missions.firstComplaint },
                { id: 'reachInspector', label: "Reach Inspector Rank", points: 150, status: missions.reachInspector },
              ].map((mission) => (
                <div 
                  key={mission.id}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                    mission.status ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-white shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${mission.status ? 'bg-green-500' : 'bg-slate-200'}`}>
                      <CheckCircle className={`w-4 h-4 ${mission.status ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <p className={`font-bold ${mission.status ? 'text-green-700' : 'text-slate-600'}`}>
                        {mission.label}
                      </p>
                      <p className="text-xs text-slate-400">+{mission.points} Skill Points</p>
                    </div>
                  </div>
                  {mission.status && <span className="bg-green-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">Done</span>}
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold flex items-center justify-center space-x-2 hover:border-navy hover:text-navy transition">
              <Rocket className="w-5 h-5" />
              <span>More Missions Coming Soon</span>
            </button>
          </motion.div>

          {/* Leaderboard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Users className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Top Validators</h3>
            </div>

            <div className="space-y-6">
              {MOCK_LEADERBOARD.map((user, idx) => (
                <div key={user.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className={`w-6 text-center font-black ${idx === 0 ? 'text-saffron text-lg' : 'text-slate-300'}`}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="font-bold text-navy">{user.name}</p>
                      <p className="text-xs text-slate-400">{user.badge}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-navy">{user.points}</p>
                    <p className="text-[10px] text-slate-300 uppercase font-bold tracking-widest">Points</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-navy/5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold">
                  YU
                </div>
                <div>
                  <p className="text-xs font-bold text-navy uppercase">Your Progress</p>
                  <p className="text-lg font-black text-navy">You are #42</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-navy/20" />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
