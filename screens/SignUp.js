import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from "react";
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import Checkbox from 'expo-checkbox';
import 'react-native-gesture-handler';
import ghana from '../assets/ghana.png'
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import RNPickerSelect from 'react-native-picker-select';
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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { config, firebaseConfig } from '../config';
const { primary, sea, white, little, killed, grey } = color;
// import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// import { initializeApp, getApp } from 'firebase/app';
// import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

import fbConfig from '../config';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';







export default function SignUp(params) {

  // const app = getApp();
  // const auth = getAuth(app);

  // if (!app.options || Platform.OS === "web") {
  //   throw new Error (
  //     'This example only works on Android and IOS'
  //   )
  // };

  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // const firebaseConfig = app ? app.options : undefined; 
  const [message, showMessage] = React.useState();
  const attemptInvisibleVerification = false;


  const [checked, toggleChecked] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');




  const [textInputEnabled, setTextInputEnabled] = useState(true);
  const [checkboxEnabled, setCheckboxEnabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
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

  const [isSuccessMessage, setIsSuccessMessage] = useState(false);


  const handleSubmit = async (credentials, setSubmitting) => {
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

  const handleRegister = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed In')
        navigation.navigate('OTPVerification');
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      });

  };

  // const phoneAuth = async () => {
  //   // The FirebaseRecaptchaVerifierModal ref implements the
  //   // FirebaseAuthApplicationVerifier interface and can be
  //   // passed directly to `verifyPhoneNumber`.
  //   try {
  //     const phoneProvider = new PhoneAuthProvider(auth);
  //     const verificationId = await phoneProvider.verifyPhoneNumber(
  //       phoneNumber,
  //       recaptchaVerifier.current
  //     );
  //     setVerificationId(verificationId);
  //     showMessage({
  //       text: 'Verification code has been sent to your phone.',
  //     });
  //   } catch (err) {
  //     showMessage({ text: `Error: ${err.message}`, color: 'red' });
  //   }
  // }


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
    <AntDesign name="arrowleft" size={30} color="black" onPress={() => { navigation.goBack() }} />
    <KeyboardAvoiding>

      <TitleText style={{ marginBottom: 25, marginTop: 15, color: '#000' }}>Register here, it's free!</TitleText>

      <RegularTexts style={{ color: primary }} >Country</RegularTexts>

      <View style={styles.pickerView}>

        <View style={{ width: 22, height: 22, }}>
          <Image source={ghana} style={{ width: '100%', height: '100%' }} />
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

      <RegularTexts style={{ marginTop: 30, marginBottom: 8, color: primary }}>Your login details</RegularTexts>



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
              onChangeText={(text) => setEmail(text)}
              onBlur={handleBlur('email')}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="light"
              value={email}
            />

            <StyledTextInput
              icon="phone"
              placeholder="Phone Number"
              keyboardType="numeric"
              keyboardAppearance="light"
              inputMode='numeric'
              returnKeyType='done'
              minLength={1}
              maxLength={12}
            />

            <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              onChange={enableCheckBox}
              onBlur={handleBlur('password')}
              autoCapitalize='none'
              autoCorrect={false}
              isPassword={true}
              minLength={8}
              keyboardAppearance="light"
              value={password}
            />

            <SmallTexts>Your password should be at least 8 characters, and include 1 upper case letter and 1 number</SmallTexts>


            <MsgText
              style={{ marginVertical: 15 }}
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
              <RegularTexts style={{ fontSize: 13 }}>By submitting this form, you accept NAME's <RegularTexts style={{ color: primary, fontSize: 13 }}>Terms and Conditions</RegularTexts> and <RegularTexts style={{ color: primary, fontSize: 13 }}>Privacy Policy</RegularTexts></RegularTexts>

            </RowContainer>

            {!isSubmitting && <RegularButton onPress={handleRegister}>Register</RegularButton>}
            {isSubmitting && (
              <RegularButton style={{ alignItems: 'center' }}>
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
    paddingLeft: 15,
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