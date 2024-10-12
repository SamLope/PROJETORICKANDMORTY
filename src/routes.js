import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen'; // Importe a nova tela

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Login" 
      component={LoginScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Register" // Nome da nova rota
      component={RegisterScreen} // Componente da nova tela
      options={{ title: 'Cadastro', headerShown: true }} // Título da tela
    />
  </Stack.Navigator>
);

export default AppNavigator;
