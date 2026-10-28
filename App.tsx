import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Onboarding экраны (Фоны суретті, премиум дизайн)
function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.badge}>☕ Coffee Shop</Text>
          <Text style={styles.title}>Кофенің ең үздік дәмі</Text>
          <Text style={styles.subtitle}>Күннің әр сәтін ерекше хош иісті кофемен бастаңыз.</Text>
          
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.primaryButtonText}>Бастау</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

// 2. Login экраны (Кіру беті - сәнді қара стиль)
function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.loginContainer}
    >
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Қош келдіңіз! 👋</Text>
        <Text style={styles.loginSubtitle}>Жалғастыру үшін аккаунтқа кіріңіз</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email немесе телефон"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Құпия сөз"
            placeholderTextColor="#777"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => alert('Сәтті кірдіңіз!')}>
          <Text style={styles.primaryButtonText}>Кіру</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end', padding: 24 },
  contentContainer: { paddingBottom: 50, alignItems: 'flex-start' },
  badge: { color: '#C67C4E', fontSize: 14, fontWeight: '700', textTransform: 'uppercase', marginBottom: 12, letterSpacing: 1.5 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 12, lineHeight: 42 },
  subtitle: { fontSize: 16, color: '#D0D0D0', marginBottom: 32, lineHeight: 22 },
  
  primaryButton: { 
    backgroundColor: '#C67C4E', 
    width: '100%', 
    padding: 18, 
    borderRadius: 16, 
    alignItems: 'center', 
    shadowColor: '#C67C4E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5
  },
  primaryButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  loginContainer: { flex: 1, backgroundColor: '#0C0C0C', justifyContent: 'center', padding: 24 },
  loginCard: { width: '100%' },
  loginTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  loginSubtitle: { fontSize: 16, color: '#888', marginBottom: 32 },
  inputContainer: { width: '100%', marginBottom: 10 },
  input: { 
    backgroundColor: '#1A1A1A', 
    color: '#fff', 
    padding: 18, 
    borderRadius: 14, 
    fontSize: 16, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: '#2A2A2A' 
  }
});