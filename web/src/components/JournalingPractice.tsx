import React, { useState } from 'react';

interface JournalingPracticeProps {
  onComplete: (duration: number, notes: string) => void;
}

const JournalingPractice: React.FC<JournalingPracticeProps> = ({ onComplete }) => {
  const [duration, setDuration] = useState(10);
  const [notes, setNotes] = useState('');

  const handleComplete = () => {
    onComplete(duration, notes);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>📝 Journaling</h3>
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
        Reflexões:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="O que você refletiu hoje?"
        />
      </label>
      <br />
      <button onClick={handleComplete}>Completar Journaling</button>
    </div>
  );
};

export default JournalingPractice;
