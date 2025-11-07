import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-forest-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-forest-900 mb-2">ÉDEN</h1>
          <p className="text-sage-600">Mestre de Si Mesmo</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-sage-200">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Criar Conta</h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sage-700 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-sage-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label className="block text-sage-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-sage-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sage-700 font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-sage-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500"
                placeholder="••••••••"
                required
                minLength={6}
              />
              <p className="text-xs text-sage-500 mt-1">Mínimo 6 caracteres</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition disabled:opacity-50"
            >
              {loading ? 'Criando conta...' : 'Criar Conta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sage-600">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-forest-700 font-medium hover:text-forest-900">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
