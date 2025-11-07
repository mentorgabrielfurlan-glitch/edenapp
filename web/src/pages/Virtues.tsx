import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function Virtues() {
  const navigate = useNavigate();

  const virtues = [
    {
      id: 'humildade',
      name: 'Humildade',
      icon: '🌳',
      description: 'Dominar o orgulho e aceitar a vida como ela é',
      color: 'from-emerald-500 to-teal-500',
      progress: 0,
      level: 1,
      unlocked: true
    },
    {
      id: 'gratidao',
      name: 'Gratidão',
      icon: '🙏',
      description: 'Reconhecer e agradecer pelas bênçãos da vida',
      color: 'from-amber-500 to-yellow-500',
      progress: 0,
      level: 1,
      unlocked: false
    },
    {
      id: 'paciencia',
      name: 'Paciência',
      icon: '⏳',
      description: 'Aceitar o tempo das coisas sem ansiedade',
      color: 'from-blue-500 to-indigo-500',
      progress: 0,
      level: 1,
      unlocked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950 transition-colors">
      <header className="bg-white dark:bg-gray-800 border-b border-emerald-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-4xl">🌿</span>
            <div>
              <h1 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">Virtudes</h1>
              <p className="text-sm text-emerald-600 dark:text-emerald-400">Jornada de Desenvolvimento</p>
            </div>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
            Desenvolva suas Virtudes
          </h2>
          <p className="text-emerald-600 dark:text-emerald-400">
            Cada virtude é uma jornada de 4 etapas: Saber → Fazer → Ser → Ter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {virtues.map((virtue) => (
            <button
              key={virtue.id}
              onClick={() => virtue.unlocked && navigate('/virtues/' + virtue.id)}
              disabled={!virtue.unlocked}
              className={'relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 transition-all ' + 
                (virtue.unlocked 
                  ? 'border-emerald-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-600 hover:shadow-xl cursor-pointer' 
                  : 'border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed')}
            >
              {!virtue.unlocked && (
                <div className="absolute top-4 right-4 text-2xl">🔒</div>
              )}

              <div className={'text-6xl mb-4 p-4 rounded-2xl bg-gradient-to-br ' + virtue.color + ' inline-block'}>
                {virtue.icon}
              </div>

              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                {virtue.name}
              </h3>

              <p className="text-emerald-600 dark:text-emerald-400 mb-4 text-sm">
                {virtue.description}
              </p>

              {virtue.unlocked && (
                <>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-emerald-700 dark:text-emerald-300">Nível {virtue.level}</span>
                      <span className="text-emerald-700 dark:text-emerald-300">{virtue.progress}%</span>
                    </div>
                    <div className="w-full bg-emerald-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={'bg-gradient-to-r ' + virtue.color + ' h-full rounded-full transition-all'}
                        style={{ width: virtue.progress + '%' }}
                      />
                    </div>
                  </div>

                  <div className="text-emerald-700 dark:text-emerald-300 font-medium text-sm">
                    Iniciar Jornada →
                  </div>
                </>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-emerald-100 dark:bg-gray-700 text-emerald-900 dark:text-emerald-100 py-3 px-6 rounded-xl font-medium hover:bg-emerald-200 dark:hover:bg-gray-600 transition"
        >
          ← Voltar ao Dashboard
        </button>
      </main>
    </div>
  );
}
