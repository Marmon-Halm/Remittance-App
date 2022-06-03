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
import { TextInput } from 'react-native-gesture-handler';


export default function OTPVerification(params) {
    const navigation = params.navigation;
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold
    });

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");

    const [lastPin, setLastPin] = useState(true);
    const [verifyEnabled, setVerifyEnabled] = useState(false);

   const enableVerifyButton = () => {
       setVerifyEnabled(true);
   }


    if (!fontsLoaded) {
        return <AppLoading />;
    };


    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 40, marginBottom: 38, width: '100%' }}>

                <View style={styles.view3}>
                    <Ionicons name="arrow-back-outline" size={30} color='#4F4E53' onPress={() => {
                        navigation.navigate("SignUp")
                    }} />
                    <Text style={styles.textVerification}>
                        Verify Phone
                    </Text>

                    <Text style={{ color: '#F8F8F8' }}>
                        sasas
                    </Text>

                </View>

            </View>

            <View style={{ alignItems: 'center' }}>

                <View style={styles.optionsContainer}>
                    <View style={{ height: '15%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textSentToNumber}>
                            Code is sent to  *** *** *XXX
                        </Text>

                    </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps='handled'>


                        <View style={{ height: '40%', width: '100%', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 10}}>
                           
                            <View>
                                <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={73 + 50}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                        <TextInput style={styles.textInput}
                                            ref={pin1Ref}
                                            keyboardType={"number-pad"}
                                            maxLength={1}
                                            onChange={(pin1) => {
                                                setPin1(pin1);
                                                if (pin1 !== null) {
                                                    pin2Ref.current.focus();
                                                }
                                            }}
                                            keyboardAppearance={"light"}
                                            blurOnSubmit={false}
                                        >
                                        </TextInput>

                                        <TextInput style={styles.textInput}
                                            ref={pin2Ref}
                                            blurOnSubmit={false}
                                            maxLength={1}
                                            onChange={(pin2) => {
                                                setPin2(pin2);
                                                if (pin2 !== null) {
                                                    pin3Ref.current.focus();
                                                }
                                            }}
                                            keyboardType={"number-pad"}
                                            keyboardAppearance={"light"}
                                        >
                                        </TextInput>

                                        <TextInput style={styles.textInput}
                                            ref={pin3Ref}
                                            blurOnSubmit={false}
                                            maxLength={1}
                                            onChange={(pin3) => {
                                                setPin3(pin3);
                                                if (pin3 !== null) {
                                                    pin4Ref.current.focus();
                                                }
                                            }}
                                            keyboardType={"number-pad"}
                                            keyboardAppearance="light"
                                        >
                                        </TextInput>

                                        <TextInput style={styles.textInput}
                                            ref={pin4Ref}
                                            maxLength={1}
                                            blurOnSubmit={false}
                                            onChange={enableVerifyButton}
                                            keyboardType={"number-pad"}
                                            disabled={!lastPin}
                                            keyboardAppearance="light"
                                        >
                                        </TextInput>
                                    </View>
                                </KeyboardAvoidingView>
                            </View>

                        </View>

                        <Text style={styles.textCodeRequest}>
                            Didn't receive a code? <Text style={{color: 'black', textDecorationLine: 'underline'}}> Request again </Text>
                        </Text>

                        <TouchableOpacity style={styles.button} disabled={!verifyEnabled} onPress={() => { navigation.navigate('Home')}}>
                            <Text style={styles.buttonText}> Verify and Create Account </Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>

            </View>


            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 18,
        paddingRight: 18,
        paddingLeft: 18,
        paddingBottom: 0,
        backgroundColor: "#F8F8F8",
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: `#016e96`,
        padding: 15,
        borderRadius: 12,
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: `#fff`,
        fontSize: 18,
        fontFamily: 'Manrope_600SemiBold',
    },
    optionsContainer: {
        flexDirection: 'column',
        height: 350,
        width: '90%',
        backgroundColor: `#F0F0F0`,
        padding: 20,
        borderRadius: 15,
        flexWrap: 'wrap'
    },
    textVerification: {
        fontSize: 23,
        fontFamily: 'Manrope_600SemiBold',
    },
    textSentToNumber: {
        fontSize: 23,
        color: 'gray',
        fontFamily: 'Manrope_500Medium',
    },
    textCodeRequest: {
        fontSize: 18,
        color: 'gray',
        fontFamily: 'Manrope_500Medium',
        marginBottom: 50,
    },
    textInput: {
        width: '22%',
        backgroundColor: `#D8D8D8`,
        borderBottomWidth: 3,
        borderBottomColor: 'lightgray',
        borderRadius: 13,
        height: 60,
        fontSize: 38,
        textAlign: 'center'
    },
   
});
