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
import MsgText from '../componets/Texts/MsgText';
import RegularButton from '../componets/Buttons/RegularButton';
import { Formik } from 'formik';
import { color } from '../screens/color';
import TitleText from '../componets/Texts/TitleText';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { StatusBarHeight } from '../componets/shared';
import StyledInput from '../componets/Inputs/StyledInput';
import MessageModal from '../componets/Modals/MessageModal';
const { primary, sea, white, little, killed, backgrey } = color;
import { MaterialIndicator } from 'react-native-indicators';
import ToastrSuccess from '../componets/Toastr Notification/ToastrSuccess';
import ToastrForSignUp from '../componets/Toastr Notification/ToastForSignUp';





export default function ResetP(params) {

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [isEnabled, setIsEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessageType, setModalMessageType] = useState('');
    const [headerText, setHeaderText] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [buttonText, setButtonText] = useState('');
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
    const auth = getAuth();
    const buttonHandler = () => {
        if (modalMessageType === "success") {
            // do something
        }

        setModalVisible(false);
    };

    const [toastrVisible, setToastrVisible] = useState(false);
    const [toastrVisible1, setToastrVisible1] = useState(false);
    const [bodyText, setBodyText] = useState('');
    const [bodyText1, setBodyText1] = useState('');
    const showToastr = (bodyText) => {
        setBodyText(bodyText);
    }
    const showToastr2 = (bodyText1) => {
        setBodyText1(bodyText1);
    }
    const successToastr = () => {
        setTimeout(() => {
            setToastrVisible(false);
        }, 4000)
        setToastrVisible(true);
        return showToastr('Password-Reset Link Sent!');
    };

    const showModal = (type, headerText, message, buttonText) => {
        setModalMessageType(type);
        setHeaderText(headerText);
        setModalMessage(message);
        setButtonText(buttonText);
        setModalVisible(true);
    };


    const handleOnSubmit = async () => {


        try {
            setMessage(null);
            setSubmitting(true);
            // call backend
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log('Email Sent')
                    // Password reset email sent! 
                    successToastr();
                    setSubmitting(false)
                })
                .catch((error) => {
                    console.log(error.message)
                    if (error.message === "Firebase: Error (auth/invalid-email)." || error.message === "Firebase: Error (auth/user-not-found).") {
                        setTimeout(() => {
                            setToastrVisible1(false);
                          }, 5000)
                          setToastrVisible1(true);
                          return showToastr2('Email Address Not Found!')
                    } else {
                        setTimeout(() => {
                            setToastrVisible1(false);
                          }, 5000)
                          setToastrVisible1(true);
                          return showToastr2(error.message)
                    }
                });



        } catch (error) {
            setMessage('Request failed: ' + error.message);
            setSubmitting(false)
        }
    };


    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return <MainContainer style={{ paddingTop: StatusBarHeight }}>
        <AntDesign name="arrowleft" size={30} color="black" onPress={() => { navigation.goBack() }} />
        <KeyboardAvoiding>

            <TitleText style={{ marginBottom: 15, marginTop: 7, }}>Reset Password</TitleText>
            <RegularTexts style={{ color: '#6A6A6A', marginBottom: 20 }}>Enter a valid email address for a password-reset link</RegularTexts>



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
                        <RegularTexts style={{ marginBottom: 8, fontSize: 15, fontFamily: 'Manrope_600SemiBold' }}>Email Address</RegularTexts>
                        <StyledInput
                            icon="email-outline"
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



                        {!submitting && <RegularButton disabled={!emailValid} style={{ opacity: emailValid ? 1 : 0.3, marginTop: 30 }} onPress={handleOnSubmit}>Continue</RegularButton>}
                        {submitting && (
                            <RegularButton disabled={true} style={{ marginTop: 30 }}>
                                <MaterialIndicator color='white' size={18} trackWidth={30 / 10} />
                            </RegularButton>
                        )}

                        <MsgText
                            style={{ marginBottom: 20 }}
                            success={isSuccessMessage}>
                            {errorMessage || ""}
                        </MsgText>
                    </>
                )}
            </Formik>

            <MessageModal
                modalVisible={modalVisible}
                buttonHandler={buttonHandler}
                type={modalMessageType}
                headerText={headerText}
                message={modalMessage}
                buttonText={buttonText}
            />

            <StatusBar style="dark" />
        </KeyboardAvoiding>

        {
            toastrVisible ? (<ToastrSuccess
                bodyText={bodyText}
            />
            ) : null
        }

        {
            toastrVisible1 ? (<ToastrForSignUp
                bodyText={bodyText1}
            />
            ) : null
        }
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