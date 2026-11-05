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

export default function CoffeeRegistrationScreen({
  onBack,
  onContinue,
}: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const canRegister =
    name.trim().length > 0 &&
    phone.trim().length >= 5 &&
    email.includes('@') &&
    password.length >= 6 &&
    password === confirmPassword;

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
          <Text style={styles.title}>Тіркелу</Text>
          <Text style={styles.subtitle}>
            Бізбен бірге кофе әлеміне қосылыңыз!
          </Text>
        </View>

        <Text style={styles.label}>Аты-жөніңіз</Text>
        <View style={styles.inputBox}>
          <Text style={styles.icon}>👤</Text>
          <TextInput
            style={styles.input}
            placeholder="Аты-жөніңізді енгізіңіз"
            placeholderTextColor="#A58E7D"
            value={name}
            onChangeText={setName}
          />
        </View>

        <Text style={styles.label}>Телефон нөмірі</Text>
        <View style={styles.inputBox}>
          <Text style={styles.icon}>☎️</Text>
          <TextInput
            style={styles.input}
            placeholder="+7 700 000 00 00"
            placeholderTextColor="#A58E7D"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <Text style={styles.label}>Электрондық пошта</Text>
        <View style={styles.inputBox}>
          <Text style={styles.icon}>✉️</Text>
          <TextInput
            style={styles.input}
            placeholder="example@mail.com"
            placeholderTextColor="#A58E7D"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={styles.label}>Құпиясөз</Text>
        <View style={styles.inputBox}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Құпиясөз ойлап табыңыз"
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

        <Text style={styles.label}>Құпиясөзді қайталаңыз</Text>
        <View style={styles.inputBox}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Құпиясөзді қайталаңыз"
            placeholderTextColor="#A58E7D"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            !canRegister && styles.disabled,
          ]}
          disabled={!canRegister}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>Тіркелу</Text>
        </TouchableOpacity>

        <View style={styles.loginRow}>
          <Text style={styles.loginHint}>
            Аккаунтыңыз бар ма?
          </Text>
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.loginText}> Кіру</Text>
          </TouchableOpacity>
        </View>

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
    height: 55,
    overflow: 'hidden',
    alignItems: 'flex-end',
    paddingTop: 10,
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
    fontSize: 25,
    marginRight: 35,
  },
  back: {
    width: 45,
    height: 40,
    justifyContent: 'center',
  },
  backText: {
    fontSize: 38,
    color: '#60351F',
  },
  logo: {
    alignItems: 'center',
    marginTop: 0,
  },
  cup: {
    fontSize: 37,
  },
  logoText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#59351F',
  },
  logoSubtitle: {
    fontSize: 11,
    color: '#9A7962',
    marginTop: 4,
    letterSpacing: 1,
  },
  decor: {
    fontSize: 18,
    marginTop: 7,
  },
  heading: {
    marginTop: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#42291B',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#927967',
    textAlign: 'center',
    marginTop: 8,
  },
  label: {
    color: '#59351F',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 7,
    marginTop: 9,
  },
  inputBox: {
    height: 53,
    backgroundColor: '#FFF9F3',
    borderWidth: 1.5,
    borderColor: '#E8D8C9',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  icon: {
    fontSize: 19,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: '#42291B',
  },
  eye: {
    fontSize: 20,
    color: '#795239',
    padding: 5,
  },
  button: {
    height: 58,
    backgroundColor: '#60351F',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    elevation: 3,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginHint: {
    fontSize: 13,
    color: '#9A8372',
  },
  loginText: {
    fontSize: 13,
    color: '#60351F',
    fontWeight: '800',
  },
  bottom: {
    alignItems: 'center',
    marginTop: 35,
    paddingTop: 15,
  },
  bottomText: {
    color: '#795239',
    fontSize: 9,
    letterSpacing: 2,
  },
  heart: {
    fontSize: 20,
    marginTop: 7,
  },
});