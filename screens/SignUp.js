import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from "react";
import { StyleSheet, View, Image, ActivityIndicator, Alert } from 'react-native';
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
import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db } from '../config';
const { primary, sea, white, little, killed, grey } = color;
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { StatusBarHeight } from '../componets/shared';







export default function SignUp(params) {

  // const app = getApp();
  // const auth = getAuth(app);

  // if (!app.options || Platform.OS === "web") {
  //   throw new Error (
  //     'This example only works on Android and IOS'
  //   )
  // };

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

  const [checked, toggleChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailValid, setEmailValid] = useState(false)
  const [pwdValid, setPwdValid] = useState(false)
  const [loading, setLoading] = useState('');

  const [message, setMessage] = useState('');



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
    toggleChecked(!checked);
  };

  const [isSuccessMessage, setIsSuccessMessage] = useState(false);


  const actionCodeSettings = {
    url: 'https://transporttruck-5292e.firebaseapp.com',
    iOS: {
      bundleId: 'com.trucktransportsystem.com'
    },
    android: {
      packageName: 'com.trucktransportsystem.com',
      installApp: true,
      minimumVersion: '12'
    },
    handleCodeInApp: true
  };

  const handleRegister = async () => {
    setLoading(true)

    try {
      console.log('registering...')
      setMessage(null);

      // call backend
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user;
      console.log('user ', user)
      const queryRef = query(
        collection(db, "users"),
        where("uid", "==", user?.uid)
      );



      console.log("response from creating user ");

      const querySnapshot = await getDocs(queryRef);
      console.log('query snap ', querySnapshot)

      if (querySnapshot.size === 0) {
        // Create a new user
        try {


          await addDoc(collection(db, "users"), {
            uid: user?.uid,
            firstName: firstName,
            email: email,
            phoneNumber: phoneNumber,
            verified: false
          }).then((res) => {
            sendEmailVerification(user, actionCodeSettings).then((res) => {
              console.log(res)
            }).catch((err) => {
              console.log(err)
              setLoading(false)
            })
            setLoading(false);
            // navigation.navigate('OTPVerification')
          });

        } catch (error) {
          setLoading(false);
          console.log(error);
          return; // Exit early if there was an error adding the user data
        }
      } else {
        Alert.alert("Email already in use");
      }
      //move to next page

      setSubmitting(false);

    } catch (error) {
      console.log(error)
      setMessage('Register failed: ' + error.message);
      setSubmitting(false)
    }
  };

  // const handleRegister =  () => {

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log('Signed In')
  //       navigation.navigate('OTPVerification');
  //       const user = userCredential.user;
  //       console.log(user)
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //     });

  // };


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



  return <MainContainer style={{paddingTop: StatusBarHeight}}>
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

      <RegularTexts style={{ marginTop: 30, color: primary }}>Your login details</RegularTexts>



      <Formik
        initialValues={{ firstName: '', email: '', phoneNumber: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (firstName === "" || email === "" || phoneNumber === "" || password === "") {
            setMessage('Please enter your details');
            console.log('first name ', firstName)
            console.log('phone ', phoneNumber)
            console.log('email ', email)
            console.log('pass ', password)


            setSubmitting(false);
          } else {
            handleRegister()
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
          <>

            <MsgText
              style={{ marginVertical: 5 }}
              success={isSuccessMessage}>
              {message || ""}
            </MsgText>
            <StyledTextInput
              icon="user"
              placeholder="First Name"
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text) => setFirstName(text)}
              onBlur={handleBlur('firstName')}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="light"
              value={firstName}
            />
            <MsgText
              style={{}}
              success={isSuccessMessage}>
              {""}
            </MsgText>

            <StyledTextInput
              icon="phone"
              placeholder="Phone Number"
              keyboardType="numeric"
              keyboardAppearance="light"
              inputMode='numeric'
              returnKeyType='done'
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              minLength={1}
              maxLength={10}
            />
            <MsgText success={isSuccessMessage}> {""} </MsgText>

            <StyledTextInput
              icon="mail"
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text) => {
                setEmail(text)
                setEmailValid(EMAIL_REGEX.test(text))
              }}
              value={email}
              valid={emailValid}
              onBlur={handleBlur('email')}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="light"
            />
            <MsgText success={isSuccessMessage}> {""} </MsgText>

            <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={(text) => {
                setPassword(text)
                setPwdValid(PWD_REGEX.test(text))
                setCheckboxEnabled(true)

              }}
              isPassword={true}
              value={password}
              valid={pwdValid}
              onBlur={handleBlur('password')}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardAppearance="light"
            />

            <SmallTexts style={{ marginTop: 5, marginLeft: 3, marginBottom: 40 }}>Password must have a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</SmallTexts>




            <RowContainer style={{ marginBottom: 15 }}>
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

            {!loading && <RegularButton onPress={handleSubmit} disabled={!checked} style={{ opacity: checked ? 1 : 0.3 }}>Register</RegularButton>}
            {loading && (
              <RegularButton disabled={loading} style={{ alignItems: 'center' }}>
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