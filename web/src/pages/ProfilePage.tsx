import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function ProfilePage() {
  const { user, logout } = useAuthStore()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'var(--surface)',
        padding: '1rem 2rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🌿</span>
          <h1 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>ÉDEN</h1>
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/dashboard" style={{ color: 'var(--text)', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/journey" style={{ color: 'var(--text)', textDecoration: 'none' }}>Jornada</Link>
          <Link to="/practices" style={{ color: 'var(--text)', textDecoration: 'none' }}>Práticas</Link>
          <Link to="/sos" style={{ color: 'var(--text)', textDecoration: 'none' }}>SOS</Link>
          <Link to="/profile" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Perfil</Link>
          <button onClick={logout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
            Sair
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="fade-in">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            👤 Meu Perfil
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            {/* Profile Card */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 1rem'
              }}>
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {user?.name}
              </h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                {user?.email}
              </p>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Editar Perfil
              </button>
            </div>

            {/* Stats */}
            <div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                  📊 Estatísticas
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      Total de XP
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>
                      0 XP
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      Nível
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                      1
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      Dias Consecutivos
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--error)' }}>
                      0
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      Práticas Completas
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--success)' }}>
                      0
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                  🏆 Conquistas
                </h3>
                <p style={{ color: 'var(--text-light)', textAlign: 'center', padding: '2rem' }}>
                  Complete práticas para desbloquear conquistas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
