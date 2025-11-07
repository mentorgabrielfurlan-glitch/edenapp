import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('Token de redefinição inválido ou expirado');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/auth/reset-password', {
        token,
        password
      });

      setMessage(response.data.message || 'Senha redefinida com sucesso!');
      setSuccess(true);

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao redefinir senha');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-forest-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold text-forest-900 mb-2">Senha Redefinida!</h1>
            <p className="text-sage-600">Sua senha foi alterada com sucesso</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-sage-200">
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6">
                {message}
              </div>

              <p className="text-sage-600 mb-6">
                Você será redirecionado para o login em alguns segundos...
              </p>

              <button
                onClick={() => navigate('/login')}
                className="w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition"
              >
                Ir para Login Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-forest-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔑</div>
          <h1 className="text-4xl font-bold text-forest-900 mb-2">Redefinir Senha</h1>
          <p className="text-sage-600">Digite sua nova senha</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-sage-200">
          {!token ? (
            <div className="text-center">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
                {error}
              </div>
              <button
                onClick={() => navigate('/forgot-password')}
                className="w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition"
              >
                Solicitar Nova Recuperação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              {message && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                  {message}
                </div>
              )}

              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Nova Senha
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
              </div>

              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-sage-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition disabled:opacity-50"
              >
                {loading ? 'Redefinindo...' : 'Redefinir Senha'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-forest-700 font-medium hover:text-forest-900"
            >
              ← Voltar ao Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
