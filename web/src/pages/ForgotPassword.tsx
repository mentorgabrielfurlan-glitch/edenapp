import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/auth/forgot-password', {
        email
      });

      setMessage(response.data.message || 'Email de recuperação enviado com sucesso!');
      setSent(true);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao enviar email de recuperação');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-forest-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📧</div>
            <h1 className="text-4xl font-bold text-forest-900 mb-2">Email Enviado!</h1>
            <p className="text-sage-600">Verifique sua caixa de entrada</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-sage-200">
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6">
                {message}
              </div>

              <p className="text-sage-600 mb-6">
                Enviamos instruções para redefinir sua senha para <strong>{email}</strong>
              </p>

              <div className="space-y-3">
                <Link
                  to="/login"
                  className="block w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition text-center"
                >
                  Voltar ao Login
                </Link>

                <button
                  onClick={() => {
                    setSent(false);
                    setEmail('');
                    setMessage('');
                  }}
                  className="block w-full bg-white border border-sage-300 text-sage-700 py-3 px-6 rounded-xl font-medium hover:bg-sage-50 transition text-center"
                >
                  Enviar para outro email
                </button>
              </div>
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
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-4xl font-bold text-forest-900 mb-2">Esqueci a Senha</h1>
          <p className="text-sage-600">Digite seu email para receber instruções</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-sage-200">
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar Email de Recuperação'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-forest-700 font-medium hover:text-forest-900">
              ← Voltar ao Login
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-sage-200">
            <p className="text-sm text-sage-500 text-center">
              💡 Lembre-se: Use um email que você tenha acesso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
