import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CoffeeSplashScreen from './src/components/CoffeeSplashScreen';
import CoffeeWelcomeScreen from './src/components/CoffeeWelcomeScreen';
import CoffeeLoginScreen from './src/components/CoffeeLoginScreen';
import CoffeeVerificationScreen from './src/components/CoffeeVerificationScreen';
import CoffeeForgotPasswordScreen from './src/components/CoffeeForgotPasswordScreen';
import CoffeeRegistrationScreen from './src/components/CoffeeRegistrationScreen';

type Screen =
  | 'splash'
  | 'welcome'
  | 'login'
  | 'registration'
  | 'forgot'
  | 'verification'
  | 'home';

type Flow = 'login' | 'registration' | 'forgot';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [flow, setFlow] = useState<Flow>('login');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (screen === 'splash') {
    return <CoffeeSplashScreen />;
  }

  if (screen === 'welcome') {
    return (
      <CoffeeWelcomeScreen
        onContinue={() => setScreen('login')}
      />
    );
  }

  if (screen === 'login') {
    return (
      <CoffeeLoginScreen
        onContinue={(number) => {
          setPhone(number);
          setFlow('login');
          setScreen('verification');
        }}
        onForgotPassword={() => {
          setFlow('forgot');
          setScreen('forgot');
        }}
        onRegister={() => {
          setFlow('registration');
          setScreen('registration');
        }}
      />
    );
  }

  if (screen === 'registration') {
    return (
      <CoffeeRegistrationScreen
        onBack={() => setScreen('login')}
        onContinue={() => setScreen('verification')}
      />
    );
  }

  if (screen === 'forgot') {
    return (
      <CoffeeForgotPasswordScreen
        onBack={() => setScreen('login')}
        onContinue={(number) => {
          setPhone(number);
          setFlow('forgot');
          setScreen('verification');
        }}
      />
    );
  }

  if (screen === 'verification') {
    return (
      <CoffeeVerificationScreen
        phone={phone}
        onBack={() => {
          if (flow === 'forgot') setScreen('forgot');
          else if (flow === 'registration') setScreen('registration');
          else setScreen('login');
        }}
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
    backgroundColor: '#F8EFE5',
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