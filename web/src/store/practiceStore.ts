import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

type Practice = {
  id: string;
  type: 'meditation' | 'breathing' | 'journaling';
  name: string;
  description: string;
  duration: number; // em minutos
  icon: string;
  xpReward: number;
  instructions?: string[];
};

type PracticeSession = {
  id: string;
  practiceId: string;
  startedAt: Date;
  completedAt?: Date;
  duration: number;
  notes?: string;
};

type State = {
  practices: Practice[];
  sessions: PracticeSession[];
  currentSession: PracticeSession | null;
  loading: boolean;

  fetchPractices: () => Promise<void>;
  startPractice: (practiceId: string) => void;
  completePractice: (notes?: string) => Promise<void>;
  cancelPractice: () => void;
};

export const usePracticeStore = create<State>((set, get) => ({
  practices: [
    {
      id: '1',
      type: 'meditation',
      name: 'Meditação Guiada',
      description: 'Acalme a mente e encontre paz interior',
      duration: 10,
      icon: '🧘',
      xpReward: 50,
      instructions: [
        'Encontre um lugar tranquilo',
        'Sente-se confortavelmente',
        'Feche os olhos suavemente',
        'Respire naturalmente',
        'Observe seus pensamentos sem julgamento'
      ]
    },
    {
      id: '2',
      type: 'breathing',
      name: 'Respiração 4-7-8',
      description: 'Técnica para reduzir ansiedade e estresse',
      duration: 5,
      icon: '🌬️',
      xpReward: 30,
      instructions: [
        'Inspire pelo nariz contando até 4',
        'Segure a respiração contando até 7',
        'Expire pela boca contando até 8',
        'Repita o ciclo 4 vezes'
      ]
    },
    {
      id: '3',
      type: 'breathing',
      name: 'Respiração Quadrada',
      description: 'Equilíbrio e foco mental',
      duration: 5,
      icon: '⬜',
      xpReward: 30,
      instructions: [
        'Inspire contando até 4',
        'Segure contando até 4',
        'Expire contando até 4',
        'Segure contando até 4',
        'Repita'
      ]
    },
    {
      id: '4',
      type: 'journaling',
      name: 'Diário de Gratidão',
      description: 'Registre 3 coisas pelas quais é grato hoje',
      duration: 10,
      icon: '📝',
      xpReward: 40,
      instructions: [
        'Liste 3 coisas pelas quais você é grato',
        'Seja específico e detalhado',
        'Sinta a gratidão enquanto escreve'
      ]
    },
    {
      id: '5',
      type: 'journaling',
      name: 'Reflexão Emocional',
      description: 'Explore e compreenda suas emoções',
      duration: 15,
      icon: '💭',
      xpReward: 50,
      instructions: [
        'Como você está se sentindo agora?',
        'O que causou essa emoção?',
        'O que você pode aprender com isso?',
        'Como você quer se sentir?'
      ]
    },
    {
      id: '6',
      type: 'meditation',
      name: 'Body Scan',
      description: 'Consciência corporal e relaxamento profundo',
      duration: 15,
      icon: '🧘‍♀️',
      xpReward: 60,
      instructions: [
        'Deite-se confortavelmente',
        'Escaneie seu corpo dos pés à cabeça',
        'Observe sensações sem julgamento',
        'Relaxe cada parte do corpo'
      ]
    }
  ],
  sessions: [],
  currentSession: null,
  loading: false,

  fetchPractices: async () => {
    // Práticas já estão hardcoded por enquanto
  },

  startPractice: (practiceId: string) => {
    const practice = get().practices.find(p => p.id === practiceId);
    if (!practice) return;

    const session: PracticeSession = {
      id: Date.now().toString(),
      practiceId,
      startedAt: new Date(),
      duration: practice.duration
    };

    set({ currentSession: session });
  },

  completePractice: async (notes?: string) => {
    const { currentSession } = get();
    if (!currentSession) return;

    const completedSession = {
      ...currentSession,
      completedAt: new Date(),
      notes
    };

    try {
      const token = localStorage.getItem('eden_token');
      await axios.post(
        API_URL + '/practices/complete',
        {
          practiceId: completedSession.practiceId,
          duration: completedSession.duration,
          notes: completedSession.notes
        },
        { headers: { Authorization: 'Bearer ' + token } }
      );

      set(state => ({
        sessions: [...state.sessions, completedSession],
        currentSession: null
      }));
    } catch (error) {
      console.error('Erro ao completar prática:', error);
    }
  },

  cancelPractice: () => {
    set({ currentSession: null });
  }
}));
