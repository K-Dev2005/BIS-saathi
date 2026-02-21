"use client";
import { useState, useEffect } from 'react';

export type Role = 'Validator' | 'Inspector' | 'Quality Ambassador';

interface Missions {
  verify5: boolean;
  firstComplaint: boolean;
  reachInspector: boolean;
}

export const useGamification = () => {
  const [score, setScore] = useState<number>(0);
  const [missions, setMissions] = useState<Missions>({
    verify5: false,
    firstComplaint: false,
    reachInspector: false,
  });
  const [verificationsCount, setVerificationsCount] = useState<number>(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('bis_score');
    const savedMissions = localStorage.getItem('bis_missions');
    const savedVCount = localStorage.getItem('bis_vcount');
    
    if (savedScore) setScore(parseInt(savedScore));
    if (savedMissions) setMissions(JSON.parse(savedMissions));
    if (savedVCount) setVerificationsCount(parseInt(savedVCount));
  }, []);

  useEffect(() => {
    localStorage.setItem('bis_score', score.toString());
    localStorage.setItem('bis_missions', JSON.stringify(missions));
    localStorage.setItem('bis_vcount', verificationsCount.toString());
  }, [score, missions, verificationsCount]);

  const addScore = (amount: number) => {
    setScore(prev => prev + amount);
  };

  const incrementVerifications = () => {
    const nextCount = verificationsCount + 1;
    setVerificationsCount(nextCount);
    addScore(10);
    
    if (nextCount >= 5) {
      setMissions(prev => ({ ...prev, verify5: true }));
    }
  };

  const completeComplaint = () => {
    addScore(20);
    setMissions(prev => ({ ...prev, firstComplaint: true }));
  };

  const getRole = (): Role => {
    if (score >= 300) return 'Quality Ambassador';
    if (score >= 100) return 'Inspector';
    return 'Validator';
  };

  useEffect(() => {
    if (score >= 100 && !missions.reachInspector) {
      setMissions(prev => ({ ...prev, reachInspector: true }));
    }
  }, [score, missions.reachInspector]);

  return {
    score,
    role: getRole(),
    missions,
    verificationsCount,
    incrementVerifications,
    completeComplaint,
    addScore
  };
};
