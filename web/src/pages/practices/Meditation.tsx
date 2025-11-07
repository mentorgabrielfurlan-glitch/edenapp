import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../components/ThemeToggle';

export default function Meditation() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(10);
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  };

  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 transition-colors">
      <header className="bg-white dark:bg-gray-800 border-b border-purple-200 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/practices')}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-4xl">🧘</span>
            <div>
              <h1 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Meditação Guiada</h1>
              <p className="text-sm text-purple-600 dark:text-purple-400">Mindfulness e Atenção Plena</p>
            </div>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-purple-200 dark:border-gray-700 transition-colors">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-pulse">🧘</div>
            <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">
              {isPlaying ? 'Meditando...' : 'Pronto para meditar?'}
            </h2>
            <p className="text-purple-600 dark:text-purple-400">
              {isPlaying ? 'Respire profundamente e relaxe' : 'Escolha a duração e comece'}
            </p>
          </div>

          {!isPlaying && (
            <div className="mb-8">
              <label className="block text-purple-900 dark:text-purple-100 font-medium mb-4 text-center">
                Duração: {duration} minutos
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-purple-600 dark:text-purple-400 mt-2">
                <span>5 min</span>
                <span>15 min</span>
                <span>30 min</span>
              </div>
            </div>
          )}

          {isPlaying && (
            <div className="mb-8">
              <div className="text-6xl font-bold text-center text-purple-900 dark:text-purple-100 mb-4">
                {formatTime(timeLeft)}
              </div>
              <div className="w-full bg-purple-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-1000"
                  style={{ width: progress + '%' }}
                />
              </div>
            </div>
          )}

          <div className="space-y-4">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition"
              >
                ▶️ Começar Meditação
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setTimeLeft(duration * 60);
                }}
                className="w-full bg-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-red-600 transition"
              >
                ⏹️ Parar
              </button>
            )}

            <button
              onClick={() => navigate('/practices')}
              className="w-full bg-purple-100 dark:bg-gray-700 text-purple-900 dark:text-purple-100 py-3 px-6 rounded-xl font-medium hover:bg-purple-200 dark:hover:bg-gray-600 transition"
            >
              ← Voltar
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-purple-200 dark:border-gray-700 transition-colors">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">💡 Dicas para Meditar</h3>
          <ul className="space-y-3 text-purple-700 dark:text-purple-300">
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Encontre um lugar tranquilo e confortável</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Mantenha a coluna ereta, mas relaxada</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Foque na sua respiração natural</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Quando a mente divagar, gentilmente retorne ao foco</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
