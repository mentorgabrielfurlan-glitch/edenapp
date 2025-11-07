import React, { useState } from 'react';

interface BreathingPracticeProps {
  onComplete: (duration: number, notes: string) => void;
}

const BreathingPractice: React.FC<BreathingPracticeProps> = ({ onComplete }) => {
  const [duration, setDuration] = useState(5);
  const [notes, setNotes] = useState('');

  const handleComplete = () => {
    onComplete(duration, notes);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>🌬️ Respiração</h3>
      <label>
        Duração (minutos):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          min="1"
          max="60"
        />
      </label>
      <br />
      <label>
        Sensações:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Como você se sentiu?"
        />
      </label>
      <br />
      <button onClick={handleComplete}>Completar Respiração</button>
    </div>
  );
};

export default BreathingPractice;
