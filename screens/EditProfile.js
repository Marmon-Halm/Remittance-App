import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Image, Dimensions, Text } from 'react-native';
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
import { StatusBarHeight } from '../componets/shared';
import StyledInput from '../componets/Inputs/StyledInput';
import TitleText from '../componets/Texts/TitleText';




export default function EditProfile(params) {
    const navigation = params.navigation;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    return (
        <View style={{ height: windowHeight, width: windowWidth, paddingTop: StatusBarHeight, backgroundColor: "#fff", paddingHorizontal: 20 }}>

            <View style={styles.view3}>

                <View style={{ width: "10%" }}>
                    <AntDesign name="arrowleft" size={26} style={{ textAlign: "left" }} color="black" onPress={() => {
                        navigation.goBack()
                    }} />
                </View>

                <View style={{ width: "80%" }}>
                    <Text style={styles.textProfile}>
                        Edit Profile
                    </Text>
                </View>
                <View style={{ width: "10%" }}>

                </View>

            </View>

            <KeyboardAvoiding>

                <View >
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 15, marginTop: 25 }}>
                        <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                            <Image source={profile} style={{ width: '100%', height: '100%', borderRadius: 100 / 2, }} />
                        </View>

                        <RegularTexts style={{ textAlign: 'center' }}>User First Name</RegularTexts>
                        <SmallTexts>User Phone Number</SmallTexts>

                    </View>


                    <Formik
                        initialValues={{ firstName: '', email: '', phoneNumber: '', password: '' }}
                    // onSubmit={(values, { setSubmitting }) => {
                    //     if (values.username == "" || values.email == "" || values.phoneNumber == "" || values.password) {
                    //         setMessage('Please enter your details');
                    //         setSubmitting(false);
                    //     } else {
                    //         handleLogin(values, setSubmitting);
                    //     }
                    // }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                            <>
                                <RegularTexts style={{ marginBottom: 8, fontSize: 15, fontFamily: 'Manrope_600SemiBold' }}>First Name</RegularTexts>
                                <StyledInput
                                    icon="account-outline"
                                    onChangeText={(text) => setFirstName(text)}
                                    onBlur={handleBlur('firstName')}
                                    enablesReturnKeyAutomatically={true}
                                    keyboardAppearance="light"
                                    value={firstName}
                                />
                                <MsgText
                                    style={{ marginBottom: message ? 12 : 5, marginLeft: 3, textAlign: 'left', }}
                                    success={isSuccessMessage}>
                                    {message || ""}
                                </MsgText>

                                <RegularTexts style={{ marginBottom: 8, fontSize: 15, fontFamily: 'Manrope_600SemiBold' }}>Phone Number</RegularTexts>
                                <StyledInput
                                    icon="phone-outline"
                                    keyboardType="numeric"
                                    keyboardAppearance="light"
                                    inputMode='numeric'
                                    returnKeyType='done'
                                    onChangeText={(text) => setPhoneNumber(text)}
                                    value={phoneNumber}
                                    minLength={1}
                                    maxLength={10}
                                />
                                <MsgText
                                    style={{ marginBottom: message ? 12 : 5, marginLeft: 3, textAlign: 'left', }}
                                    success={isSubmitting}>
                                    {message || ""}
                                </MsgText>

                                <RegularTexts style={{ marginBottom: 8, fontSize: 15, fontFamily: 'Manrope_600SemiBold' }}>Email Address</RegularTexts>
                                <StyledInput
                                    icon="email-outline"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={(text) => {
                                        setEmail(text)
                                    }}
                                    value={email}
                                    onBlur={handleBlur('email')}
                                    enablesReturnKeyAutomatically={true}
                                    keyboardAppearance="light"
                                />
                                <MsgText
                                    style={{ marginBottom: message ? 12 : 5, marginLeft: 3, textAlign: 'left', }}
                                    success={isSuccessMessage}>
                                    {message || ""}
                                </MsgText>

                                <RegularTexts style={{ marginBottom: 8, fontSize: 15, fontFamily: 'Manrope_600SemiBold' }}>Password</RegularTexts>
                                <StyledInput

                                    icon="lock-outline"
                                    onChangeText={(text) => {
                                        setPassword(text)
                                    }}
                                    isPassword={true}
                                    value={password}
                                    onBlur={handleBlur('password')}
                                    keyboardAppearance="light"
                                />



                            </>
                        )}
                    </Formik>




                </View>


                <StatusBar style="dark" />

            </KeyboardAvoiding>
            <BottomButton>Save Changes</BottomButton>


        </View>
    )
}

const styles = StyleSheet.create({


    view3: {
        width: '100%',
        flexDirection: "row",
        paddingVertical: 10
    },
    textProfile: {
        fontSize: 18,
        fontFamily: 'Manrope_600SemiBold',
        marginHorizontal: 10,
        textAlign: "center"
    },

});























