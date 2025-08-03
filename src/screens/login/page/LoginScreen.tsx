import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../../../colors';
import Carousel from '../components/Carousel';
import {User, AuthContext} from '../../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const { setUser} = useContext(AuthContext);
  const handleLogin = ({ name, avatar }: User) => {
    if (!name.trim()) {
      Alert.alert('Atenção', 'Por favor, digite seu nome.');
      return;
    }
    if (!avatar) {
      Alert.alert('Atenção', 'Por favor, selecione um avatar.');
      return;
    }

    setUser({ name, avatar });
    AsyncStorage.setItem('user', JSON.stringify({ name, avatar }));
    setTimeout(() => {
      navigation.navigate('Home');
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um Avatar!</Text>
      <Carousel onSelectAvatar={setUserAvatar} />
      <Text style={styles.title}>Que bom te ver por aqui!</Text>
      <Text style={styles.subtitle}>Como podemos te chamar?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor={colors.neutral}
          keyboardType="default"
          style={[
            styles.textInput,
            {
              borderWidth: isFocused ? 3 : 2,
            },
          ]}
          value={userName}
          onChangeText={setUserName}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() => handleLogin({name: userName, avatar: userAvatar})}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Começar Planejamento Financeiro!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 25,
  },
  iconArea: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  subtitle: {
    fontSize: 16,
    color: colors.neutral,
  },
  inputContainer: {
    width: '80%',
    marginTop: 10,
  },
  textInput: {
    height: 50,
    backgroundColor: colors.textLight,
    borderRadius: 12,
    borderColor: colors.primary,
    textAlign: 'left',
    color: colors.textDark,
    textAlignVertical: 'center',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  buttonArea: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    padding: 5,
  },
  button: {
    width: '30%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.textLight,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
