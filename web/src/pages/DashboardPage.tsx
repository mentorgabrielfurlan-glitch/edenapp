import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface Badge {
  id: string;
  name: string;
  description: string;
}

interface Progress {
  level: number;
  xp: number;
  badges: Badge[];
}

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress>({ level: 1, xp: 0, badges: [] });

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/users/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const userData = await res.json();
          // Mock progress data - replace with real API call
          setProgress({
            level: userData.level || 1,
            xp: userData.xp || 0,
            badges: userData.badges || [],
          });
        }
      } catch (error) {
        console.error('Erro ao buscar progresso:', error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Dashboard - {user?.name}</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Nível: {progress.level}</h2>
        <p>XP: {progress.xp}</p>
        <h3>Conquistas:</h3>
        <ul>
          {progress.badges.map((b: Badge) => (
            <li key={b.id}>{b.name}: {b.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
