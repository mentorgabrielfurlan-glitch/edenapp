import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../components/ThemeToggle';

export default function Journaling() {
  const navigate = useNavigate();
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Aqui você pode salvar no backend
    console.log('Salvando entrada:', entry);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const prompts = [
    'Como me sinto neste momento?',
    'Pelo que sou grato hoje?',
    'Que desafio enfrentei e como lidei com ele?',
    'O que aprendi sobre mim hoje?',
    'Que virtude quero desenvolver?',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950 transition-colors">
      <header className="bg-white dark:bg-gray-800 border-b border-amber-200 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/practices')}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-4xl">📔</span>
            <div>
              <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">Diário Reflexivo</h1>
              <p className="text-sm text-amber-600 dark:text-amber-400">Registre seus pensamentos</p>
            </div>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-amber-200 dark:border-gray-700 transition-colors">
              <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                ✍️ Sua Reflexão de Hoje
              </h2>

              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Escreva livremente sobre seus pensamentos, sentimentos e insights..."
                className="w-full h-96 border border-amber-300 dark:border-gray-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-amber-100 resize-none transition-colors"
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-amber-600 dark:text-amber-400">
                  {entry.length} caracteres
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() => setEntry('')}
                    className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-100 py-2 px-4 rounded-lg font-medium hover:bg-amber-200 dark:hover:bg-gray-600 transition"
                  >
                    Limpar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!entry.trim()}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-6 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                  >
                    {saved ? '✓ Salvo!' : '💾 Salvar'}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/practices')}
              className="mt-6 w-full bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-100 py-3 px-6 rounded-xl font-medium hover:bg-amber-200 dark:hover:bg-gray-600 transition"
            >
              ← Voltar às Práticas
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-amber-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                💡 Prompts para Reflexão
              </h3>
              <div className="space-y-3">
                {prompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setEntry(entry + (entry ? '\n\n' : '') + prompt + '\n')}
                    className="w-full text-left p-3 bg-amber-50 dark:bg-gray-700 hover:bg-amber-100 dark:hover:bg-gray-600 rounded-lg text-amber-800 dark:text-amber-200 text-sm transition"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-amber-200 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                📊 Estatísticas
              </h3>
              <div className="space-y-3 text-amber-700 dark:text-amber-300">
                <div className="flex justify-between">
                  <span>Entradas este mês:</span>
                  <strong>12</strong>
                </div>
                <div className="flex justify-between">
                  <span>Sequência atual:</span>
                  <strong>5 dias 🔥</strong>
                </div>
                <div className="flex justify-between">
                  <span>Total de palavras:</span>
                  <strong>2,847</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
