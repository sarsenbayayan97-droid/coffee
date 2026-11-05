
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

type Props = {
  onContinue: (phone: string) => void;
  onForgotPassword: () => void;
  onRegister: () => void;
};

export default function CoffeeLoginScreen({
  onContinue,
  onForgotPassword,
  onRegister,
}: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topDecoration}>
          <View style={styles.topCircle} />
        </View>

        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>☕</Text>
          <Text style={styles.logoText}>Coffee Shop</Text>
          <Text style={styles.logoSubtitle}>
            Әр шынаяқта ерекше дәм
          </Text>

          <View style={styles.cuteDecor}>
            <Text style={styles.cuteEmoji}>🤎</Text>
            <Text style={styles.cuteEmoji}>🧸</Text>
            <Text style={styles.cuteEmoji}>🤎</Text>
          </View>
        </View>

        <View style={styles.heading}>
          <Text style={styles.title}>Қайта қош келдіңіз!</Text>
          <Text style={styles.subtitle}>
            Жалғастыру үшін аккаунтыңызға кіріңіз
          </Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputIcon}>☎️</Text>
          <TextInput
            style={styles.input}
            placeholder="Телефон нөміріңіз"
            placeholderTextColor="#A58E7D"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Құпиясөз"
            placeholderTextColor="#A58E7D"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eyeIcon}>
              {showPassword ? '◉' : '◎'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={onForgotPassword}
        >
          <Text style={styles.forgotText}>
            Құпиясөзді ұмыттыңыз ба?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.85}
          onPress={() => onContinue(phone)}
        >
          <Text style={styles.loginButtonText}>Кіру</Text>
        </TouchableOpacity>

        <View style={styles.registerRow}>
          <Text style={styles.registerHint}>
            Аккаунтыңыз жоқ па?
          </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.registerText}> Тіркелу</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomDecoration}>
          <View style={styles.bottomWave} />
          <Text style={styles.bottomText}>
            COFFEE • LOVE • HAPPINESS
          </Text>
          <Text style={styles.bottomHeart}>🤎</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFE5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 27,
    paddingBottom: 15,
  },
  topDecoration: {
    height: 65,
    position: 'relative',
    overflow: 'hidden',
  },
  topCircle: {
    position: 'absolute',
    right: -35,
    top: -75,
    width: 170,
    height: 140,
    borderBottomLeftRadius: 100,
    backgroundColor: '#B9825D',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  logoIcon: {
    fontSize: 43,
  },
  logoText: {
    fontSize: 27,
    fontWeight: '800',
    color: '#59351F',
    marginTop: 3,
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#9A7962',
    marginTop: 5,
    letterSpacing: 1,
  },
  cuteDecor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    gap: 12,
  },
  cuteEmoji: {
    fontSize: 23,
  },
  heading: {
    marginTop: 38,
    marginBottom: 28,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#42291B',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#927967',
    textAlign: 'center',
    marginTop: 10,
  },
  inputBox: {
    height: 62,
    backgroundColor: '#FFF9F3',
    borderWidth: 1.5,
    borderColor: '#E8D8C9',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    marginBottom: 16,
  },
  inputIcon: {
    fontSize: 23,
    marginRight: 13,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#42291B',
  },
  eyeIcon: {
    fontSize: 22,
    color: '#795239',
    padding: 5,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 27,
  },
  forgotText: {
    color: '#795239',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    height: 62,
    backgroundColor: '#60351F',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#60351F',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  loginButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  registerHint: {
    fontSize: 14,
    color: '#9A8372',
  },
  registerText: {
    fontSize: 14,
    color: '#60351F',
    fontWeight: '800',
  },
  bottomDecoration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
    minHeight: 105,
    overflow: 'hidden',
  },
  bottomWave: {
    position: 'absolute',
    bottom: -35,
    left: -40,
    right: -40,
    height: 110,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: '#D6B49A',
  },
  bottomText: {
    fontSize: 10,
    color: '#795239',
    letterSpacing: 2,
    zIndex: 1,
  },
  bottomHeart: {
    fontSize: 20,
    marginTop: 8,
    zIndex: 1,
  },
});
