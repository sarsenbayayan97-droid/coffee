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

export default function CoffeeUserInformationScreen({
  onBack,
  onContinue,
}: Props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [showCities, setShowCities] = useState(false);

  const cities = ['Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Ақтөбе'];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.decoration}>🤎 🧸 🤎</Text>

        <Text style={styles.title}>Өзіңіз туралы</Text>
        <Text style={styles.subtitle}>
          Сізге ыңғайлы қызмет көрсету үшін ақпаратыңызды толтырыңыз
        </Text>

        <Text style={styles.label}>Аты-жөніңіз</Text>
        <TextInput
          style={styles.input}
          placeholder="Атыңызды енгізіңіз"
          placeholderTextColor="#A89585"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Қалаңыз</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowCities(!showCities)}
        >
          <Text style={city ? styles.selectedText : styles.placeholder}>
            {city || 'Қалаңызды таңдаңыз'}
          </Text>
          <Text style={styles.arrow}>⌄</Text>
        </TouchableOpacity>

        {showCities && (
          <View style={styles.cityList}>
            {cities.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.cityItem}
                onPress={() => {
                  setCity(item);
                  setShowCities(false);
                }}
              >
                <Text style={styles.cityText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            (!name.trim() || !city) && styles.disabledButton,
          ]}
          disabled={!name.trim() || !city}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>Жалғастыру</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Сіздің жайлылығыңыз — біздің басты мақсатымыз</Text>
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
    paddingHorizontal: 26,
    paddingTop: 25,
    paddingBottom: 30,
  },
  backButton: {
    marginBottom: 35,
  },
  backText: {
    color: '#60351F',
    fontSize: 17,
    fontWeight: '600',
  },
  decoration: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#59351F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#927967',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 12,
    marginBottom: 35,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#60351F',
    marginBottom: 9,
    marginTop: 17,
  },
  input: {
    minHeight: 55,
    borderRadius: 15,
    backgroundColor: '#FFF9F3',
    borderWidth: 1,
    borderColor: '#E8D8C8',
    paddingHorizontal: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#59351F',
    fontSize: 15,
  },
  placeholder: {
    flex: 1,
    color: '#A89585',
    fontSize: 15,
  },
  selectedText: {
    flex: 1,
    color: '#59351F',
    fontSize: 15,
  },
  arrow: {
    color: '#60351F',
    fontSize: 20,
  },
  cityList: {
    backgroundColor: '#FFF9F3',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E8D8C8',
    marginTop: 7,
    overflow: 'hidden',
  },
  cityItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E5DA',
  },
  cityText: {
    color: '#59351F',
    fontSize: 15,
  },
  button: {
    height: 55,
    backgroundColor: '#60351F',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
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
    fontSize: 12,
    textAlign: 'center',
    marginTop: 28,
  },
});