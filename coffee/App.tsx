import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App(): JSX.Element {
  const handleGetStarted = (): void => {
    console.log('Get Started батырмасы басылды');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Фондық сурет және градиент қабаты */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop' }}
        style={styles.backgroundImage}
      >
        {/* Қараңғыландыру үшін gradient немесе қара түсті overlay */}
        <View style={styles.overlay}>
          <SafeAreaView style={styles.contentContainer}>
            
            {/* Мәтіндер орналасқан бөлік */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Fall in Love with{'\n'}Coffee in Blissful{'\n'}Delight!
              </Text>
              
              <Text style={styles.subtitle}>
                Welcome to our cozy coffee corner, where every cup is a delightful for you.
              </Text>
            </View>

            {/* Get Started батырмасы */}
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleGetStarted}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Суретті күңгірттендіру үшін
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#C67C4E', // Кофе стиліндегі қоңыр түс
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});