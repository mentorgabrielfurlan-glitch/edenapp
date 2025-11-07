import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const techniques = [
  {
    id: 1,
    name: 'Respiração 4-7-8',
    icon: '🌬️',
    description: 'Inspire por 4s, segure por 7s, expire por 8s',
    action: 'Começar'
  },
  {
    id: 2,
    name: 'Grounding 5-4-3-2-1',
    icon: '🌍',
    description: '5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que saboreia',
    action: 'Praticar'
  },
  {
    id: 3,
    name: 'Meditação de Emergência',
    icon: '🧘',
    description: '3 minutos de atenção plena para acalmar',
    action: 'Meditar'
  },
  {
    id: 4,
    name: 'Journaling Rápido',
    icon: '✍️',
    description: 'Escreva o que está sentindo agora',
    action: 'Escrever'
  },
]

export default function SOSPage() {
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
          <Link to="/journey" style={{ color: 'var(--text)', textDecoration: 'none' }}>Jornada</Link>
          <Link to="/practices" style={{ color: 'var(--text)', textDecoration: 'none' }}>Práticas</Link>
          <Link to="/sos" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>SOS</Link>
          <Link to="/profile" style={{ color: 'var(--text)', textDecoration: 'none' }}>Perfil</Link>
          <button onClick={logout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
            Sair
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="fade-in">
          {/* Alert Box */}
          <div style={{
            backgroundColor: '#FFF3E0',
            border: '2px solid #FF9800',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>🆘</span>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>
                Primeiros Socorros Emocionais
              </h2>
            </div>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>
              Está passando por um momento difícil? Estas técnicas podem ajudar você a se acalmar e recuperar o equilíbrio emocional rapidamente.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Técnicas de Alívio Imediato
          </h3>

          {/* Techniques Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {techniques.map((technique) => (
              <div
                key={technique.id}
                className="card"
                style={{
                  borderLeft: '4px solid var(--error)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {technique.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  {technique.name}
                </h4>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                  {technique.description}
                </p>
                <button
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--error)'
                  }}
                >
                  {technique.action}
                </button>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: '#FFEBEE',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--error)'
          }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              ⚠️ Em Crise?
            </h4>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              Se você está em crise ou pensando em se machucar, procure ajuda profissional imediatamente.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="tel:188"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--error)',
                  color: 'white',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                📞 CVV: 188
              </a>
              <a
                href="tel:192"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--error)',
                  color: 'white',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                🚑 SAMU: 192
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
