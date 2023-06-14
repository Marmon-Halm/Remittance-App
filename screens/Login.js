import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import { firebase, firebaseConfig } from '../firebase-Config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import MainContainer from '../componets/Containers/MainContainer';
import KeyboardAvoiding from '../componets/Containers/KeyboardAvoiding';
import RegularTexts from '../componets/Texts/RegularTexts';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import MsgText from '../componets/Texts/MsgText';
import RegularButton from '../componets/Buttons/RegularButton';
import { Formik } from 'formik';
import { color } from '../screens/color';
import PressableText from '../componets/Texts/PressableText';
const { primary, sea, white, little, killed, grey } = color;




export default function Login(params) {
  const navigation = params.navigation;

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home');
      })

  };




  const [passwordInput, setPasswordInput] = useState(true);
  const [enableContinueBtn, setEnableContinueBtn] = useState(false);

  const enableFunction = () => {
    setEnableContinueBtn(true);
  };

  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);
  };

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
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />

            <StyledTextInput
              icon="key"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              isPassword={true}
              value={values.password}
            />

            <PressableText style={{ textAlign: 'right', marginVertical: 10 }}>Forgot Password ?</PressableText>

            <MsgText
              style={{ marginBottom: 20 }}
              success={isSuccessMessage}>
              {message || ""}
            </MsgText>

            {!isSubmitting && <RegularButton onPress={handleSubmit}>Login</RegularButton>}
            {isSubmitting && (
              <RegularButton disabled={true}>
                <ActivityIndicator size="small" color={white} />
              </RegularButton>
            )}


            <RegularTexts style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account? <RegularTexts style={{ color: primary }}>Sign Up</RegularTexts></RegularTexts>
          </>
        )}
      </Formik>

      <StatusBar style="dark" />

    </KeyboardAvoiding>
  </MainContainer>
  // <View style={styles.container}>


  //   <View style={{ marginBottom: 70, marginTop: 70 }}>
  //     <Text style={styles.textHey}>Hey,</Text>
  //     <Text style={styles.textLoginNow}>Login Now.</Text>
  //   </View>

  //   <TextInput
  //     style={styles.textInput}
  //     textContentType={"emailAddress"}
  //     keyboardType={"email-address"}
  //     keyboardAppearance={"light"}
  //     placeholderTextColor={'black'}
  //     autoCapitalize='none'
  //     value={email}
  //     autoCorrect={false}
  //     onChangeText={(text) => setEmail(text)}
  //     placeholder={'Email Address'}
  //   />

  //   <TextInput
  //     style={styles.textInput} 
  //     placeholder={'Password'}
  //     textContentType="password"
  //     secureTextEntry={true}
  //     autoCapitalize='none'
  //     value={password}
  //     autoCorrect={false}
  //     onChangeText={(text) => setPassword(text)}
  //     disabled={!passwordInput}
  //     onChange={enableFunction}


  //     placeholderTextColor={'black'}
  //     keyboardAppearance="light"
  //     />

  //     { loading ? ( <ActivityIndicator size="large" color="#0000ff" /> 
  //     ) : (
  //     <> 
  //         <TouchableOpacity style={styles.button} disabled={!enableContinueBtn} onPress={handleSignIn}>
  //           <Text style={styles.buttonText}>Continue</Text>
  //         </TouchableOpacity>
  //     </>     

  //     )}

  //   {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
  //     <Text style={{ fontSize: 22, marginTop: 15, marginBottom: 15, color: 'gray', fontFamily: 'Manrope_500Medium' }}>or</Text>
  //   </View>


  //   <TouchableOpacity google={true} style={styles.button1} onPress={
  //       signInWithGoogleAsync}
  //     >

  //       <Image style={styles.imageStyle} source={googleLogo} />
  //       <Text style={styles.button1Text}>Continue with Google</Text>
  //       <AntDesign name="apple1" size={20} color="#E8E8E8" />
  //     </TouchableOpacity> */}





  //   {/* <TouchableOpacity style={styles.button2} onPress={() => {
  //     navigation.navigate("Home")
  //   }}>
  //     <AntDesign name="apple1" size={20} color="white" />
  //     <Text style={styles.button2Text}>Continue with Apple</Text>
  //     <AntDesign name="apple1" size={20} color="black" />
  //   </TouchableOpacity> */}

  //   <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
  //     <Text style={{ fontSize: 20, marginBottom: 5, fontFamily: 'Manrope_500Medium' }}> Don't have an account?, <Text style={{ color: `#016e96` }} onPress={() => { navigation.navigate("SignUp") }}>Sign Up</Text></Text>
  //   </View>
  //   <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
  //     <Text style={{ fontSize: 20, color: '#016e96', fontFamily: 'Manrope_500Medium' }} onPress={() => { navigation.navigate("ResetP") }}>Forgot your password?</Text>
  //   </View>

  // 
  // </View>

}

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "#F8F8F8",
//     padding: 30,
//   },
//   view3: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   textHey: {
//     fontSize: 40,
//     fontFamily: 'Manrope_600SemiBold',
//     color: `black`,
//   },
//   textLoginNow: {
//     fontSize: 40,
//     color: '#016e96',
//     fontFamily: 'Manrope_600SemiBold',
//   },
//   button: {
//     flexDirection: 'row',
//     backgroundColor: `#016e96`,
//     padding: 15,
//     marginBottom: 14,
//     borderRadius: 8,
//     justifyContent: 'center',
//     width: '100%',
//   },
//   textInput: {
//     backgroundColor: 'transparent',
//     paddingTop: 12,
//     paddingBottom: 9,
//     fontFamily: 'Manrope_500Medium',
//     borderBottomWidth: 1.5,
//     borderBottomColor: 'gray',
//     fontSize: 24,
//     color: `#000`,
//     width: '100%',
//     marginBottom: 30,
//   },
//   buttonText: {
//     color: `#fff`,
//     fontSize: 20,
//     fontFamily: 'Manrope_600SemiBold',
//   },
// });
