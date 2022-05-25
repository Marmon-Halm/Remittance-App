import React from 'react';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';





export default function ResetP(params) {
    const [checked, toggleChecked] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);

    const doYourTask = () => {
        setIsEnabled(true);
    }

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


    return (




        <View style={styles.container}>

            <View style={{ paddingTop: 40, marginBottom: 18 }}>
                <View>
                    <View style={styles.view3}>
                        <Ionicons name="arrow-back-outline" size={32} color='darkblue' onPress={() => {
                            navigation.navigate("Login")
                        }} />
                    </View>
                </View>
            </View>



            <View style={{height: '85%'}}>
                <View style={{ marginBottom: 30, }}>
                    <Text style={styles.textforgottenP}>Forgotten <Text style={{ color: '#016e96'}}>Password</Text> </Text>
                </View>


                <View style={{ marginBottom: 50 }}>
                    <Text style={styles.textTypeEmail}>Enter your email address and new password to reset your account password </Text>
                </View>

                <View
                    behavior='padding'
                    keyboardVerticalOffset={-64}
                >

                    <TextInput style={styles.textInput}
                        textContentType={"emailAddress"}
                        keyboardType={"email-address"}
                        keyboardAppearance={"light"}
                        autoFocus={true}
                        minLength={4}
                        autoComplete={'true'}
                        placeholderTextColor={'black'}
                        placeholder={'Email Address'}
                        inputAccessoryViewID={true}
                    />

                    <TextInput style={styles.textInput}
                        textContentType={"password"}
                        keyboardType={"default"}
                        secureTextEntry={true}
                        keyboardAppearance={"light"}
                        placeholderTextColor={'black'}
                        placeholder={'New Password'}
                        inputAccessoryViewID={true}
                    />

                    <TextInput style={styles.textInput}
                        textContentType={"emailAddress"}
                        keyboardType={"email-address"}
                        keyboardAppearance={"light"}
                        secureTextEntry={true}
                        minLength={8}
                        placeholderTextColor={'black'}
                        placeholder={'Confirm New Password'}
                        inputAccessoryViewID={true}
                    />

                </View>

                <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Home') }}>
                        <Text style={styles.buttonText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </View>




            <StatusBar style="auto" />
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 22,
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    textforgottenP: {
        fontSize: 30,
        fontFamily: 'Manrope_600SemiBold',
        color: `black`,
    },
    textTypeEmail: {
        fontSize: 20,
        width: '100%',
        fontFamily: 'Manrope_500Medium',
        color: `gray`,
    },
    text2: {
        fontSize: 32,
        fontWeight: "500",
        marginTop: 25,
        marginBottom: 35,
    },
    text3: {
        fontSize: 32,
        fontWeight: "100",
        marginTop: 25,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#016e96',
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        width: '100%',
    },
    textInput: {
        backgroundColor: 'transparent',
        paddingTop: 12,
        paddingBottom: 9,
        fontFamily: 'Manrope_500Medium',
        borderBottomWidth: 1.5,
        borderBottomColor: 'gray',
        fontSize: 20,
        color: `#000`,
        width: '100%',
        marginBottom: 27,
    },
    buttonText: {
        color: `#fff`,
        fontSize: 20,
        fontFamily: 'Manrope_700Bold',
    },
});
