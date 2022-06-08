import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ImageBackground } from 'react-native';
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
import AppLoading from 'expo-app-loading';


export default function Transaction(params) {
    const navigation = params.navigation;
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
        <ImageBackground source={require("../assets/background.png")} resizeMode="cover" style={styles.image}>

            <View style={styles.container}>



                <View style={{ padding: 25, marginTop: 35 }}>

                    <Text style={{ marginTop: 50, marginBottom: 5, fontSize: 29, fontFamily: 'Manrope_800ExtraBold', color: `#383838` }}>Transactions</Text>



                </View>
                <View>
                    <Text style={styles.day}>Today</Text>
                </View>
                <View>
                    <View style={[styles.optionsContainer, styles.shadowProp]}>
                        <View style={{ width: 50, heigth: 52, paddingTop: 20 }}>
                            <Ionicons name="arrow-up-circle" size={50} color="green" />
                        </View>

                        <Text style={styles.unnecessary}> 5000GBP {"\n"}
                            <Text style={styles.lowtext}>   Today 12 : 00 pm</Text>
                        </Text>
                        <Text style={styles.success}>Success</Text>


                    </View>

                    <View>
                        <View style={[styles.optionsContainer, styles.shadowProp]}>
                            <View style={{ width: 50, heigth: 52, paddingTop: 20 }}>
                                <Ionicons name="arrow-up-circle" size={50} color="green" />
                            </View>

                            <Text style={styles.unnecessary}> 5000GBP {"\n"}
                                <Text style={styles.lowtext}>   Today 12 : 00 pm</Text>
                            </Text>
                            <Text style={styles.success}>Success</Text>


                        </View>
                    </View>
                </View>


                <View style={styles.iconView}>


                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Ionicons
                            name="home-outline"
                            size={28}
                            color="black"
                            onPress={() => {
                                navigation.navigate("Home");
                            }}
                        />
                        <Text style={styles.iconViewText}>
                            Home
                        </Text>
                    </View>


                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="bars" size={28} color="#016e96" onPress={() => { navigation.navigate("Transaction") }} />
                        <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 14, color: "#016e96" }}>Transactions</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons
                            name="person-outline"
                            size={28}
                            color="black"
                            onPress={() => {
                                navigation.navigate("Profile");
                            }}
                        />
                        <Text style={styles.iconViewText}>Profile</Text>
                    </View>
                </View>


                <StatusBar style="dark" />


            </View>
        </ImageBackground>
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
        justifyContent: 'flex-start',
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
    iconView: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 24,
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 17,
        borderTopLeftRadius: 17,
    },
    iconViewText: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 14,
        color: 'black',
    },
    optionsContainer: {
        flexDirection: 'row',
        height: 100,
        width: '87%',
        paddingLeft: 20,
        backgroundColor: `white`,
        borderRadius: 15,
        marginBottom: 15,
        marginLeft: 25,
        elevation: 20,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    flag: {
        width: '100%',
        height: 42,
        marginTop: 15,
        borderWidth: 0.2,
        borderColor: 'gray',
        borderRadius: 10
    },
    unnecessary: {
        color: "black",
        fontSize: 30,
        marginTop: 15,
        marginLeft: 15
    },
    lowtext: {
        color: "blue",
        fontSize: 12,
        marginTop: 50,
        paddingLeft: 5
    },
    success: {
        color: "blue",
        fontSize: 12,
        marginTop: 37,
        paddingLeft: 30
    },
    day: {
        color: "grey",
        fontSize: 12,
        paddingLeft: 30,
        paddingBottom: 10
    }
});
