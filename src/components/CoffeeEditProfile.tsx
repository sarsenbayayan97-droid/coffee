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
  onSave: () => void;
};

export default function CoffeeEditProfileScreen({
  onBack,
  onSave,
}: Props) {
  const [name, setName] = useState('Қолданушы');
  const [phone, setPhone] = useState('+7 700 000 00 00');
  const [email, setEmail] = useState('example@gmail.com');
  const [city, setCity] = useState('Алматы');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.decoration}>🤎 🧸 🤎</Text>
        <Text style={styles.title}>Профильді өзгерту</Text>
        <Text style={styles.subtitle}>
          Жеке ақпаратыңызды жаңартыңыз
        </Text>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <Text style={styles.label}>Аты-жөніңіз</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Атыңыз"
          placeholderTextColor="#A89585"
        />

        <Text style={styles.label}>Телефон нөмірі</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="+7"
          placeholderTextColor="#A89585"
        />

        <Text style={styles.label}>Электрондық пошта</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#A89585"
        />

        <Text style={styles.label}>Қала</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Қалаңыз"
          placeholderTextColor="#A89585"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onSave}
        >
          <Text style={styles.buttonText}>Өзгерістерді сақтау</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F8EFE5',
  },
  container: {
    flexGrow: 1,
    padding: 25,
    paddingBottom: 35,
  },
  back: {
    color: '#60351F',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 25,
  },
  decoration: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#59351F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#927967',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EBD9C7',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 35,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#60351F',
    marginTop: 17,
    marginBottom: 8,
  },
  input: {
    height: 54,
    backgroundColor: '#FFF9F3',
    borderWidth: 1,
    borderColor: '#E8D8C8',
    borderRadius: 14,
    paddingHorizontal: 16,
    color: '#59351F',
    fontSize: 15,
  },
  button: {
    height: 55,
    backgroundColor: '#60351F',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});