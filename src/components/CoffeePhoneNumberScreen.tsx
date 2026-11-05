import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

type Props = {
  onBack: () => void;
  onContinue: (phone: string) => void;
};

export default function CoffeePhoneNumberScreen({
  onBack,
  onContinue,
}: Props) {
  const [phone, setPhone] = useState('');

  const isValid = phone.replace(/\D/g, '').length >= 10;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.decoration}>🤎 🧸 🤎</Text>

        <Text style={styles.title}>Телефон нөміріңіз</Text>

        <Text style={styles.subtitle}>
          Аккаунтыңызға кіру үшін телефон нөміріңізді енгізіңіз.
          Сізге растау коды жіберіледі.
        </Text>

        <Text style={styles.label}>Телефон нөмірі</Text>

        <View style={styles.inputBox}>
          <Text style={styles.countryCode}>+7</Text>
          <TextInput
            style={styles.input}
            placeholder="700 000 00 00"
            placeholderTextColor="#A89585"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, !isValid && styles.disabledButton]}
          disabled={!isValid}
          onPress={() => onContinue('+7' + phone)}
        >
          <Text style={styles.buttonText}>Жалғастыру</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>COFFEE • LOVE • HAPPINESS</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFE5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 25,
  },
  backButton: {
    marginBottom: 55,
  },
  backText: {
    color: '#60351F',
    fontSize: 17,
    fontWeight: '600',
  },
  decoration: {
    fontSize: 27,
    textAlign: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#59351F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#927967',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 40,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#60351F',
    marginBottom: 10,
  },
  inputBox: {
    height: 60,
    backgroundColor: '#FFF9F3',
    borderWidth: 1,
    borderColor: '#E8D8C8',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  countryCode: {
    color: '#60351F',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#59351F',
    fontSize: 16,
  },
  button: {
    height: 57,
    backgroundColor: '#60351F',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  disabledButton: {
    opacity: 0.45,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    color: '#A89585',
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 50,
  },
});