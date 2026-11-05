import React, { useState } from 'react';
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
};

export default function CoffeeFavoritesScreen({ onBack }: Props) {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Капучино', description: 'Жұмсақ сүт көбігімен', price: '1 500 ₸' },
    { id: 2, name: 'Карамельді латте', description: 'Карамель дәмімен', price: '1 800 ₸' },
    { id: 3, name: 'Айс кофе', description: 'Салқын әрі сергітетін', price: '1 400 ₸' },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites((current) => current.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Таңдаулылар</Text>
        <Text style={styles.subtitle}>
          Өзіңізге ұнаған сусындар
        </Text>

        {favorites.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>♡</Text>
            <Text style={styles.emptyTitle}>Әзірге бос</Text>
            <Text style={styles.emptyText}>
              Ұнаған кофелеріңізді осында сақтаңыз
            </Text>
          </View>
        ) : (
          favorites.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.coffeeIcon}>
                <Text style={styles.coffeeEmoji}>☕</Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>

              <TouchableOpacity
                onPress={() => removeFavorite(item.id)}
                style={styles.heartButton}
              >
                <Text style={styles.heart}>♥</Text>
              </TouchableOpacity>
            </View>
          ))
        )}

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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F3',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E8D8C8',
    padding: 15,
    marginBottom: 14,
  },
  coffeeIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    backgroundColor: '#EBD9C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coffeeEmoji: {
    fontSize: 28,
  },
  info: {
    flex: 1,
    marginLeft: 13,
  },
  name: {
    color: '#59351F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#927967',
    fontSize: 12,
    marginTop: 5,
  },
  price: {
    color: '#60351F',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 7,
  },
  heartButton: {
    padding: 8,
  },
  heart: {
    color: '#A65E4B',
    fontSize: 23,
  },
  empty: {
    alignItems: 'center',
    marginTop: 80,
  },
  emptyIcon: {
    color: '#A89585',
    fontSize: 55,
  },
  emptyTitle: {
    color: '#59351F',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  emptyText: {
    color: '#927967',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    color: '#A89585',
    textAlign: 'center',
    marginTop: 30,
  },
});