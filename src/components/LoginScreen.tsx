import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

interface LoginScreenProps {
  navigation: any;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Артқа қайту батырмасы */}
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </Pressable>

          {/* Кофе суреті / Банер */}
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop' }} 
              style={styles.coffeeImage}
            />
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Қош келдіңіз! ☕</Text>
            <Text style={styles.subtitle}>Кофе әлеміне қайта оралу үшін жүйеге кіріңіз.</Text>
          </View>

          <View style={styles.formContainer}>
            {/* Телефон нөмірі */}
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#C67C4E" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Телефон нөмірі"
                placeholderTextColor="#7B7B7B"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            {/* Құпия сөз (глазок алынып тасталды) */}
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#C67C4E" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Құпия сөз"
                placeholderTextColor="#7B7B7B"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Құпия сөзді ұмытыңыз ба?</Text>
            </TouchableOpacity>

            {/* Кіру батырмасы */}
            <TouchableOpacity 
              style={styles.loginButton} 
              activeOpacity={0.8}
              onPress={() => alert('Кіру әрекеті орындалуда...')}
            >
              <Text style={styles.loginButtonText}>Кіру</Text>
            </TouchableOpacity>
          </View>

          {/* Тіркелу бөлімі */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Аккаунтыңыз жоқ па? </Text>
            <TouchableOpacity onPress={() => alert('Тіркелу бетіне өту...')}>
              <Text style={styles.signupText}>Тіркелу</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#121212' },
  container: { flex: 1 },
  scrollContainer: { paddingHorizontal: 24, paddingVertical: 20 },
  backButton: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#1F1F1F', justifyContent: 'center', alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#2A2A2A' },
  
  imageContainer: { width: '100%', height: 160, borderRadius: 20, overflow: 'hidden', marginBottom: 20, borderWidth: 1, borderColor: '#2A2A2A' },
  coffeeImage: { width: '100%', height: '100%', resizeMode: 'cover' },

  headerContainer: { marginBottom: 24 },
  title: { color: '#FFFFFF', fontSize: 28, fontWeight: '700', marginBottom: 6 },
  subtitle: { color: '#9B9B9B', fontSize: 14, lineHeight: 20 },
  
  formContainer: { width: '100%' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1A1A1A', borderRadius: 16, height: 58, paddingHorizontal: 16, marginBottom: 16, borderWidth: 1, borderColor: '#2D2D2D' },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, color: '#FFFFFF', fontSize: 16 },
  
  forgotContainer: { alignItems: 'flex-end', marginBottom: 24 },
  forgotText: { color: '#C67C4E', fontSize: 14, fontWeight: '600' },
  
  loginButton: { backgroundColor: '#C67C4E', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', shadowColor: '#C67C4E', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  loginButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  
  footerContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 20 },
  footerText: { color: '#9B9B9B', fontSize: 14 },
  signupText: { color: '#C67C4E', fontSize: 14, fontWeight: '700' },
});