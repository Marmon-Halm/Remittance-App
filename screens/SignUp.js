import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, ActivityIndicator, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import 'react-native-gesture-handler';
import ghana from '../assets/ghana.png'
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import RNPickerSelect from 'react-native-picker-select';
import { firebase, firebaseConfig } from '../firebase-Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import MainContainer from '../componets/Containers/MainContainer';
import KeyboardAvoiding from '../componets/Containers/KeyboardAvoiding';
import RegularTexts from '../componets/Texts/RegularTexts';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import MsgText from '../componets/Texts/MsgText';
import RegularButton from '../componets/Buttons/RegularButton';
import { Formik } from 'formik';
import { color } from '../screens/color';
import BigTexts from '../componets/Texts/BigTexts';
import TitleText from '../componets/Texts/TitleText';
import SmallTexts from '../componets/Texts/SmallTexts';
import RowContainer from '../componets/Containers/RowContainer';
import { styled } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
const { primary, sea, white, little, killed, grey } = color;







export default function SignUp(params) {


  const [checked, toggleChecked] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



  const [textInputEnabled, setTextInputEnabled] = useState(true);
  const [checkboxEnabled, setCheckboxEnabled] = useState(false);
  const [signUpEnabled, setSignUpEnabled] = useState(false);
  const [active, SetActive] = useState();



  const RightIcon = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
    z-index: 1;
`;

  const enableCheckBox = () => {
    setCheckboxEnabled(true);
  };


  const checkButtonAndEnableSignUp = () => {
    toggleChecked(true);

  };

  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);


  const handleLogin = async (credentials, setSubmitting) => {
    try {
      setMessage(null);

      // call backend

      //move to next page

      setSubmitting(false);

    } catch (error) {
      setMessage('Login failed: ' + error.message);
      setSubmitting(false)
    }
  };


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



  return <MainContainer>
    <AntDesign name="arrowleft" size={30} color="black" onPress={() => {
      navigation.navigate("Login")
    }} />


    <KeyboardAvoiding>
      <BigTexts style={{ marginBottom: 25, marginTop: 10 }}>Sign up. It's free!</BigTexts>
      <TitleText >Country</TitleText>

      <View style={styles.pickerView}>

        <View style={{ width: 27, height: 22, }}>
          <Image source={ghana} style={{ width: '80%', height: '100%' }} />
        </View>

        <View style={{ width: '80%' }} >
          <RNPickerSelect

            style={{
              ...pickerSelectStyles,
              placeholder: {
                color: 'black'
              },
            }}
            placeholder={{
              label: "Ghana",
              value: 'Ghana',
              color: 'black',

            }}
            placeholderTextColor={'black'}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Nigeria', value: 'Nigeria' },
            ]}

          />
        </View>

        <RightIcon>
          <Feather name={'chevron-down'} size={18} color="#7A7A7A" />
        </RightIcon>

      </View>

      <TitleText style={{ marginTop: 40 }}>Your login details</TitleText>



      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.email == "" || values.phoneNumber == "" || values.password) {
            setMessage('Please enter your details');
            setSubmitting(false);
          } else {
            handleLogin(values, setSubmitting);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
          <>
            <StyledTextInput
              icon="mail"
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="light"
              value={values.email}
            />

            <StyledTextInput
              icon="phone"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              keyboardAppearance="light"
              inputMode='numeric'
              minLength={1}
              maxLength={12}
            />

            <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onChange={enableCheckBox}
              onBlur={handleBlur('password')}
              autoCapitalize='none'
              autoCorrect={false}
              isPassword={true}
              minLength={8}
              keyboardAppearance="light"
              value={values.password}
            />

            <SmallTexts style={{ marginTop: 10 }}>Your password should be at least 8 characters, and include 1 upper case letter and 1 number</SmallTexts>


            <MsgText
              style={{ marginVertical: 20 }}
              success={isSuccessMessage}>
              {message || ""}
            </MsgText>

            <RowContainer>
              <View style={{ marginRight: 8 }}>
                <Checkbox
                  value={checked}
                  onValueChange={checkButtonAndEnableSignUp}
                  disabled={!checkboxEnabled}
                  onPress={checkButtonAndEnableSignUp}
                  color={checked ? '#000' : undefined}
                />
              </View>
              <RegularTexts style={{ fontSize: 15 }}>By submitting this form, you accept NAME's <RegularTexts style={{ color: primary, fontSize: 15 }}>Terms and Conditions</RegularTexts> and <RegularTexts style={{ color: primary, fontSize: 15 }}>Privacy Policy</RegularTexts></RegularTexts>

            </RowContainer>

            {!isSubmitting && <RegularButton onPress={handleSubmit}>Register</RegularButton>}
            {isSubmitting && (
              <RegularButton>
                <ActivityIndicator size="small" color={white} />
              </RegularButton>
            )}


          </>
        )}
      </Formik>

      <StatusBar style="dark" />

    </KeyboardAvoiding>
  </MainContainer>
}





const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  pickerView: {
    fontSize: 18,
    flexDirection: 'row',
    fontFamily: 'Manrope_500Medium',
    height: 55,
    alignItems: 'center',
    marginTop: 15,
    color: '#0000',
    paddingLeft: 16,
    paddingRight: 55,
    borderRadius: 10,
    backgroundColor: color.grey,
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '7%',
  },
});



const pickerSelectStyles = StyleSheet.create({
  inputIOS: {

    backgroundColor: 'transparent',
    fontFamily: 'Manrope_500Medium',
    paddingLeft: 7,
    fontSize: 18,
    color: `#000`,
    width: '100%',
  },
});