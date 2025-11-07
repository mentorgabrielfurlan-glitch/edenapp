import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import MeditationPractice from '../components/MeditationPractice';
import JournalingPractice from '../components/JournalingPractice';
import BreathingPractice from '../components/BreathingPractice';

interface Practice {
  id: string;
  type: string;
  duration: number;
  points: number;
}

const PracticesPage: React.FC = () => {
  const { user } = useAuth();
  const [practices, setPractices] = useState<Practice[]>([]);

  useEffect(() => {
    const fetchPractices = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/practices`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setPractices(data);
        }
      } catch (error) {
        console.error('Erro ao buscar práticas:', error);
      }
    };

    fetchPractices();
  }, []);

  const completePractice = async (type: string, duration: number, notes: string) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/practices/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ type, duration, notes }),
      });
      // Refresh practices
      window.location.reload();
    } catch (error) {
      console.error('Erro ao completar prática:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Práticas Diárias</h1>

      <div style={{ marginTop: '20px' }}>
        <MeditationPractice onComplete={(d: number, n: string) => completePractice('meditation', d, n)} />
        <JournalingPractice onComplete={(d: number, n: string) => completePractice('journaling', d, n)} />
        <BreathingPractice onComplete={(d: number, n: string) => completePractice('breathing', d, n)} />
      </div>

      <h2>Histórico de Práticas</h2>
      <ul>
        {practices.map((p: Practice) => (
          <li key={p.id}>{p.type} - {p.duration}min - {p.points} pontos</li>
        ))}
      </ul>
    </div>
  );
};

export default PracticesPage;
