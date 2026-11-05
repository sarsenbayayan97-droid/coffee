import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

type Props = {
  onBack: () => void;
  onEditProfile: () => void;
  onOrders: () => void;
  onFavorites: () => void;
  onSettings: () => void;
};

export default function CoffeeProfileScreen({
  onBack,
  onEditProfile,
  onOrders,
  onFavorites,
  onSettings,
}: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Жеке кабинет</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>

          <Text style={styles.name}>Қолданушы</Text>
          <Text style={styles.phone}>+7 700 000 00 00</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={onEditProfile}
          >
            <Text style={styles.editText}>Профильді өзгерту</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Менің аккаунтым</Text>

        <TouchableOpacity style={styles.menuItem} onPress={onOrders}>
          <Text style={styles.menuIcon}>📦</Text>
          <Text style={styles.menuText}>Менің тапсырыстарым</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onFavorites}>
          <Text style={styles.menuIcon}>♡</Text>
          <Text style={styles.menuText}>Таңдаулылар</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onSettings}>
          <Text style={styles.menuIcon}>⚙</Text>
          <Text style={styles.menuText}>Баптаулар</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>🤎 Coffee Shop</Text>
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
  },
  back: {
    color: '#60351F',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 25,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#59351F',
    marginBottom: 25,
  },
  profileCard: {
    backgroundColor: '#FFF9F3',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8D8C8',
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#EBD9C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 38,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#59351F',
    marginTop: 15,
  },
  phone: {
    color: '#927967',
    fontSize: 14,
    marginTop: 6,
  },
  editButton: {
    marginTop: 18,
    backgroundColor: '#60351F',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  editText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#59351F',
    marginTop: 30,
    marginBottom: 14,
  },
  menuItem: {
    backgroundColor: '#FFF9F3',
    borderRadius: 15,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8D8C8',
  },
  menuIcon: {
    fontSize: 21,
    width: 38,
    color: '#60351F',
  },
  menuText: {
    flex: 1,
    fontSize: 15,
    color: '#59351F',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 25,
    color: '#927967',
  },
  footer: {
    textAlign: 'center',
    color: '#A89585',
    marginTop: 30,
    fontSize: 14,
  },
});