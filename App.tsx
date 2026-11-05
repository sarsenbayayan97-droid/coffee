import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CoffeeLoginScreen from './src/components/CoffeeLoginScreen';
import CoffeeVerificationScreen from './src/components/CoffeeVerificationScreen';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [phone, setPhone] = useState('');

  if (screen === 'login') {
    return (
      <CoffeeLoginScreen
        onContinue={(number) => {
          setPhone(number);
          setScreen('verification');
        }}
      />
    );
  }

  if (screen === 'verification') {
    return (
      <CoffeeVerificationScreen
        phone={phone}
        onBack={() => setScreen('login')}
        onContinue={() => setScreen('home')}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Coffee Shop</Text>
      <Text style={styles.subtitle}>Қош келдіңіз!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#59351F',
  },
  subtitle: {
    fontSize: 18,
    color: '#8B7566',
    marginTop: 15,
  },
});