import React, { useState } from 'react';

interface MeditationPracticeProps {
  onComplete: (duration: number, notes: string) => void;
}

const MeditationPractice: React.FC<MeditationPracticeProps> = ({ onComplete }) => {
  const [duration, setDuration] = useState(5);
  const [notes, setNotes] = useState('');

  const handleComplete = () => {
    onComplete(duration, notes);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>🧘 Meditação</h3>
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
        Notas:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Como foi a meditação?"
        />
      </label>
      <br />
      <button onClick={handleComplete}>Completar Meditação</button>
    </div>
  );
};

export default MeditationPractice;
