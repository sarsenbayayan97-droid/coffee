
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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type Props = {
  onBack: () => void;
  onContinue: (phone: string) => void;
};

export default function CoffeeForgotPasswordScreen({
  onBack,
  onContinue,
}: Props) {
  const [phone, setPhone] = useState('');

  const isValidPhone = phone.trim().replace(/\D/g, '').length >= 5;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topDecoration}>
            <View style={styles.topCircle} />
          </View>

          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>☕</Text>
            <Text style={styles.logoText}>Coffee Shop</Text>
            <Text style={styles.logoSubtitle}>
              Әр шынаяқта ерекше дәм
            </Text>
            <Text style={styles.decor}>🤎 🧸 🤎</Text>
          </View>

          <View style={styles.heading}>
            <Text style={styles.title}>
              Құпиясөзді қалпына келтіру
            </Text>

            <Text style={styles.subtitle}>
              Құпиясөзіңізді қалпына келтіру үшін
              {'\n'}
              телефон нөміріңізді енгізіңіз
            </Text>
          </View>

          <Text style={styles.label}>Телефон нөмірі</Text>

          <View style={styles.inputBox}>
            <Text style={styles.inputIcon}>☎️</Text>

            <TextInput
              style={styles.input}
              placeholder="+7 700 000 00 00"
              placeholderTextColor="#A58E7D"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={15}
            />

            {phone.length > 0 && (
              <TouchableOpacity onPress={() => setPhone('')}>
                <Text style={styles.clearText}>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              !isValidPhone && styles.disabledButton,
            ]}
            disabled={!isValidPhone}
            activeOpacity={0.85}
            onPress={() => onContinue(phone)}
          >
            <Text style={styles.buttonText}>Жалғастыру</Text>
          </TouchableOpacity>

          <Text style={styles.helperText}>
            Телефон нөміріңізді енгізген соң растау кодын енгізу бетіне өтесіз.
          </Text>

          <View style={styles.bottomDecoration}>
            <View style={styles.bottomWave} />
            <Text style={styles.bottomText}>
              COFFEE • LOVE • HAPPINESS
            </Text>
            <Text style={styles.bottomHeart}>🤎</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFE5',
  },
  keyboard: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 27,
    paddingBottom: 20,
  },
  topDecoration: {
    height: 65,
    overflow: 'hidden',
  },
  topCircle: {
    position: 'absolute',
    right: -35,
    top: -75,
    width: 170,
    height: 140,
    borderBottomLeftRadius: 100,
    backgroundColor: '#B9825D',
  },
  backButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
  },
  backText: {
    fontSize: 38,
    color: '#60351F',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  logoIcon: {
    fontSize: 43,
  },
  logoText: {
    fontSize: 27,
    fontWeight: '800',
    color: '#59351F',
    marginTop: 3,
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#9A7962',
    marginTop: 5,
    letterSpacing: 1,
  },
  decor: {
    fontSize: 20,
    marginTop: 10,
  },
  heading: {
    marginTop: 43,
    marginBottom: 32,
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#42291B',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#927967',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#60351F',
    marginBottom: 10,
  },
  inputBox: {
    height: 62,
    backgroundColor: '#FFF9F3',
    borderWidth: 1.5,
    borderColor: '#E8D8C9',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  inputIcon: {
    fontSize: 23,
    marginRight: 13,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#42291B',
  },
  clearText: {
    color: '#927967',
    fontSize: 18,
    padding: 5,
  },
  button: {
    height: 60,
    backgroundColor: '#60351F',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 3,
  },
  disabledButton: {
    opacity: 0.45,
  },
  buttonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  helperText: {
    color: '#9A8372',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 18,
    lineHeight: 19,
  },
  bottomDecoration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
    minHeight: 105,
    overflow: 'hidden',
  },
  bottomWave: {
    position: 'absolute',
    bottom: -35,
    left: -40,
    right: -40,
    height: 110,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: '#D6B49A',
  },
  bottomText: {
    fontSize: 10,
    color: '#795239',
    letterSpacing: 2,
    zIndex: 1,
  },
  bottomHeart: {
    fontSize: 20,
    marginTop: 8,
    zIndex: 1,
  },
});
