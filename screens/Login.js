import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, KeyboardAvoidingView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import googleLogo from "../assets/googleLogo.png";
import { AntDesign } from "@expo/vector-icons";
import * as Google from 'expo-google-app-auth';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';


export default function Login(params) {
  const navigation = params.navigation;

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        iosClientId: '512332759384-18cnd049km1vg70rbrhj61k4q06748u3.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken,
          setTimeout(() => navigation.navigate('Home'), 2000)
      } else {
        return { cancelled: true };
      }

    } catch (e) {
      return { error: true };
    }
  }




  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>


      <View style={{ marginBottom: 70, marginTop: 70 }}>
        <Text style={styles.textHey}>Hey,</Text>
        <Text style={styles.textLoginNow}>Login Now.</Text>
      </View>

      <TextInput
        style={styles.textInput}
        textContentType={"emailAddress"}
        keyboardType={"email-address"}
        keyboardAppearance={"light"}
        autoComplete={'true'}
        placeholderTextColor={'black'}
        placeholder={'Email Address'}
      />

      <TextInput
        style={styles.textInput} 
        placeholder={'Password'}
        textContentType="password"
        secureTextEntry={true}
        autoComplete={'true'}
        placeholderTextColor={'black'}
        keyboardAppearance="light"
        />


      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Home')}}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>


      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, marginTop: 15, marginBottom: 15, color: 'gray', fontFamily: 'Manrope_500Medium' }}>or</Text>
      </View>


      <TouchableOpacity google={true} style={styles.button1} onPress={
          signInWithGoogleAsync}
        >
  
          <Image style={styles.imageStyle} source={googleLogo} />
          <Text style={styles.button1Text}>Continue with Google</Text>
          <AntDesign name="apple1" size={20} color="#E8E8E8" />
        </TouchableOpacity>


      


      {/* <TouchableOpacity style={styles.button2} onPress={() => {
        navigation.navigate("Home")
      }}>
        <AntDesign name="apple1" size={20} color="white" />
        <Text style={styles.button2Text}>Continue with Apple</Text>
        <AntDesign name="apple1" size={20} color="black" />
      </TouchableOpacity> */}

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 5, fontFamily: 'Manrope_500Medium' }}> Don't have an account?, <Text style={{ color: `#016e96` }} onPress={() => { navigation.navigate("SignUp") }}>Sign Up</Text></Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: '#016e96', fontFamily: 'Manrope_500Medium' }} onPress={() => { navigation.navigate("ResetP") }}>Forgot your password?</Text>
      </View>

      <StatusBar style="dark" />

    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 30,
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textHey: {
    fontSize: 40,
    fontFamily: 'Manrope_600SemiBold',
    color: `black`,
  },
  textLoginNow: {
    fontSize: 40,
    color: '#016e96',
    fontFamily: 'Manrope_600SemiBold',
  },
  text2: {
    fontSize: 32,
    marginTop: 65,
    marginBottom: 30,
  },
  text3: {
    fontSize: 32,
    marginTop: 65,
    marginBottom: 30,
  },
  button1: {
    flexDirection: 'row',
    backgroundColor: `#E8E8E8`,
    padding: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: `#016e96`,
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    width: '100%',
  },
  textInput: {
    backgroundColor: 'transparent',
    paddingTop: 12,
    paddingBottom: 9,
    fontFamily: 'Manrope_500Medium',
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
    fontSize: 24,
    color: `#000`,
    width: '100%',
    marginBottom: 30,
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 25,
  },
  buttonText: {
    color: `#fff`,
    fontSize: 20,
    fontFamily: 'Manrope_600SemiBold',
  },
  button1Text: {
    color: `gray`,
    fontSize: 20,
    fontFamily: 'Manrope_600SemiBold',
  },
  imageStyle: {
    width: 25,
    marginLeft: -2,
    height: 20,
  },
  logoStyle: {
    width: '100%',
    height: 60,
  },
});
