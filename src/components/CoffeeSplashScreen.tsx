import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function CoffeeSplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.circleTop} />

      <View style={styles.content}>
        <Text style={styles.coffee}>☕</Text>

        <Text style={styles.title}>Coffee Shop</Text>

        <Text style={styles.subtitle}>
          Әр шынаяқта ерекше дәм
        </Text>

        <View style={styles.decoration}>
          <Text style={styles.heart}>🤎</Text>
          <Text style={styles.bear}>🧸</Text>
          <Text style={styles.heart}>🤎</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.slogan}>
          COFFEE • LOVE • HAPPINESS
        </Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      <View style={styles.circleBottom} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFE5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleTop: {
    position: 'absolute',
    top: -100,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#B9825D',
    opacity: 0.8,
  },
  content: {
    alignItems: 'center',
  },
  coffee: {
    fontSize: 85,
    marginBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: '900',
    color: '#59351F',
  },
  subtitle: {
    fontSize: 15,
    color: '#927967',
    letterSpacing: 2,
    marginTop: 12,
  },
  decoration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 18,
  },
  heart: {
    fontSize: 30,
  },
  bear: {
    fontSize: 35,
  },
  bottom: {
    position: 'absolute',
    bottom: 55,
    alignItems: 'center',
  },
  slogan: {
    color: '#795239',
    fontSize: 11,
    letterSpacing: 3,
  },
  version: {
    color: '#A89585',
    fontSize: 11,
    marginTop: 12,
  },
  circleBottom: {
    position: 'absolute',
    bottom: -130,
    left: -100,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#D6B49A',
    opacity: 0.8,
    zIndex: -1,
  },
});