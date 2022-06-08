import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Checkbox from 'expo-checkbox';
import 'react-native-gesture-handler';
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


      <View style={{ paddingTop: 40, marginBottom: 18 }}>
        <View style={styles.view3}>
          <Ionicons name="arrow-back-outline" size={30} color='#4F4E53' onPress={() => {
            navigation.navigate("Login")
          }} />
          <Text style={styles.textVerification}>
            Sign Up
          </Text>

          <Text style={{ color: '#F8F8F8' }}>
            sasas
          </Text>

        </View>
      </View>


      <View style={{ height: '87%' }}>


        <ScrollView>
          <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
            <View>
              <Text style={styles.textCountry}>Country</Text>
            </View>
            <View >
              <RNPickerSelect

                style={{
                  ...pickerSelectStyles,
                  placeholder: {
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


            <View>
              <Text style={styles.textlogin}>Your details </Text>
            </View>

            <View
              behavior='padding'
              keyboardVerticalOffset={-64}
            >

              <TextInput style={styles.textInput}
                textContentType={"name"}
                placeholder={'First Name'}
                autoComplete={'true'}
                minLength={1}
                label="FirstName"
                placeholderTextColor={'black'}
                keyboardAppearance={"light"}
              />

              <TextInput style={styles.textInput}
                textContentType={"name"}
                placeholder={'Last Name'}
                autoComplete={'true'}
                label="LastName"
                minLength={1}
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

              <TextInput style={styles.textInput}
                textContentType={"emailAddress"}
                keyboardType={"email-address"}
                keyboardAppearance={"light"}
                minLength={1}
                label="EmailAddress"
                autoComplete={'true'}
                placeholderTextColor={'black'}
                placeholder={'Email Address'}
              />

              <TextInput style={styles.textInput}
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
              color={checked ? '#016e96' : undefined}
            />
          </View>
          <Text style={{ fontSize: 17, width: '90%', fontFamily: 'Manrope_400Regular', paddingLeft: 5 }}>
            Accept Remer's <Text style={{ color: '#016e96' }}>Terms and Conditions</Text> and <Text style={{ color: '#016e96' }}>Privacy Policy. </Text>
          </Text>
        </View>

        <View style={{ position: 'absolute', bottom: 5, width: '100%' }}>
          <TouchableOpacity style={styles.button} disabled={!signUpEnabled} onPress={() => { navigation.navigate('OTPVerification') }}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
    marginBottom: 10,
    alignItems: 'center'
  },
  textVerification: {
    fontSize: 23,
    fontFamily: 'Manrope_600SemiBold',
  },
  textlogin: {
    fontSize: 19,
    fontFamily: 'Manrope_700Bold',
    color: `#016e96`,
  },
  textCountry: {
    fontSize: 19,
    fontFamily: 'Manrope_700Bold',
    color: `#016e96`,
  },
  textItsfree: {
    fontSize: 35,
    fontFamily: 'Manrope_600SemiBold',
    fontWeight: "700",
    color: '#016e96',
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
    flexDirection: 'row',
    backgroundColor: '#016e96',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: 'transparent',
    paddingTop: 12,
    paddingBottom: 9,
    fontFamily: 'Manrope_500Medium',
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
    fontSize: 20,
    color: `#000`,
    width: '100%',
    marginBottom: 27,
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


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: 'transparent',
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'Manrope_500Medium',
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
    fontSize: 20,
    color: `#000`,
    width: '100%',
    marginBottom: 40,
  },
});