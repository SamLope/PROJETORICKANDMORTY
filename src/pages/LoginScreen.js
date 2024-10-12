import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

const LoginScreen = ({ navigation }) => {
  const [loginFocused, setLoginFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logoSunGuard.png')} // Altere o nome se necessário
        style={styles.logo} 
        resizeMode="contain" // Ajusta a imagem mantendo as proporções
      />
      <TextInput 
        style={styles.input} 
        placeholder="Login" 
        placeholderTextColor="#aaaaaa" // Cor do texto de placeholder
        onFocus={() => setLoginFocused(true)} 
        onBlur={() => setLoginFocused(false)} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        placeholderTextColor="#aaaaaa" // Cor do texto de placeholder
        onFocus={() => setPasswordFocused(true)} 
        onBlur={() => setPasswordFocused(false)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
