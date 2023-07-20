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




export default function EditProfile(params) {
    const navigation = params.navigation;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);


    return (
        <View style={{ height: windowHeight, width: windowWidth, paddingTop: StatusBarHeight, backgroundColor: "white" }}>

            <View style={styles.view3}>

                <View style={{ width: "10%" }}>
                    <AntDesign name="arrowleft" size={26} style={{ textAlign: "left" }} color="black" onPress={() => {
                        navigation.goBack()
                    }} />
                </View>

                <View style={{ width: "80%" }}>
                    <Text style={styles.textProfile}>
                        Profile
                    </Text>
                </View>
                <View style={{ width: "10%" }}>

                </View>

            </View>

            <KeyboardAvoiding>

                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 25, marginTop: 25 }}>
                        <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                            <Image source={profile} style={{ width: '100%', height: '100%', borderRadius: 100 / 2, }} />
                        </View>

                        <RegularTexts style={{ textAlign: 'center' }}>User First Name</RegularTexts>
                        <SmallTexts>User Phone Number</SmallTexts>

                    </View>


                    <Formik
                        initialValues={{ username: '', email: '', phoneNumber: '', password: '' }}
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
                                <StyledInput
                                    icon="user"
                                    placeholder="Username"
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    enablesReturnKeyAutomatically={true}
                                    keyboardAppearance="light"
                                    value={values.username}
                                />
                                <MsgText success={isSuccessMessage}> {""} </MsgText>

                                <StyledInput
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
                                <MsgText success={isSuccessMessage}> {""} </MsgText>

                                <StyledInput
                                    icon="phone"
                                    placeholder="Phone Number"
                                    keyboardType="numeric"
                                    keyboardAppearance="light"
                                    inputMode='numeric'
                                    returnKeyType='done'
                                    minLength={1}
                                    maxLength={12}
                                />
                                <MsgText success={isSuccessMessage}> {""} </MsgText>

                                <StyledInput
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



                            </>
                        )}
                    </Formik>




                </View>


                <StatusBar style="dark" />

            </KeyboardAvoiding>
            <BottomButton style={{ position: "absolute", bottom: 50, left: 20, right: 20 }}>Save Changes</BottomButton>


        </View>
    )
}

const styles = StyleSheet.create({


    view3: {
        width: '100%',
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: '#C2C2C2',
        paddingHorizontal: 18,
        paddingVertical: 10
    },
    textProfile: {
        fontSize: 18,
        fontFamily: 'Manrope_600SemiBold',
        marginHorizontal: 10,
        textAlign: "center"
    },

});























