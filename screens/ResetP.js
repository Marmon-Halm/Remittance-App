import React from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
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
import { StatusBarHeight } from '../componets/shared';
import StyledInput from '../componets/Inputs/StyledInput';
const { primary, sea, white, little, killed, backgrey } = color;





export default function ResetP(params) {

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [checked, toggleChecked] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [email,  setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false)
    const doYourTask = () => {
        setIsEnabled(true);
    };

    const navigation = params.navigation;

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold
    });

    const handleOnSubmit = async (credentials, setSubmitting) => {
        try {
          setMessage(null);
    
          // call backend
    
          //move to next page
    
          setSubmitting(false);
    
        } catch (error) {
          setMessage('Request failed: ' + error.message);
          setSubmitting(false)
        }
      };


    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return <MainContainer style={{paddingTop: StatusBarHeight}}>
        <AntDesign name="arrowleft" size={30} color="black" onPress={() => { navigation.goBack() }} />
        <KeyboardAvoiding>

            <TitleText style={{ marginBottom: 20, marginTop: 10,  }}>Account Email</TitleText>
            <RegularTexts style={{ color: '#6A6A6A', marginBottom: 20 }}>Enter your email address for verification code</RegularTexts>



            <Formik
                initialValues={{ email: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    if (values.email == "") {
                        setMessage('Please enter your details');
                        setSubmitting(false);
                    } else {
                        handleOnSubmit(values, setSubmitting);
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                    <>
                        <StyledInput
                            icon="mail"
                            placeholder="Email Address"
                            keyboardType="email-address"
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text) => {
                                setEmail(text)
                                setEmailValid(EMAIL_REGEX.test(text))
                            }}
                            onBlur={handleBlur('email')}
                            enablesReturnKeyAutomatically={true}
                            keyboardAppearance="light"
                            value={email}
                            valid={emailValid}
                        />

                        <MsgText
                            style={{ marginBottom: 20 }}
                            success={isSuccessMessage}>
                            {message || ""}
                        </MsgText>

                        {!isSubmitting && <RegularButton disabled={!emailValid} style={{ opacity: emailValid ? 1 : 0.3}} onPress={() => {navigation.navigate('NewPassword')}}>Continue</RegularButton>}
                        {isSubmitting && (
                            <RegularButton disabled={true}>
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





{/* <StyledTextInput
                            icon="key"
                            placeholder="New Password"
                            onChangeText={handleChange('newPassword')}
                            onBlur={handleBlur('newPassword')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            isPassword={true}
                            minLength={8}
                            keyboardAppearance="light"
                            value={values.newPassword}
                        />

                        <StyledTextInput
                            icon="key"
                            placeholder="Confirm Password"
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            isPassword={true}
                            minLength={8}
                            keyboardAppearance="light"
                            value={values.confirmPassword}
                        /> */}