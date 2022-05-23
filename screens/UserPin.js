import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold
} from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';


export default function UserPin(params) {
    const navigation = params.navigation;
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold
    });


    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <View style={{ paddingTop: 30, marginBottom: 18 }}>
                    <View>
                        <View style={styles.view3}>

                            <Ionicons name="person-outline" size={32} color='#000' onPress={() => {
                                navigation.navigate("Login")
                            }} />
                        </View>
                    </View>
                </View>


                <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 30, marginBottom: 20 }}> USER PIN PAGE </Text>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Home") }}>
                    <Text style={styles.buttonText}>PROCEED TO HOME</Text>
                </TouchableOpacity>
            </View>


            <StatusBar style="auto" />
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
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 30,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: `#02c38e`,
        padding: 15,
        borderRadius: 8,
        justifyContent: 'center',
        width: 300,
    },
    buttonText: {
        color: `#fff`,
        fontSize: 20,
        fontFamily: 'Manrope_500Medium',
    },
});
