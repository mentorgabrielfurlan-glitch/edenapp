import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Virtue {
  id: string;
  name: string;
  description: string;
  slug: string;
}

const VirtudesList: React.FC = () => {
  const [virtues, setVirtues] = useState<Virtue[]>([]);

  useEffect(() => {
    const fetchVirtues = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/virtues`);
        if (res.ok) {
          const data = await res.json();
          setVirtues(data);
        }
      } catch (error) {
        console.error('Erro ao buscar virtudes:', error);
      }
    };

    fetchVirtues();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Virtudes</h1>
      <ul>
        {virtues.map((virtue) => (
          <li key={virtue.id}>
            <Link to={`/virtudes/${virtue.slug}`}>{virtue.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VirtudesList;
