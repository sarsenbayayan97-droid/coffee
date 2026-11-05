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
  onContinue: (phone: string) => void;
};

export default function CoffeeLoginScreen({ onContinue }: Props) {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content"  />

      <View style={styles.top}>
        <Text style={styles.time}>9:41</Text>
        <Text style={styles.logo}>☕ Coffee Shop</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.coffee}>☕</Text>

        <Text style={styles.title}>Құпия сөзді қалпына келтіру</Text>

        <Text style={styles.subtitle}>
          Құпия сөзді қалпына келтіру үшін
          {'\n'}телефон нөміріңізді енгізіңіз
        </Text>

        <Text style={styles.label}>Телефон нөміріңіз</Text>

        <TextInput
          style={styles.input}
          placeholder="+7 700 000 00 00"
          placeholderTextColor="#A89585"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          maxLength={15}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => onContinue(phone)}
        >
          <Text style={styles.buttonText}>Жалғастыру</Text>
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
  time: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#382116',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#59351F',
    textAlign: 'center',
    marginTop: 35,
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
    fontSize: 23,
    fontWeight: 'bold',
    color: '#382116',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#8B7566',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 40,
    lineHeight: 23,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#59351F',
    marginBottom: 12,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#E6D5C5',
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#382116',
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 60,
    backgroundColor: '#693B22',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
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