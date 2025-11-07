import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PracticesScreen = () => {
  const navigation = useNavigation();
  const [completedPractices, setCompletedPractices] = useState([]);

  const practices = [
    { id: 'meditation', title: '🧘 Meditação Guiada', duration: '10 min', description: 'Respiração consciente para paz interior' },
    { id: 'gratitude', title: '🙏 Gratidão', duration: '5 min', description: 'Prática de reconhecimento diário' },
    { id: 'mindfulness', title: '🌸 Mindfulness', duration: '15 min', description: 'Atenção plena no momento presente' },
    { id: 'breathing', title: '🫁 Respiração 4-7-8', duration: '4 min', description: 'Técnica para relaxamento profundo' },
  ];

  const togglePractice = (id) => {
    setCompletedPractices(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Práticas Diárias</Text>
      </View>

      <View style={styles.content}>
        {practices.map((practice) => (
          <TouchableOpacity 
            key={practice.id}
            style={[
              styles.practiceCard,
              completedPractices.includes(practice.id) && styles.completedCard
            ]}
            onPress={() => togglePractice(practice.id)}
          >
            <View style={styles.practiceHeader}>
              <Text style={styles.practiceTitle}>{practice.title}</Text>
              <Text style={styles.duration}>{practice.duration}</Text>
            </View>
            <Text style={styles.description}>{practice.description}</Text>
            {completedPractices.includes(practice.id) && (
              <Text style={styles.completed}>✅ Concluída hoje</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#2d5a3d',
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    color: '#fff',
    fontSize: 16,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  practiceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4a7c59',
  },
  practiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  practiceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d5a3d',
    flex: 1,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  completed: {
    fontSize: 12,
    color: '#4a7c59',
    fontWeight: '600',
    marginTop: 10,
  },
});

export default PracticesScreen;
