import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Navigation() {
  const { user, logout } = useAuthStore();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-forest-900">ÉDEN</span>
            </Link>

            <div className="flex gap-4">
              <Link
                to="/dashboard"
                className={'px-4 py-2 rounded-lg font-medium transition ' + 
                  (isActive('/dashboard') 
                    ? 'bg-forest-100 text-forest-900' 
                    : 'text-sage-600 hover:text-forest-900 hover:bg-sage-50')}
              >
                🏠 Início
              </Link>

              <Link
                to="/practices"
                className={'px-4 py-2 rounded-lg font-medium transition ' + 
                  (isActive('/practices') 
                    ? 'bg-forest-100 text-forest-900' 
                    : 'text-sage-600 hover:text-forest-900 hover:bg-sage-50')}
              >
                🧘 Práticas
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-forest-900">{user?.name}</p>
              <p className="text-xs text-sage-600">{user?.email}</p>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm text-sage-600 hover:text-forest-900 transition"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
