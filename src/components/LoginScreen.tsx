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
      <StatusBar style="dark" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#3E2723" />
        </Pressable>

        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop' }} 
              style={styles.coffeeImage}
            />
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Қош келдіңіз! ☕</Text>
            <Text style={styles.subtitle}>Кофе әлеміне қайта оралу үшін жүйеге кіріңіз</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Телефон нөмірі"
                placeholderTextColor="#8D6E63"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Құпия сөз"
                placeholderTextColor="#8D6E63"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Құпия сөзді ұмытыңыз ба?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginButton} 
              activeOpacity={0.8}
              onPress={() => alert('Кіру әрекеті орындалуда...')}
            >
              <Text style={styles.loginButtonText}>Кіру</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Аккаунтыңыз жоқ па? </Text>
            <TouchableOpacity onPress={() => alert('Тіркелу бетіне өту...')}>
              <Text style={styles.signupText}>Тіркелу</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#FDFBF7' 
  },
  container: { 
    flex: 1, 
    paddingHorizontal: 24, 
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  backButton: { 
    width: 40, 
    height: 40, 
    borderRadius: 12, 
    backgroundColor: '#F3EFE6', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#E6DFD5' 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  imageContainer: { 
    width: '100%', 
    height: 150, 
    borderRadius: 20, 
    overflow: 'hidden', 
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6DFD5',
  },
  coffeeImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
  },
  headerContainer: { 
    marginBottom: 24,
    alignItems: 'center',
  },
  title: { 
    color: '#3E2723', 
    fontSize: 26, 
    fontWeight: '700', 
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: { 
    color: '#8D6E63', 
    fontSize: 14, 
    textAlign: 'center',
  },
  formContainer: { 
    width: '100%' 
  },
  inputContainer: { 
    backgroundColor: '#F3EFE6', 
    borderRadius: 16, 
    height: 56, 
    paddingHorizontal: 20, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: '#E6DFD5',
    justifyContent: 'center',
  },
  input: { 
    flex: 1, 
    color: '#3E2723', 
    fontSize: 16,
  },
  forgotContainer: { 
    alignItems: 'flex-end', 
    marginBottom: 24,
    marginRight: 4,
  },
  forgotText: { 
    color: '#A0522D', 
    fontSize: 14, 
    fontWeight: '600' 
  },
  loginButton: { 
    backgroundColor: '#6F4E37', 
    height: 56, 
    borderRadius: 16, 
    justifyContent: 'center', 
    alignItems: 'center', 
    shadowColor: '#6F4E37', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 8, 
    elevation: 4 
  },
  loginButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '700' 
  },
  footerContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20,
  },
  footerText: { 
    color: '#8D6E63', 
    fontSize: 14 
  },
  signupText: { 
    color: '#A0522D', 
    fontSize: 14, 
    fontWeight: '700' 
  },
});