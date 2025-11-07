import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../components/ThemeToggle';

type Technique = {
  id: string;
  name: string;
  description: string;
  pattern: number[];
  labels: string[];
  color: string;
  icon: string;
  benefits: string[];
};

export default function Breathing() {
  const navigate = useNavigate();
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [cycles, setCycles] = useState(0);

  const techniques: Technique[] = [
    {
      id: '444',
      name: 'Respiração 4-4-4 (Box Breathing)',
      description: 'Técnica usada por Navy SEALs para manter a calma',
      pattern: [4, 4, 4, 0],
      labels: ['Inspire', 'Segure', 'Expire', ''],
      color: 'from-blue-500 to-cyan-500',
      icon: '🟦',
      benefits: [
        'Reduz estresse e ansiedade',
        'Melhora foco e concentração',
        'Regula sistema nervoso',
        'Aumenta clareza mental'
      ]
    },
    {
      id: '478',
      name: 'Respiração 4-7-8 (Relaxamento)',
      description: 'Técnica do Dr. Andrew Weil para relaxamento profundo',
      pattern: [4, 7, 8, 0],
      labels: ['Inspire', 'Segure', 'Expire', ''],
      color: 'from-purple-500 to-pink-500',
      icon: '💜',
      benefits: [
        'Induz relaxamento profundo',
        'Ajuda a dormir melhor',
        'Reduz pressão arterial',
        'Acalma mente agitada'
      ]
    },
    {
      id: 'wim',
      name: 'Método Wim Hof (Energizante)',
      description: 'Respiração poderosa para energia e vitalidade',
      pattern: [2, 0, 2, 15],
      labels: ['Inspire Forte', '', 'Expire Rápido', 'Segure Vazio'],
      color: 'from-orange-500 to-red-500',
      icon: '🔥',
      benefits: [
        'Aumenta energia vital',
        'Fortalece sistema imunológico',
        'Melhora resistência ao frio',
        'Aumenta alcalinidade do sangue'
      ]
    },
    {
      id: 'coherence',
      name: 'Coerência Cardíaca (5-5)',
      description: 'Sincroniza coração e respiração para equilíbrio',
      pattern: [5, 0, 5, 0],
      labels: ['Inspire', '', 'Expire', ''],
      color: 'from-green-500 to-emerald-500',
      icon: '💚',
      benefits: [
        'Equilibra sistema nervoso',
        'Melhora variabilidade cardíaca',
        'Reduz cortisol',
        'Aumenta DHEA (hormônio da juventude)'
      ]
    },
    {
      id: 'alternate',
      name: 'Nadi Shodhana (Narinas Alternadas)',
      description: 'Técnica yogue para equilibrar hemisférios cerebrais',
      pattern: [4, 4, 4, 4],
      labels: ['Inspire (E)', 'Segure', 'Expire (D)', 'Inspire (D)'],
      color: 'from-indigo-500 to-purple-500',
      icon: '🧘',
      benefits: [
        'Equilibra hemisférios cerebrais',
        'Purifica canais energéticos',
        'Melhora concentração',
        'Prepara para meditação'
      ]
    },
    {
      id: 'bhastrika',
      name: 'Bhastrika (Fole)',
      description: 'Respiração de fogo para despertar energia',
      pattern: [1, 0, 1, 0],
      labels: ['Inspire Forte', '', 'Expire Forte', ''],
      color: 'from-yellow-500 to-orange-500',
      icon: '⚡',
      benefits: [
        'Desperta energia Kundalini',
        'Limpa vias respiratórias',
        'Aquece o corpo',
        'Aumenta metabolismo'
      ]
    }
  ];

  useEffect(() => {
    if (!isActive || !selectedTechnique) return;

    const currentDuration = selectedTechnique.pattern[phaseIndex];
    if (currentDuration === 0) {
      // Pula fases com duração 0
      setPhaseIndex((prev) => (prev + 1) % selectedTechnique.pattern.length);
      return;
    }

    if (count < currentDuration) {
      const timer = setTimeout(() => setCount(count + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const nextPhase = (phaseIndex + 1) % selectedTechnique.pattern.length;
      setPhaseIndex(nextPhase);
      setCount(0);

      if (nextPhase === 0) {
        setCycles(cycles + 1);
      }
    }
  }, [isActive, count, phaseIndex, selectedTechnique, cycles]);

  const startPractice = (technique: Technique) => {
    setSelectedTechnique(technique);
    setIsActive(true);
    setPhaseIndex(0);
    setCount(0);
    setCycles(0);
  };

  const stopPractice = () => {
    setIsActive(false);
    setPhaseIndex(0);
    setCount(0);
    setCycles(0);
  };

  const getScale = () => {
    if (!selectedTechnique) return 1;
    const phase = selectedTechnique.labels[phaseIndex];
    if (phase.includes('Inspire')) return 1.3;
    if (phase.includes('Segure')) return 1.3;
    return 1;
  };

  if (selectedTechnique && isActive) {
    const currentLabel = selectedTechnique.labels[phaseIndex];
    const currentDuration = selectedTechnique.pattern[phaseIndex];
    const progress = currentDuration > 0 ? (count / currentDuration) * 100 : 100;

    return (
      <div className={'min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-all duration-1000 bg-gradient-to-br ' + selectedTechnique.color}>
        <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur border-b border-white/20 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedTechnique.icon}</span>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{selectedTechnique.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ciclo {cycles + 1}</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <div className="text-center">
            <div 
              className="text-9xl mb-8 transition-all duration-1000 filter drop-shadow-2xl"
              style={{ transform: 'scale(' + getScale() + ')' }}
            >
              {selectedTechnique.icon}
            </div>

            <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {currentLabel}
            </h2>

            <div className="text-9xl font-bold text-white mb-8 drop-shadow-lg">
              {currentDuration > 0 ? currentDuration - count : '∞'}
            </div>

            <div className="max-w-md mx-auto mb-8">
              <div className="w-full bg-white/30 dark:bg-gray-700/30 rounded-full h-4 overflow-hidden backdrop-blur">
                <div
                  className="bg-white dark:bg-gray-200 h-full transition-all duration-1000 rounded-full"
                  style={{ width: progress + '%' }}
                />
              </div>
            </div>

            <button
              onClick={stopPractice}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur text-gray-900 dark:text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-gray-700 transition shadow-2xl"
            >
              ⏹️ Parar Prática
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-950 transition-colors">
      <header className="bg-white dark:bg-gray-800 border-b border-blue-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/practices')}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-4xl">🌬️</span>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Respiração Consciente</h1>
              <p className="text-sm text-blue-600 dark:text-blue-400">Escolha sua técnica</p>
            </div>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
            Técnicas de Respiração
          </h2>
          <p className="text-blue-600 dark:text-blue-400">
            Cada técnica tem um propósito específico. Escolha de acordo com sua necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {techniques.map((technique) => (
            <div
              key={technique.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-600 transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={'text-5xl p-3 rounded-xl bg-gradient-to-br ' + technique.color}>
                  {technique.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-1">
                    {technique.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {technique.description}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">
                  Benefícios:
                </h4>
                <ul className="space-y-1">
                  {technique.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => startPractice(technique)}
                className={'w-full bg-gradient-to-r ' + technique.color + ' text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition'}
              >
                ▶️ Iniciar Prática
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/practices')}
          className="w-full bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-blue-100 py-3 px-6 rounded-xl font-medium hover:bg-blue-200 dark:hover:bg-gray-600 transition"
        >
          ← Voltar às Práticas
        </button>
      </main>
    </div>
  );
}
