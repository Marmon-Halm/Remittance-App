import React from 'react';
import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold
} from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import StyledCodeInput from '../componets/Inputs/StyledCodeInput';
import RegularButton from '../componets/Buttons/RegularButton';
import MainContainer from '../componets/Containers/MainContainer';
import KeyboardAvoiding from '../componets/Containers/KeyboardAvoiding';
import RegularTexts from '../componets/Texts/RegularTexts';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import MsgText from '../componets/Texts/MsgText';
import { Formik } from 'formik';
import { color } from '../screens/color';
import BigTexts from '../componets/Texts/BigTexts';
import TitleText from '../componets/Texts/TitleText';
import SmallTexts from '../componets/Texts/SmallTexts';
import RowContainer from '../componets/Containers/RowContainer';
import { styled } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import ResendTimer from '../componets/Timers/ResendTimer';
const { primary, sea, white, little, killed, newGrey, grey } = color;


export default function OTPVerification(params) {
    const navigation = params.navigation;
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold
    });

    const MAX_CODE_LENGTH = 4;
    const [code, setCode] = useState('');
    const [pinReady, setpinReady] = useState(false);

    const [verifying, setVerifying] = useState(false);

    // resending email
    const [activeResend, setActiveResend] = useState(false);
    

    if (!fontsLoaded) {
        return <AppLoading />;
    };

    
    const handleEmailVerification = async (credentials, setSubmitting) => {
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
    


    return <MainContainer>
        <AntDesign name="arrowleft" size={30} color="black" onPress={() => {
            navigation.navigate("Login")
        }} />


        <KeyboardAvoiding>

            <RegularTexts style={{ textAlign: 'center', color: '#585656', marginTop: 20 }}>Type 4-digit code sent to your email</RegularTexts>


            <StyledCodeInput
                maxLength={MAX_CODE_LENGTH}
                setCode={setCode}
                code={code}
                setpinReady={setpinReady}
            />

            <ResendTimer activeResend={activeResend} setActiveResend={setActiveResend}></ResendTimer>



            {!verifying && pinReady && <RegularButton onPress={handleEmailVerification} style={{marginTop: 20}}>Verify</RegularButton>}
            {!verifying && !pinReady && <RegularButton disabled={true} style={{marginTop: 20, backgroundColor: '#DCDCDC'}} textStyle={{color: '#B6B6B4'}}>Verify</RegularButton>}
            
            {verifying && (
              <RegularButton disabled={true}>
                <ActivityIndicator size="small" color={white} />
              </RegularButton>
            )}






            <StatusBar style="dark" />

        </KeyboardAvoiding>
    </MainContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: "#fff",
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: `#000`,
        padding: 16,
        borderRadius: 10,
        justifyContent: 'center',
        width: '95%',
    },
    buttonText: {
        color: `#fff`,
        fontSize: 20,
        fontFamily: 'Manrope_600SemiBold',
    },
    optionsContainer: {
        flexDirection: 'column',
        height: 350,
        width: '90%',
        backgroundColor: `#000`,
        padding: 20,
        borderRadius: 15,
        flexWrap: 'wrap'
    },
    textVerification: {
        fontSize: 22,
        fontFamily: 'Manrope_600SemiBold',
    },
    textSentToNumber: {
        fontSize: 23,
        color: '#585656',
        fontFamily: 'Manrope_600SemiBold',
    },
    textCodeRequest: {
        fontSize: 17,
        color: '#585656',
        fontFamily: 'Manrope_600SemiBold',
        marginBottom: 15,
    },
    textInput: {
        width: '20%',
        backgroundColor: `#EFEFEF`,
        borderBottomWidth: 3,
        borderBottomColor: '#DAD9E2',
        borderRadius: 13,
        height: 60,
        fontSize: 35,
        textAlign: 'center'
    },

});
