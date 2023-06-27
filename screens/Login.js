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
const { primary, sea, white, little, killed, grey } = color;




export default function Login(params) {
  const navigation = params.navigation;

  const { setUserLoggedIn } = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [password, setPassword] = useState('');

  const [enableContinueBtn, setEnableContinueBtn] = useState(false);

  const enableFunction = () => {
    setEnableContinueBtn(true);
  };

  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);
  };

  // const handleLogin = async (credentials, setSubmitting) => {
  //   try {
  //     setMessage(null);

  //     // call backend
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then[(userCredential) => {
  //         console.log('Signed In')
  //         const user = userCredential.user;
  //         console.log(user)
  //       }]
  //     //move to next page

  //     setSubmitting(true);
  //     navigation.navigate('Home');

  //   } catch (error) {
  //     setMessage('Login failed: ' + error.message);
  //     setSubmitting(false)
  //   }
  // };

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
        setMessage('Login failed: ' + error.message);
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

  return <MainContainer>
    <KeyboardAvoiding>

      <View style={{ width: 100, height: 100, alignSelf: 'center', marginVertical: 30 }}>
        <Image source={ghana} style={{ width: '100%', height: '100%' }} />
      </View>


      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.email == "" || values.password == "") {
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
              onChangeText={(text) => setEmail(text)}
              value={email}
            />

            <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              isPassword={true}
              value={password}
            />

            <RegularTexts style={{ textAlign: 'right', color: primary, marginBottom: 25 }} onPress={() => { navigation.navigate('ResetP') }}>Forgot Password ?</RegularTexts>



            {!submitting && <RegularButton onPress={handleLogin}>Login</RegularButton>}
            {submitting && (
              <RegularButton disabled={true}>
                <ActivityIndicator color={white} />
              </RegularButton>
            )}


            <RegularTexts style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account? <RegularTexts style={{ color: primary }} onPress={() => { navigation.navigate("SignUp") }} >Register</RegularTexts></RegularTexts>

            <MsgText
              style={{ marginVertical: 10 }}
              success={isSuccessMessage}>
              {message || ""}
            </MsgText>
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
