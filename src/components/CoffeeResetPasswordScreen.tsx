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
  onBack: () => void;
  onContinue: () => void;
};

export default function CoffeeResetPasswordScreen({
  onBack,
  onContinue,
}: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordsMatch =
    password.length >= 6 && password === confirmPassword;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.top}>
          <View style={styles.circle} />
          <Text style={styles.beans}>🫘</Text>
        </View>

        <TouchableOpacity onPress={onBack} style={styles.back}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.logo}>
          <Text style={styles.cup}>☕</Text>
          <Text style={styles.logoText}>Coffee Shop</Text>
          <Text style={styles.logoSubtitle}>
            Әр шынаяқта ерекше дәм
          </Text>
          <Text style={styles.decor}>🤎 🧸 🤎</Text>
        </View>

        <View style={styles.heading}>
          <Text style={styles.title}>
            Құпиясөзді жаңарту
          </Text>
          <Text style={styles.subtitle}>
            Жаңа құпиясөзіңізді енгізіп, растаңыз
          </Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Жаңа құпиясөз"
            placeholderTextColor="#A58E7D"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eye}>
              {showPassword ? '◉' : '◎'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Құпиясөзді қайталаңыз"
            placeholderTextColor="#A58E7D"
            secureTextEntry={!showConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirm(!showConfirm)}
          >
            <Text style={styles.eye}>
              {showConfirm ? '◉' : '◎'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.hint}>
          Құпиясөз кемінде 6 таңбадан тұруы керек
        </Text>

        {confirmPassword.length > 0 && (
          <Text style={styles.match}>
            {passwordsMatch
              ? '✓ Құпиясөздер сәйкес келеді'
              : 'Құпиясөздер сәйкес келмейді'}
          </Text>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            !passwordsMatch && styles.disabled,
          ]}
          disabled={!passwordsMatch}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>Сақтау</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            COFFEE • LOVE • HAPPINESS
          </Text>
          <Text style={styles.heart}>🤎</Text>
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
  content: {
    flexGrow: 1,
    paddingHorizontal: 27,
    paddingBottom: 20,
  },
  top: {
    height: 65,
    overflow: 'hidden',
    alignItems: 'flex-end',
    paddingTop: 15,
  },
  circle: {
    position: 'absolute',
    right: -35,
    top: -75,
    width: 170,
    height: 140,
    borderBottomLeftRadius: 100,
    backgroundColor: '#B9825D',
  },
  beans: {
    fontSize: 27,
    marginRight: 35,
  },
  back: {
    width: 45,
    height: 45,
    justifyContent: 'center',
  },
  backText: {
    fontSize: 38,
    color: '#60351F',
  },
  logo: {
    alignItems: 'center',
    marginTop: 5,
  },
  cup: {
    fontSize: 43,
  },
  logoText: {
    fontSize: 27,
    fontWeight: '800',
    color: '#59351F',
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#9A7962',
    marginTop: 5,
    letterSpacing: 1,
  },
  decor: {
    fontSize: 20,
    marginTop: 10,
  },
  heading: {
    marginTop: 48,
    marginBottom: 35,
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
    marginTop: 12,
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
    marginBottom: 17,
  },
  icon: {
    fontSize: 22,
    marginRight: 13,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#42291B',
  },
  eye: {
    fontSize: 22,
    color: '#795239',
    padding: 5,
  },
  hint: {
    fontSize: 12,
    color: '#9A8372',
    marginTop: 3,
  },
  match: {
    fontSize: 13,
    color: '#795239',
    marginTop: 10,
  },
  button: {
    height: 62,
    backgroundColor: '#60351F',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 3,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  bottom: {
    alignItems: 'center',
    marginTop: 90,
    paddingTop: 25,
  },
  bottomText: {
    color: '#795239',
    fontSize: 10,
    letterSpacing: 2,
  },
  heart: {
    fontSize: 22,
    marginTop: 10,
  },
});