import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const JourneyScreen = () => {
  const navigation = useNavigation();

  const stages = [
    { 
      id: 1, 
      title: 'Reação', 
      description: 'Reconhecer padrões automáticos',
      color: '#ff6b6b',
      emoji: '⚡'
    },
    { 
      id: 2, 
      title: 'Pausa', 
      description: 'Criar espaço entre estímulo e resposta',
      color: '#ffd93d',
      emoji: '⏸️'
    },
    { 
      id: 3, 
      title: 'Observação', 
      description: 'Testemunhar pensamentos e emoções',
      color: '#6bcf7f',
      emoji: '👁️'
    },
    { 
      id: 4, 
      title: 'Escolha', 
      description: 'Decidir conscientemente a resposta',
      color: '#4ecdc4',
      emoji: '🤔'
    },
    { 
      id: 5, 
      title: 'Ação', 
      description: 'Agir com intenção e virtude',
      color: '#45b7d1',
      emoji: '🚀'
    },
    { 
      id: 6, 
      title: 'Integração', 
      description: 'Incorporar no caráter diário',
      color: '#a78bfa',
      emoji: '🔄'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Jornada de 6 Etapas</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Transforme reações automáticas em respostas conscientes através desta jornada de autodomínio.
        </Text>

        {stages.map((stage, index) => (
          <View key={stage.id} style={styles.stageContainer}>
            <View style={styles.connector}>
              {index > 0 && <View style={styles.line} />}
              <View style={[styles.dot, { backgroundColor: stage.color }]} />
              {index < stages.length - 1 && <View style={styles.line} />}
            </View>
            
            <View style={[styles.stageCard, { borderLeftColor: stage.color }]}>
              <View style={styles.stageHeader}>
                <Text style={styles.stageEmoji}>{stage.emoji}</Text>
                <View style={styles.stageInfo}>
                  <Text style={styles.stageTitle}>{stage.id}. {stage.title}</Text>
                  <Text style={styles.stageDescription}>{stage.description}</Text>
                </View>
              </View>
            </View>
          </View>
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
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    lineHeight: 24,
  },
  stageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  connector: {
    alignItems: 'center',
    width: 40,
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: '#ddd',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  stageCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginLeft: 10,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stageEmoji: {
    fontSize: 30,
    marginRight: 15,
  },
  stageInfo: {
    flex: 1,
  },
  stageTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d5a3d',
    marginBottom: 5,
  },
  stageDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default JourneyScreen;
