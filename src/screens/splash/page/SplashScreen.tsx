import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user').then((user) => {
        if (user) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Login');
        }
      });
    }, 1000);
    
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <Text style={styles.title}>Trackeio</Text>
      <Text style={styles.subtitle}>Seu App de Gestão Financeira Pessoal</Text>
      <View style={styles.spacer} />
      <ActivityIndicator size="large" color={colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    opacity: 0.8,
  },
  spacer: {
    height: 50,
  },
});

export default SplashScreen; 