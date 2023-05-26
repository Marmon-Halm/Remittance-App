import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import 'react-native-gesture-handler';
import color from './color';
import ghana from '../assets/ghana.png'
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import RNPickerSelect from 'react-native-picker-select';





export default function SignUp(params) {

  const [password, setPassword] = useState('');

  const [checked, toggleChecked] = useState(false);


  const [textInputEnabled, setTextInputEnabled] = useState(true);
  const [checkboxEnabled, setCheckboxEnabled] = useState(false);
  const [signUpEnabled, setSignUpEnabled] = useState(false);
  const [active, SetActive] = useState();

  

  const enableCheckBox = () => {
    setTextInputEnabled(true);
    setCheckboxEnabled(true);
  }

  const checkButtonAndEnableSignUp = () => {
    setSignUpEnabled(true);
    toggleChecked(true);
  }



  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0


  const navigation = params.navigation;

  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (




    <View style={styles.container}>


      <View style={{ paddingTop: 40, marginBottom: 10 }}>
        <View style={styles.view3}>
          <Ionicons name="arrow-back-outline" size={30} color='#000' onPress={() => {
            navigation.navigate("Login")
          }} />
          

          

        </View>
      </View>


      <View style={{ height: '87%' }}>


      <ScrollView>
          <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
            <View>
              <Text style={styles.textItsfree}>Sign Up. It's free!</Text>
              <Text style={styles.textCountry}>Country</Text>
            </View>



            <View style={{flexDirection: 'row', width: '100%', height: '12%', marginBottom: 40, borderBottomWidth: 2, borderBottomColor: '#5F5D5D' }}>

                <View style={{ width: '15%', height: 40, margin: 5, }}>
                   <Image source={ghana} style={{ width: '80%', height: '100%'}}/>
                </View>

                <View style={{width: '80%'}} >      
                    <RNPickerSelect

                      style={{
                        ...pickerSelectStyles,
                        placeholder: {
                          label: 'Ghana',
                          color: 'black'
                        },
                      }}
                      placeholder={{
                        label: "Country",
                        value: null,
                        color: 'black',

                      }}
                      placeholderTextColor={'black'}
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Ghana', value: 'Ghana' },
                        { label: 'Nigeria', value: 'Nigeria' },
                      ]}
                     
                    />
            </View>
            </View>
            


            <View>
              <Text style={styles.textlogin}>Your login details </Text>
            </View>

            <View
              behavior='padding'
              keyboardVerticalOffset={-64}
            >

              <TextInput style={styles.textInput}
                textContentType={"name"}
                placeholder={'Username'}
                autoComplete={'true'}
                minLength={1}
                label="FirstName"
                placeholderTextColor={'black'}
                keyboardAppearance={"light"}
              />

              

              <TextInput style={styles.textInput}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
                autoComplete={'true'}
                minLength={1}
                label="PhoneNumber"
                maxLength={10}
                keyboardAppearance="light"
                placeholder={'Phone Number'}
                placeholderTextColor={'black'}
              />

              

              <TextInput style={styles.textInput1}
                textContentType="password"
                secureTextEntry={true}
                autoComplete={'true'}
                label="Password"
                minLength={8}
                disabled={!textInputEnabled}
                onChange={enableCheckBox}
                placeholder={"Password"}
                placeholderTextColor={'black'}
                keyboardAppearance="light" />
                <Text style={styles.passwordRequire}>
                  Your password should be at least 8 characters, and include 1 upper case letter and 1 number
                </Text>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>


        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 90, width: '100%', alignItems: 'center' }}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={checked}
              onValueChange={checkButtonAndEnableSignUp}
              disabled={!checkboxEnabled}
              onPress={checkButtonAndEnableSignUp}
              color={checked ? '#2D9B94' : undefined}
            />
          </View>
          <Text style={{ fontSize: 15, width: '90%', fontFamily: 'Manrope_400Regular', paddingLeft: 5 }}>
            By submitting this form, you accept NAME's <Text style={{ color: '#2D9B94' }}>Terms and Conditions</Text> and <Text style={{ color: '#2D9B94' }}>Privacy Policy. </Text>
          </Text>
        </View>

        <View style={{ position: 'absolute', bottom: 5, width: '100%' }}>
          <TouchableOpacity 
          style={styles.button} 
          disabled={!signUpEnabled}
          onPress={() => { navigation.navigate('OTPVerification') }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>


      </View>


          




      <StatusBar style="dark" />
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 22,
    height: '100%',
    width: "100%",
  },
  
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 0,
    alignItems: 'center'
  },
  textVerification: {
    fontSize: 23,
    fontFamily: 'Manrope_600SemiBold',
  },
  textlogin: {
    fontSize: 25,
    fontFamily: 'Manrope_700Bold',
    color: `#2D9B94`,
    marginBottom: 10,
  },
  textCountry: {
    fontSize: 25,
    fontFamily: 'Manrope_700Bold',
    color: `#2D9B94`,
    marginBottom: 10,
  },
  textItsfree: {
    fontSize: 30,
    fontFamily: 'Manrope_700Bold',
    color: '#000',
    marginBottom: 20,
  },
  text2: {
    fontSize: 32,
    fontWeight: "500",
    marginTop: 25,
    marginBottom: 35,
  },
  text3: {
    fontSize: 32,
    fontWeight: "100",
    marginTop: 25,
  },
  button: {
    height: 62,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: 'transparent',
    paddingTop: 12,
    paddingBottom: 9,
    fontFamily: 'Manrope_600SemiBold',
    borderBottomWidth: 1,
    borderBottomColor: '#838282',
    fontSize: 20,
    color: `#000`,
    width: '100%',
    marginBottom: 20,
  },
  textInput1: {
    backgroundColor: 'transparent',
    paddingTop: 12,
    paddingBottom: 9,
    fontFamily: 'Manrope_600SemiBold',
    borderBottomWidth: 1,
    borderBottomColor: '#838282',
    fontSize: 20,
    color: `#000`,
    width: '100%',
    marginBottom: 10,
  },
  passwordRequire: {
    fontSize: 15,
    fontFamily: 'Manrope_500Medium',
    color: '#838282',
  },
  buttonText: {
    color: `#fff`,
    fontSize: 20,
    fontFamily: 'Manrope_700Bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '10%',
  },
});

const handleButtonChange = () => {
  const styles = StyleSheet.create({

    button: {
      height: 62,
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 12,
      borderRadius: 8,
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    buttonText: {
      color: `#3E3B3B`,
      fontSize: 20,
      fontFamily: 'Manrope_700Bold',
    },
  });

  styles;
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    
    backgroundColor: 'transparent',
    paddingTop: 12,
    fontFamily: 'Manrope_700Bold',
    fontSize: 23,
    color: `#000`,
    width: '100%',
  },
});