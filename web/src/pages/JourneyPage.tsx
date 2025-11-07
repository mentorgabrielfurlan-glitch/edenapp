import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const stages = [
  { id: 1, name: 'Despertar', icon: '🌱', description: 'Reconhecer padrões reativos', color: '#8BC34A' },
  { id: 2, name: 'Observar', icon: '🌿', description: 'Desenvolver autoconsciência', color: '#4CAF50' },
  { id: 3, name: 'Compreender', icon: '🌳', description: 'Entender causas profundas', color: '#2D5016' },
  { id: 4, name: 'Transformar', icon: '🌸', description: 'Reprogramar crenças', color: '#E91E63' },
  { id: 5, name: 'Integrar', icon: '🌺', description: 'Viver com propósito', color: '#9C27B0' },
  { id: 6, name: 'Transcender', icon: '🌟', description: 'Mestre de si mesmo', color: '#D4AF37' },
]

export default function JourneyPage() {
  const { logout } = useAuthStore()

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
          <Link to="/journey" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Jornada</Link>
          <Link to="/practices" style={{ color: 'var(--text)', textDecoration: 'none' }}>Práticas</Link>
          <Link to="/sos" style={{ color: 'var(--text)', textDecoration: 'none' }}>SOS</Link>
          <Link to="/profile" style={{ color: 'var(--text)', textDecoration: 'none' }}>Perfil</Link>
          <button onClick={logout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
            Sair
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="fade-in">
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            🗺️ Sua Jornada de Transformação
          </h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            6 estágios para se tornar mestre de si mesmo
          </p>

          {/* Stages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="card"
                style={{
                  borderLeft: `4px solid ${stage.color}`,
                  opacity: index === 0 ? 1 : 0.6,
                  cursor: index === 0 ? 'pointer' : 'not-allowed'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    fontSize: '3rem',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${stage.color}20`,
                    borderRadius: '50%'
                  }}>
                    {stage.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', margin: 0 }}>
                        Estágio {stage.id}: {stage.name}
                      </h3>
                      {index === 0 && (
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'var(--primary)',
                          color: 'white',
                          borderRadius: '1rem',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          ATUAL
                        </span>
                      )}
                      {index > 0 && (
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#E0E0E0',
                          color: 'var(--text-light)',
                          borderRadius: '1rem',
                          fontSize: '0.85rem'
                        }}>
                          BLOQUEADO
                        </span>
                      )}
                    </div>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>
                      {stage.description}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                      Progresso
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: stage.color }}>
                      {index === 0 ? '0%' : '—'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
