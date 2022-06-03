import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
} from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import Modal from "react-native-modal";
import AppLoading from 'expo-app-loading';




export default function Profile(params) {
    const navigation = params.navigation;

    
    const closeModalandAlertMessage1 = () => {
        alert("Settings changed Successfully");
        ;
    }


    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
        <View style={{backgroundColor:'white', height: '100%',}}>
            <View>
            <Ionicons
                  name="close-outline"
                  style={{marginTop: 30,}}
                  size={45}
                  onPress={() => { navigation.navigate("Home") }}
                  color="#016e96"
                   />
                  
            </View>
        <View >
            <Text  style={{ marginTop: 10, marginBottom: 10, marginLeft: 15, fontSize: 22, fontFamily: 'Manrope_800ExtraBold', color: `#383838` }}>How much do you want to send?</Text>
        </View>
        <View>
                <Text style={styles.textInputLabel}>Amount</Text>
                <TextInput style={styles.profileContainer}
                keyboardType='numeric'
                maxLength={999999} //setting limit of input.
                placeholder={'0.00'}
                autoComplete={'off'}
                placeholderTextColor={'gray'}
                keyboardAppearance={"light"}
                />
        <Text  style={{ marginTop: 20, marginBottom: 10, marginLeft: 15, fontSize: 22, fontFamily: 'Manrope_800ExtraBold', color: `#383838` }}>Who do you want to send to?</Text>
        <Text style={styles.textInputLabel}>Recepient's name</Text>
                <TextInput style={styles.profileContainer1}
                keyboardType='default'
                maxLength={999999} //setting limit of input.
                placeholder={'Type in the name of the Recipient'}
                autoComplete={'off'}
                placeholderTextColor={'gray'}
                keyboardAppearance={"light"}
                />
                <Text style={styles.textInputLabel}>Recepient's number</Text>
                <TextInput style={styles.profileContainer2}
                keyboardType='numeric'
                maxLength={999999} //setting limit of input.
                placeholder={'Type in the number of the Recepient'}
                autoComplete={'off'}
                placeholderTextColor={'gray'}
                keyboardAppearance={"light"}
                />
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Transaction") }}>
                                    <Text style={styles.buttonText}>Send</Text>
                                </TouchableOpacity>
            
         </View>
         </View>
        </>

    );
}

const styles = StyleSheet.create({
    textInputLabel: {
        fontSize: 20,
        marginTop: 25,
        fontFamily: "Manrope_600SemiBold",
        marginBottom: 4,
        marginLeft: 20,
    },

    profileContainer: {
        backgroundColor: "#E8E8E8",
        paddingTop: 15,
        marginLeft: 20,
        paddingBottom: 12,
        paddingLeft: 12,
        fontFamily: 'Manrope_500Medium',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 10,
        fontSize: 18,
        color: `#000`,
        width: '50%',
        marginBottom: 10,
    },

    profileContainer1: {
        backgroundColor: "#E8E8E8",
        paddingTop: 15,
        marginLeft: 20,
        paddingBottom: 12,
        paddingLeft: 12,
        fontFamily: 'Manrope_500Medium',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 10,
        fontSize: 18,
        color: `#000`,
        width: '90%',
        marginBottom: 10,
    },
    profileContainer2: {
        backgroundColor: "#E8E8E8",
        paddingTop: 15,
        marginLeft: 20,
        paddingBottom: 12,
        paddingLeft: 12,
        fontFamily: 'Manrope_500Medium',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 10,
        fontSize: 18,
        color: `#000`,
        width: '90%',
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#016e96',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
        height: '9%',
        marginTop: 15,
    },
    buttonText: {
        color: `#fff`,
        fontSize: 20,
        fontFamily: 'Manrope_700Bold',
    },
});


