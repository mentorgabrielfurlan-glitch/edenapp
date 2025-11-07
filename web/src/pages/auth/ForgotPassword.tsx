import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setError('Erro ao enviar email de recuperação');
      }
    } catch (err) {
      setError('Erro de conexão');
    }
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center' as const,
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '10px',
    },
    errorMessage: {
      color: 'red',
      fontSize: '14px',
      textAlign: 'center' as const,
    },
    successMessage: {
      background: 'green',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      textAlign: 'center' as const,
    },
  };

  return (
    <div style={styles.container}>
      <h1>Esqueci a Senha</h1>
      {error && <div style={styles.errorMessage}>{error}</div>}
      {success && (
        <div style={styles.successMessage}>
          Email de recuperação enviado com sucesso!
        </div>
      )}
      <form style={styles.form} onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
