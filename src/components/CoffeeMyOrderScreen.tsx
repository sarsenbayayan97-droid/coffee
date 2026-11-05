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
};

export default function CoffeeMyOrdersScreen({ onBack }: Props) {
  const orders = [
    {
      id: '#1024',
      name: 'Капучино',
      date: '05.11.2026',
      price: '1 500 ₸',
      status: 'Дайын',
    },
    {
      id: '#1023',
      name: 'Карамельді латте',
      date: '04.11.2026',
      price: '1 800 ₸',
      status: 'Аяқталды',
    },
    {
      id: '#1022',
      name: 'Айс кофе',
      date: '02.11.2026',
      price: '1 400 ₸',
      status: 'Аяқталды',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹  Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Менің тапсырыстарым</Text>
        <Text style={styles.subtitle}>
          Сіздің барлық тапсырыстарыңыз бір жерде
        </Text>

        {orders.map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.orderId}>Тапсырыс {order.id}</Text>
              <Text style={styles.status}>{order.status}</Text>
            </View>

            <Text style={styles.product}>{order.name}</Text>

            <View style={styles.cardBottom}>
              <Text style={styles.date}>{order.date}</Text>
              <Text style={styles.price}>{order.price}</Text>
            </View>
          </View>
        ))}

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
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#927967',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFF9F3',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E8D8C8',
    padding: 18,
    marginBottom: 15,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    color: '#927967',
    fontSize: 13,
  },
  status: {
    color: '#6C7950',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: '#E8EDDC',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  product: {
    color: '#59351F',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 18,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F0E5DA',
    paddingTop: 13,
  },
  date: {
    color: '#A89585',
    fontSize: 13,
  },
  price: {
    color: '#60351F',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#A89585',
    marginTop: 25,
  },
});