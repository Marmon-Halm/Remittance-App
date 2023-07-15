import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import MainContainer from '../componets/Containers/MainContainer';
import KeyboardAvoiding from '../componets/Containers/KeyboardAvoiding';
import RegularTexts from '../componets/Texts/RegularTexts';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import MsgText from '../componets/Texts/MsgText';
import RegularButton from '../componets/Buttons/RegularButton';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth } from '../config';
import { Formik } from 'formik';
import { color } from '../screens/color';
import ghana from '../assets/ghana.png';
import app from '../config';
import { UserContext } from '../contexts/UserContext';
import { StatusBarHeight } from '../componets/shared';
const { primary, sea, white, little, killed, grey } = color;


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Login(params) {
  const navigation = params.navigation;

  const { setUserLoggedIn } = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false)
  const [pwdValid, setPwdValid] = useState(false)
  const [loading, setLoading] = useState('');
  const [enableContinueBtn, setEnableContinueBtn] = useState(false);
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  const handleLogin = () => {
    setSubmitting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed In')
        setUserLoggedIn(true);
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        // setMessage('Login failed: ' + error.message);
        console.log(error.message)
        if (error.message === "Firebase: Error (auth/invalid-email)." || error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorMessage('Incorrect Email Address or Password')
        }
        setLoading(false)
        setSubmitting(false)
      });


  };

  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MainContainer style={{paddingTop: StatusBarHeight}}>
    <KeyboardAvoiding>

      <View style={{ width: 100, height: 100, alignSelf: 'center', marginVertical: 30 }}>
        <Image source={ghana} style={{ width: '100%', height: '100%' }} />
      </View>


      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (email === "" && password === "") {
            setMessage('Enter a valid email address');
            setMessage1('Enter a valid password');
            setSubmitting(false);

          } else if (email === "") {
            setMessage('Enter a valid email address');
            setSubmitting(false);

          } else if (password === "") {
            setMessage1('Enter a valid password');
            setSubmitting(false);
          } else {
            handleLogin(values, setSubmitting);
          }

        }}
      >
        {({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
            <MsgText
              style={{ marginBottom: 12, fontSize: errorMessage ? 16 : 0 }}
              success={isSuccessMessage}>
              {errorMessage || ""}
            </MsgText>


            <StyledTextInput
              icon="mail"
              placeholder="Email Address"
              keyboardType="email-address"
              onChangeText={(text) => {
                setEmail(text)
                setEmailValid(EMAIL_REGEX.test(text))
              }}
              value={email}
              valid={emailValid}
            />
            <MsgText
              style={{ marginBottom: message ? 12 : 1 ,  marginLeft: 3, textAlign: 'left', }}
              success={isSuccessMessage}>
              {message || ""}
            </MsgText>




            <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={(text) => {
                setPassword(text)
                setPwdValid(PWD_REGEX.test(text))

              }}
              isPassword={true}
              value={password}
              valid={pwdValid}
            />

            {/* <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={(text) => {
                setPassword(text)
                setPwdValid(PWD_REGEX.test(text))

              }}
              isPassword={true}
              value={password}
              valid={pwdValid}
            /> */}

            <MsgText
              style={{ marginBottom: message1 ? 12 : 0, marginLeft: 3, textAlign: 'left', fontSize: message1 ? 14 : 0 }}
              success={isSuccessMessage}>
              {message1 || ""}
            </MsgText>




            {!submitting && <RegularButton style={{ marginTop: 15,  shadowColor: 'grey', shadowOffset: { width: -3, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 10 }} onPress={handleSubmit}>Login</RegularButton>}
            {submitting && (
              <RegularButton disabled={true}>
                <ActivityIndicator color={'#fff'} /> Login
              </RegularButton>
            )}


            <RegularTexts style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account? <RegularTexts style={{ color: primary }} onPress={() => { navigation.navigate("SignUp") }} >Register</RegularTexts></RegularTexts>
            <RegularTexts style={{ textAlign: 'center', color: primary, marginTop: 5 }} onPress={() => { navigation.navigate('ResetP') }}>Forgot Password ?</RegularTexts>


          </>
        )}
      </Formik>

      <StatusBar style="dark" />

    </KeyboardAvoiding>
  </MainContainer>
}

const styles = StyleSheet.create({

  ImgContainer: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 30,
  },
});
