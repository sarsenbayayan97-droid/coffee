import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

type Props = {
  onContinue: () => void;
};

export default function CoffeeWelcomeScreen({ onContinue }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topCircle} />

      <View style={styles.content}>
        <View style={styles.imageBox}>
          <Text style={styles.coffee}>☕</Text>
          <Text style={styles.heart}>🤎</Text>
        </View>

        <Text style={styles.title}>
          Coffee Shop-қа қош келдіңіз!
        </Text>

        <Text style={styles.subtitle}>
          Кофенің ерекше дәмін бізбен бірге сезініңіз.
          Әр күнді сүйікті сусыныңызбен бастаңыз!
        </Text>

        <View style={styles.features}>
          <Text style={styles.feature}>✦ Сапалы кофе</Text>
          <Text style={styles.feature}>✦ Жылдам тапсырыс</Text>
          <Text style={styles.feature}>✦ Жайлы атмосфера</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={onContinue}
        >
          <Text style={styles.buttonText}>Бастау →</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>COFFEE • LOVE • HAPPINESS</Text>
      </View>

      <View style={styles.bottomCircle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFE5',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  topCircle: {
    position: 'absolute',
    top: -100,
    right: -80,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#D6B49A',
  },
  content: {
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  imageBox: {
    width: 190,
    height: 190,
    backgroundColor: '#EBD9C7',
    borderRadius: 95,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  coffee: {
    fontSize: 85,
  },
  heart: {
    fontSize: 25,
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#59351F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#927967',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 15,
  },
  features: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF9F3',
    borderRadius: 18,
    padding: 20,
    marginTop: 28,
    gap: 14,
  },
  feature: {
    color: '#60351F',
    fontSize: 15,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    height: 58,
    backgroundColor: '#60351F',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    color: '#A89585',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 30,
  },
  bottomCircle: {
    position: 'absolute',
    bottom: -130,
    left: -90,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#D6B49A',
    zIndex: -1,
  },
});