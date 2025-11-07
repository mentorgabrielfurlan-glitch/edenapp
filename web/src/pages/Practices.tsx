import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function Practices() {
  const navigate = useNavigate();

  const practices = [
    {
      id: 'meditation',
      icon: '🧘',
      title: 'Meditação Guiada',
      description: 'Práticas de mindfulness e atenção plena',
      duration: '10-30 min',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'breathing',
      icon: '🌬️',
      title: 'Respiração Consciente',
      description: 'Técnicas de respiração para equilíbrio',
      duration: '5-15 min',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'journaling',
      icon: '📔',
      title: 'Diário Reflexivo',
      description: 'Registre pensamentos e insights',
      duration: '10-20 min',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-forest-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-sage-200 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-4xl">🌿</span>
            <div>
              <h1 className="text-2xl font-bold text-forest-900 dark:text-sage-100">ÉDEN</h1>
              <p className="text-sm text-sage-600 dark:text-sage-400">Práticas Diárias</p>
            </div>
          </button>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-forest-900 dark:text-sage-100 mb-2">
            Práticas Interativas
          </h2>
          <p className="text-sage-600 dark:text-sage-400">
            Escolha uma prática para começar sua jornada de hoje
          </p>
        </div>

        <div className="space-y-6">
          {practices.map((practice) => (
            <button
              key={practice.id}
              onClick={() => navigate('/practices/' + practice.id)}
              className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 border border-sage-200 dark:border-gray-700 hover:border-forest-500 dark:hover:border-forest-600 transition-all hover:shadow-xl text-left group"
            >
              <div className="flex items-start gap-6">
                <div className={'text-6xl group-hover:scale-110 transition-transform bg-gradient-to-br ' + practice.color + ' p-4 rounded-2xl'}>
                  {practice.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-forest-900 dark:text-sage-100">
                      {practice.title}
                    </h3>
                    <span className="text-sm bg-sage-100 dark:bg-sage-800 text-sage-700 dark:text-sage-300 px-3 py-1 rounded-full">
                      {practice.duration}
                    </span>
                  </div>
                  <p className="text-sage-600 dark:text-sage-400 mb-4">
                    {practice.description}
                  </p>
                  <div className="flex items-center gap-2 text-forest-700 dark:text-forest-400 font-medium">
                    <span>Começar prática</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="mt-8 w-full bg-sage-100 dark:bg-gray-700 text-forest-900 dark:text-sage-100 py-3 px-6 rounded-xl font-medium hover:bg-sage-200 dark:hover:bg-gray-600 transition"
        >
          ← Voltar ao Dashboard
        </button>
      </main>
    </div>
  );
}
