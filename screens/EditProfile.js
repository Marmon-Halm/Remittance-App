import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import profile from '../assets/profileD.png'
import { Formik } from 'formik';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import MsgText from '../componets/Texts/MsgText';
import MainContainer from '../componets/Containers/MainContainer';
import KeyboardAvoiding from '../componets/Containers/KeyboardAvoiding';
import BottomButton from '../componets/Buttons/BottomButton';
import RegularTexts from '../componets/Texts/RegularTexts';
import SmallTexts from '../componets/Texts/SmallTexts';




export default function EditProfile(params) {
    const navigation = params.navigation;


    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const windowWidth = Dimensions.get('window')


    return <MainContainer>
        <AntDesign name="arrowleft" size={30} color="black" onPress={() => { navigation.goBack() }} />

        <KeyboardAvoiding style={{position: 'absolute', height: windowWidth}}>

            <View style={{ width: '100%', alignItems: 'center', marginBottom: 35, marginTop: 15 }}>
                <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <Image source={profile} style={{ width: '100%', height: '100%', borderRadius: 100 / 2, }} />
                </View>

                <RegularTexts style={{ textAlign: 'center' }}>James Obeng</RegularTexts>
                <SmallTexts>+233 50 578 0528</SmallTexts>

            </View>


            <Formik
                initialValues={{ username: '', email: '', phoneNumber: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    if (values.username == "" || values.email == "" || values.phoneNumber == "" || values.password) {
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
                            placeholder="Username"
                            keyboardType="text"
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            enablesReturnKeyAutomatically={true}
                            keyboardAppearance="light"
                            value={values.username}
                        />

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
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            isPassword={true}
                            minLength={8}
                            keyboardAppearance="light"
                            value={values.password}
                        />

                        <MsgText
                            style={{ marginVertical: 15 }}
                            success={isSuccessMessage}>
                            {message || ""}
                        </MsgText>

                        {!isSubmitting && <BottomButton onPress={handleSubmit}>Save Changes</BottomButton>}
                        {isSubmitting && (
                            <BottomButton>
                                <ActivityIndicator size="small" color={white} />
                            </BottomButton>
                        )}


                    </>
                )}
            </Formik>




            <StatusBar style="dark" />

        </KeyboardAvoiding>
    </MainContainer>
}




