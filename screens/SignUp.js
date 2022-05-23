import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import RNPickerSelect from 'react-native-picker-select';





export default function SignUp(params) {
  const [checked, toggleChecked] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 200 : 0

  const doYourTask = () => {
    setIsEnabled(true);
  }

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
        <View>
          <View style={styles.view3}>
            <Ionicons name="arrow-back-outline" size={32} color='darkblue' onPress={() => {
              navigation.navigate("Login")
            }} />
          </View>
        </View>
      </View>


      <View style={{ height: '87%' }}>
        <View style={{ marginBottom: 30, }}>
          <Text style={styles.textSignup}>Sign up. <Text style={styles.textItsfree}> It's free</Text></Text>
        </View>


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
                  { label: 'United Kingdom', value: 'United Kingdom' },
                  { label: 'United States', value: 'United States' },
                  { label: 'Ghana', value: 'Ghana' },
                  { label: 'Nigeria', value: 'Nigeria' },
                  { label: 'Togo', value: 'Togo' },
                  { label: 'Niger', value: 'Niger' },
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
                placeholder={'Full Name'}
                autoComplete={'true'}
                placeholderTextColor={'black'}
                keyboardAppearance={"light"}
                enablesReturnKeyAutomatically='true'
              />

              <TextInput style={styles.textInput}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
                autoComplete={'true'}
                keyboardAppearance="light"
                placeholder={'Phone Number'}
                placeholderTextColor={'black'}
              />

              <TextInput style={styles.textInput}
                textContentType={"emailAddress"}
                keyboardType={"email-address"}
                keyboardAppearance={"light"}
                autoComplete={'true'}
                placeholderTextColor={'black'}
                placeholder={'Email Address'}
                inputAccessoryViewID="true"
              />

              <TextInput style={styles.textInput}
                textContentType="password"
                secureTextEntry={true}
                autoComplete={'true'}
                placeholderTextColor={'black'}
                keyboardAppearance="light"
                placeholder={'Password (min: 8 characters)'} />
            </View>

          </KeyboardAvoidingView>
        </ScrollView>



        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 85, width: '100%', alignItems: 'center' }}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={checked}
              onPress={() => toggleChecked(!checked)}
            />
          </View>
          <Text style={{ fontSize: 17, width: '85%', fontFamily: 'Manrope_400Regular' }}>
            Accept Remer's <Text style={{ color: '#016e96' }}>Terms and Conditions</Text> and <Text style={{ color: '#016e96' }}>Privacy Policy. </Text>
          </Text>
        </View>

        <View style={{ position: 'absolute', bottom: 15, width: '100%' }}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('OTPVerification') }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 22,
    paddingRight: 22,
    paddingLeft: 22,
    paddingBottom: 0,

  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  textSignup: {
    fontSize: 35,
    fontFamily: 'Manrope_600SemiBold',
    color: `black`,
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
    width: '15%',
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
    marginBottom: 50,
  },
});