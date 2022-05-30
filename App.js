import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import OnBoarding from './screens/OnBoarding';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ResetP from './screens/ResetP';
import UserPin from './screens/UserPin';
import OTPVerification from './screens/OTPVerification';
import Profile from './screens/Profile';
import Transaction from './screens/Transaction';
import modal from './screens/modal';
import ExchangeRate from './screens/ExchangeRate';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <View
      style={{ flex: 1 }} 
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="modal" component={modal} />
          <Stack.Screen name="ResetP" component={ResetP} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="UserPin" component={UserPin} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} />
          <Stack.Screen name="Transaction" component={Transaction} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ExchangeRate" component={ExchangeRate} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}


