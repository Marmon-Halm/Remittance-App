import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
} from '@expo-google-fonts/manrope';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import profile from '../assets/profileD.png'





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
        <View style={styles.container}>


            <View style={{ paddingTop: 50, paddingBottom: 10, paddingHorizontal: 22, marginBottom: 0, width: '100%', borderBottomWidth: 0.5, borderBottomColor: "#C2C2C2" }}>
                <View style={styles.view3}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => { navigation.goBack() }} />

                    <Text style={styles.texteditProfile}>
                        Edit Profile
                    </Text>

                    <Text style={{ color: '#F8F8F8' }}>
                        sasas
                    </Text>
                </View>
            </View>

            <View style={{ padding: 22, }}>





                <View style={{ width: '100%', alignItems: 'center', marginBottom: 35 }}>
                    <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                        <Image source={profile} style={{ width: '100%', height: '100%', borderRadius: 100 / 2, }} />

                    </View>

                    <Text style={styles.profileText}>James Obeng</Text>
                    <Text style={styles.profileText2}>+233 50 578 0528</Text>

                </View>


                <View>

                    <TextInput style={styles.textInput}
                        placeholder={'Username'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        selectionColor={'#2D9B94'}
                        minLength={1}
                        placeholderTextColor={'#838282'}
                        keyboardAppearance={"light"}
                        enablesReturnKeyAutomatically={true}
                    />


                    <TextInput style={styles.textInput}
                        textContentType={"emailAddress"}
                        placeholder={'Email Address'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        selectionColor={'#2D9B94'}
                        minLength={1}
                        placeholderTextColor={'black'}
                        keyboardAppearance={"light"}
                        enablesReturnKeyAutomatically={true}
                    />



                    <TextInput style={styles.textInput}
                        textContentType="telephoneNumber"
                        keyboardType="phone-pad"
                        inputMode='numeric'
                        minLength={1}
                        label="PhoneNumber"
                        maxLength={12}
                        selectionColor={'#2D9B94'}
                        keyboardAppearance="light"
                        placeholder={'Phone Number'}
                        placeholderTextColor={'black'}
                    />



                    <TextInput style={styles.textInput}
                        textContentType="password"
                        secureTextEntry={true}
                        label="Password"
                        minLength={8}
                        selectionColor={'#2D9B94'}
                        placeholder={"Password"}
                        placeholderTextColor={'black'}
                        keyboardAppearance="light" />

                </View>


                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>

                <View style={{ marginBottom: 50 }}>



                </View>





            </View>




            <StatusBar style="dark" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    texteditProfile: {
        fontSize: 22,
        fontFamily: 'Manrope_600SemiBold',
    },
    button: {
        height: 62,
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: `#fff`,
        fontSize: 20,
        fontFamily: 'Manrope_700Bold',
    },
    profileText: {
        fontSize: 22,
        fontFamily: 'Manrope_700Bold',
        marginBottom: 5,
    },
    textInput: {
        backgroundColor: 'transparent',
        paddingTop: 12,
        paddingBottom: 9,
        fontFamily: 'Manrope_600SemiBold',
        borderBottomWidth: 1,
        borderBottomColor: '#838282',
        fontSize: 20,
        color: `#000`,
        width: '100%',
        marginBottom: 20,
    },

});


