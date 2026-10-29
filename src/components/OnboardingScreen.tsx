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

interface OnboardingScreenProps {
  navigation: any;
}

export default function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <SafeAreaView style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Әрбір кесе кофеден{'\n'}ерекше ләззат{'\n'}ал!
              </Text>
              <Text style={styles.subtitle}>
                Жайлы кофе бұрышымызға қош келдіңіз, мұндағы әрбір дәм сіз үшін ерекше дайындалады.
              </Text>
            </View>

            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Бастау</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.55)', justifyContent: 'flex-end' },
  contentContainer: { paddingHorizontal: 24, paddingBottom: 40, alignItems: 'center' },
  textContainer: { alignItems: 'center', marginBottom: 32 },
  title: { color: '#FFFFFF', fontSize: 32, fontWeight: '700', textAlign: 'center', lineHeight: 40, marginBottom: 16 },
  subtitle: { color: '#B3B3B3', fontSize: 14, textAlign: 'center', lineHeight: 20, paddingHorizontal: 10 },
  button: { width: '100%', height: 56, backgroundColor: '#C67C4E', borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});