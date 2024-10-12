import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [country, setCountry] = useState('');
  const [skinType, setSkinType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const countries = ["Brasil", "Estados Unidos", "Portugal"];
  const skinTypes = [
    "Tipo I - Muito Claro",
    "Tipo II - Claro",
    "Tipo III - Moreno Claro",
    "Tipo IV - Moreno",
    "Tipo V - Moreno Escuro",
    "Tipo VI - Negro"
    ];

  const handleRegister = () => {
    console.log({
      name,
      phone,
      city,
      uf,
      country,
      skinType,
      email,
      password,
    });
    
    navigation.navigate('Login'); // Volta para a página inicial após o registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="UF"
        value={uf}
        onChangeText={setUf}
      />

      {/* Texto para o Picker do País */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          dropdownIconColor="#000080"
        >
          <Picker.Item label="Selecione um país" value="" />
          {countries.map((country, index) => (
            <Picker.Item key={index} label={country} value={country} />
          ))}
        </Picker>
      </View>

      {/* Texto para o Picker do Fototipo */}
      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={skinType}
          onValueChange={(itemValue) => setSkinType(itemValue)}
          dropdownIconColor="#000080"
        >
          <Picker.Item label="Selecione o fototipo" value="" />
          {skinTypes.map((type, index) => (
            <Picker.Item key={index} label={type} value={type} />
          ))}
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
