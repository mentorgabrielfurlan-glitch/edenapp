import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SOSScreen = () => {
  const navigation = useNavigation();
  const [phase, setPhase] = useState('ready'); // ready, inhale, hold, exhale
  const [countdown, setCountdown] = useState(0);
  const [cycle, setCycle] = useState(0);

  const startBreathing = () => {
    setPhase('inhale');
    setCountdown(4);
    setCycle(1);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (phase === 'inhale') {
      Vibration.vibrate(100);
      setPhase('hold');
      setCountdown(7);
    } else if (phase === 'hold') {
      setPhase('exhale');
      setCountdown(8);
    } else if (phase === 'exhale') {
      if (cycle < 4) {
        setCycle(cycle + 1);
        setPhase('inhale');
        setCountdown(4);
      } else {
        setPhase('complete');
      }
    }
    return () => clearTimeout(timer);
  }, [countdown, phase, cycle]);

  const resetBreathing = () => {
    setPhase('ready');
    setCountdown(0);
    setCycle(0);
  };

  const getInstructions = () => {
    switch (phase) {
      case 'ready':
        return 'Toque para iniciar a respiração 4-7-8';
      case 'inhale':
        return 'Inspire lentamente pelo nariz';
      case 'hold':
        return 'Segure a respiração';
      case 'exhale':
        return 'Expire lentamente pela boca';
      case 'complete':
        return 'Ciclo completo! Respire normalmente.';
      default:
        return '';
    }
  };

  const getBackgroundColor = () => {
    switch (phase) {
      case 'inhale':
        return '#e8f5e8';
      case 'hold':
        return '#fff3cd';
      case 'exhale':
        return '#d1ecf1';
      case 'complete':
        return '#d4edda';
      default:
        return '#f8f9fa';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>SOS Emocional</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Respiração 4-7-8</Text>
        <Text style={styles.description}>
          Técnica comprovada para acalmar o sistema nervoso e reduzir ansiedade em 4 minutos.
        </Text>

        <View style={styles.circle}>
          <Text style={styles.countdown}>{countdown || '4'}</Text>
          <Text style={styles.phase}>{getInstructions()}</Text>
        </View>

        {phase === 'ready' && (
          <TouchableOpacity style={styles.startButton} onPress={startBreathing}>
            <Text style={styles.startButtonText}>🚀 Iniciar Respiração</Text>
          </TouchableOpacity>
        )}

        {phase !== 'ready' && phase !== 'complete' && (
          <View style={styles.progress}>
            <Text style={styles.progressText}>Ciclo {cycle} de 4</Text>
          </View>
        )}

        {phase === 'complete' && (
          <TouchableOpacity style={styles.resetButton} onPress={resetBreathing}>
            <Text style={styles.resetButtonText}>🔄 Fazer Novamente</Text>
          </TouchableOpacity>
        )}

        <View style={styles.instructions}>
          <Text style={styles.instructionTitle}>Como funciona:</Text>
          <Text style={styles.instructionText}>• Inspire por 4 segundos</Text>
          <Text style={styles.instructionText}>• Segure por 7 segundos</Text>
          <Text style={styles.instructionText}>• Expire por 8 segundos</Text>
          <Text style={styles.instructionText}>• Repita 4 vezes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d5a3d',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    lineHeight: 24,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 40,
  },
  countdown: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2d5a3d',
  },
  phase: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: '#4a7c59',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#6c757d',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  progress: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#666',
  },
  instructions: {
    marginTop: 40,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 20,
    borderRadius: 12,
    width: '100%',
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d5a3d',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default SOSScreen;
