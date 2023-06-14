import * as React from 'react';
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
import Settings from './screens/Settings';
import Trips from './screens/Trips';
import EditProfile from './screens/EditProfile';



const Stack = createNativeStackNavigator();





export default function App() {

  
      return (

        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ResetP'>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />            
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ResetP" component={ResetP} />
            <Stack.Screen name="UserPin" component={UserPin} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="Trips" component={Trips} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="EditProfile" component={EditProfile}/>
          </Stack.Navigator>
        </NavigationContainer>
  
    );
    
     

 
}


