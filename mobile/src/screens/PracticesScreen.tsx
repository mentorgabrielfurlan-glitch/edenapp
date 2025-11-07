import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import api from '../services/api';

export default function PracticesScreen() {
  const [practices, setPractices] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    fetchPractices();
    fetchPoints();
  }, []);

  const fetchPractices = async () => {
    const res = await api.get('/practices');
    setPractices(res.data);
  };

  const fetchPoints = async () => {
    const res = await api.get('/users/me');
    setPoints(res.data.points || 0);
  };

  const completePractice = async (type) => {
    await api.post('/practices/complete', { type, duration: 5 });  // Exemplo 5min
    fetchPractices();
    fetchPoints();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Práticas - Pontos: {points}</Text>
      <Button title="Completar Meditação" onPress={() => completePractice('meditation')} />
      <Button title="Completar Respiração" onPress={() => completePractice('breathing')} />
      <FlatList
        data={practices}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.type} - {item.points} pts</Text>}
      />
    </View>
  );
}
