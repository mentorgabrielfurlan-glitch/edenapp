import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌿 ÉDEN</Text>
        <Text style={styles.subtitle}>Mestre de Si Mesmo</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Bem-vindo à sua jornada de autodomínio</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Practices')}
        >
          <Text style={styles.buttonText}>🧘 Práticas Diárias</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Journey')}
        >
          <Text style={styles.buttonText}>🛤️ Jornada de 6 Etapas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SOS')}
        >
          <Text style={styles.buttonText}>🫁 SOS Emocional</Text>
        </TouchableOpacity>
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
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e8f5e8',
  },
  content: {
    padding: 20,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#2d5a3d',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#4a7c59',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
