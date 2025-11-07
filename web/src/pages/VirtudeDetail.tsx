import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Virtue {
  id: string;
  name: string;
  description: string;
  slug: string;
}

const VirtudeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [virtue, setVirtue] = useState<Virtue | null>(null);

  useEffect(() => {
    const fetchVirtue = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/virtues/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setVirtue(data);
        }
      } catch (error) {
        console.error('Erro ao buscar virtude:', error);
      }
    };

    if (slug) {
      fetchVirtue();
    }
  }, [slug]);

  if (!virtue) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{virtue.name}</h1>
      <p>{virtue.description}</p>
    </div>
  );
};

export default VirtudeDetail;
