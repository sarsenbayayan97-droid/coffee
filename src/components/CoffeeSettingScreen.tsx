import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';

type Props = {
  onBack: () => void;
  onLogout: () => void;
};

export default function CoffeeSettingsScreen({
  onBack,
  onLogout,
}: Props) {
  const [notifications, setNotifications] = useState(true);
  const [promotions, setPromotions] = useState(false);
  const [language, setLanguage] = useState('Қазақша');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Баптаулар</Text>
        <Text style={styles.subtitle}>
          Қосымшаны өз қалауыңызға қарай баптаңыз
        </Text>

        <Text style={styles.sectionTitle}>Хабарламалар</Text>

        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Хабарламалар</Text>
            <Text style={styles.itemDescription}>
              Тапсырыс туралы хабарламалар
            </Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#D8C8B8', true: '#9A765D' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Жеңілдіктер мен акциялар</Text>
            <Text style={styles.itemDescription}>
              Арнайы ұсыныстар туралы хабарламалар
            </Text>
          </View>
          <Switch
            value={promotions}
            onValueChange={setPromotions}
            trackColor={{ false: '#D8C8B8', true: '#9A765D' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <Text style={styles.sectionTitle}>Қосымша</Text>

        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Тіл</Text>
            <Text style={styles.itemDescription}>{language}</Text>
          </View>

          <TouchableOpacity
            style={styles.languageButton}
            onPress={() =>
              setLanguage(language === 'Қазақша' ? 'Русский' : 'Қазақша')
            }
          >
            <Text style={styles.languageText}>Өзгерту</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Құпиялылық саясаты</Text>
            <Text style={styles.itemDescription}>
              Жеке деректеріңізді қорғау
            </Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Қолдау қызметі</Text>
            <Text style={styles.itemDescription}>
              Бізбен байланысу
            </Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Аккаунттан шығу</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Coffee Shop · Version 1.0.0</Text>
        <Text style={styles.footer}>🤎</Text>
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
    marginBottom: 28,
  },
  title: {
    color: '#59351F',
    fontSize: 29,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#927967',
    fontSize: 14,
    marginTop: 9,
    marginBottom: 25,
  },
  sectionTitle: {
    color: '#60351F',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#FFF9F3',
    borderWidth: 1,
    borderColor: '#E8D8C8',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
    paddingRight: 8,
  },
  itemTitle: {
    color: '#59351F',
    fontSize: 15,
    fontWeight: '600',
  },
  itemDescription: {
    color: '#A89585',
    fontSize: 12,
    marginTop: 5,
  },
  languageButton: {
    backgroundColor: '#EBD9C7',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  languageText: {
    color: '#60351F',
    fontSize: 12,
    fontWeight: '600',
  },
  arrow: {
    color: '#927967',
    fontSize: 25,
  },
  logoutButton: {
    height: 54,
    borderWidth: 1,
    borderColor: '#A65E4B',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  logoutText: {
    color: '#A65E4B',
    fontSize: 15,
    fontWeight: 'bold',
  },
  version: {
    textAlign: 'center',
    color: '#A89585',
    fontSize: 12,
    marginTop: 25,
  },
  footer: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 12,
  },
});