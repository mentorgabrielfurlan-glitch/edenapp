import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-forest-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-sage-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-forest-900 mb-2">
                  🌿 Bem-vindo ao ÉDEN, {user?.name}!
                </h1>
                <p className="text-sage-600">
                  Mestre de Si Mesmo - Sua jornada de autodesenvolvimento
                </p>
              </div>
              <button
                onClick={logout}
                className="bg-forest-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-forest-800 transition"
              >
                Sair
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jornada Atual */}
            <div className="bg-white rounded-2xl p-6 border border-sage-200">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-forest-900 mb-2">
                  Jornada Atual
                </h3>
                <p className="text-sage-600 mb-4">
                  Estágio 1: Autoconhecimento
                </p>
                <div className="bg-sage-100 rounded-xl p-4">
                  <div className="text-sm text-sage-700">
                    Progresso: 25%
                  </div>
                  <div className="w-full bg-sage-200 rounded-full h-2 mt-2">
                    <div className="bg-forest-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prática Diária */}
            <div className="bg-white rounded-2xl p-6 border border-sage-200">
              <div className="text-center">
                <div className="text-6xl mb-4">🧘</div>
                <h3 className="text-xl font-bold text-forest-900 mb-2">
                  Prática Diária
                </h3>
                <p className="text-sage-600 mb-4">
                  Meditação Guiada
                </p>
                <button className="w-full bg-forest-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-forest-800 transition">
                  Começar Agora
                </button>
              </div>
            </div>

            {/* Virtudes */}
            <div className="bg-white rounded-2xl p-6 border border-sage-200">
              <div className="text-center">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-forest-900 mb-2">
                  Virtudes
                </h3>
                <p className="text-sage-600 mb-4">
                  Explore as virtudes
                </p>
                <button className="w-full bg-sage-700 text-white py-3 px-6 rounded-xl font-bold hover:bg-sage-800 transition">
                  Explorar
                </button>
              </div>
            </div>
          </div>

          {/* SOS Section */}
          <div className="bg-white rounded-2xl p-6 mt-8 border border-sage-200">
            <div className="text-center">
              <div className="text-6xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-forest-900 mb-2">
                Primeiros Socorros Emocionais
              </h3>
              <p className="text-sage-600 mb-6">
                Quando precisar de ajuda imediata para lidar com emoções difíceis
              </p>
              <button className="bg-red-600 text-white py-3 px-8 rounded-xl font-bold hover:bg-red-700 transition text-lg">
                ACESSAR SOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
