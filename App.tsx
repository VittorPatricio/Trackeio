import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash/page/SplashScreen';
import LoginScreen from './src/screens/login/page/LoginScreen';
import { AuthProvider } from './src/context/AuthContext';
import { HomeScreen } from './src/screens/home/page/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
     <AuthProvider>
      <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
     </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
