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
  phone: string;
  onBack: () => void;
  onContinue: () => void;
};

export default function CoffeeVerificationScreen({
  phone,
  onBack,
  onContinue,
}: Props) {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content"  />

      <View style={styles.top}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>☕ Coffee Shop</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.coffee}>☕</Text>

        <Text style={styles.title}>Нөмірді растау</Text>

        <Text style={styles.subtitle}>
          Нөміріңізге жіберілген кодты енгізіңіз
          {'\n'}{phone}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="----"
          placeholderTextColor="#B9A394"
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
          textAlign="center"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>Жалғастыру</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCode('')}>
          <Text style={styles.resend}>Кодты қайта енгізу</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.beans}>☕　☕　☕</Text>
        <Text style={styles.bottomText}>Coffee makes everything better</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  top: {
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  back: {
    fontSize: 38,
    color: '#59351F',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#59351F',
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  coffee: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#382116',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#8B7566',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 45,
    lineHeight: 23,
  },
  input: {
    height: 65,
    borderWidth: 1,
    borderColor: '#E6D5C5',
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    fontSize: 27,
    letterSpacing: 15,
    color: '#59351F',
  },
  button: {
    height: 60,
    backgroundColor: '#693B22',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  resend: {
    fontSize: 15,
    color: '#8B7566',
    textAlign: 'center',
    marginTop: 25,
    textDecorationLine: 'underline',
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  beans: {
    fontSize: 25,
  },
  bottomText: {
    color: '#A89585',
    fontSize: 12,
    marginTop: 10,
  },
});