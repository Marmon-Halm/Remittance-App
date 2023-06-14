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
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function Trips(params) {
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
        <View style={styles.container}>
            <View style={{ paddingTop: 50, paddingBottom: 10, paddingHorizontal: 22, marginBottom: 0, width: '100%', borderBottomWidth: 0.5, borderBottomColor: "#C2C2C2" }}>

                <View style={styles.view3}>


                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => {
                        navigation.navigate("Settings")
                    }} />


                    <Text style={styles.textHistory}>
                        History
                    </Text>

                    <Text style={{ color: '#F8F8F8' }}>
                        sasas
                    </Text>

                </View>

            </View>

            <View style={{width: "100%", height: 250, marginTop: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/nodata.png')} style={[styles.image ]} />

                <Text style={styles.text1}> No Completed Trips</Text>

            </View>

            {/* <View style={{ paddingHorizontal: 18 }}>

                <View>
                    <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 18, marginTop: 30, marginBottom: 15 }}> Jan 2024</Text>


                    <View style={styles.tabContainer}>

                        <View style={{ width: '15%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <View style={{ width: 40, height: 40, borderRadius: 150 / 2, backgroundColor: '#E9E9E9', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="car" size={22} color="black" />
                            </View>

                        </View>

                        <View style={{ width: '65%', paddingHorizontal: 5 }}>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 17, marginBottom: 3 }}>Legon E Rd, Accra</Text>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 13, color: '#5F5959' }}>13 Jan, 1:34</Text>
                        </View>

                        <View style={styles.tab}>
                            <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 18 }}>₵56.00</Text>
                        </View>

                    </View>
                    <View style={styles.tabContainer}>

                        <View style={{ width: '15%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ width: 40, height: 40, borderRadius: 150 / 2, backgroundColor: '#E9E9E9', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="car" size={22} color="black" />
                            </View>

                        </View>

                        <View style={{ width: '65%', paddingHorizontal: 5 }}>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 17, marginBottom: 3 }}>127b Spintex Rd, Accra</Text>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 13, color: '#5F5959' }}>5 Jan, 09:12</Text>
                        </View>

                        <View style={styles.tab}>
                            <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 18 }}>₵21.00</Text>
                        </View>

                    </View>
                </View>




                <View>
                    <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 18, marginTop: 30, marginBottom: 15 }}> Dec 2023</Text>


                    <View style={styles.tabContainer}>

                        <View style={{ width: '15%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <View style={{ width: 40, height: 40, borderRadius: 150 / 2, backgroundColor: '#E9E9E9', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="car" size={22} color="black" />
                            </View>

                        </View>

                        <View style={{ width: '65%', paddingHorizontal: 5 }}>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 17, marginBottom: 3 }}>Legon E Rd, Accra</Text>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 13, color: '#5F5959' }}>13 Jan, 1:34</Text>
                        </View>

                        <View style={styles.tab}>
                            <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 18 }}>₵56.00</Text>
                        </View>

                    </View>
                    <View style={styles.tabContainer}>

                        <View style={{ width: '15%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ width: 40, height: 40, borderRadius: 150 / 2, backgroundColor: '#E9E9E9', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                <Feather name="x" size={24} color="#ff0000" />
                            </View>

                        </View>

                        <View style={{ width: '65%', paddingHorizontal: 5 }}>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 17, marginBottom: 3 }}>Hospital Rd, Tema</Text>
                            <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 13, color: '#5F5959' }}>22 Dec, 21:02</Text>
                        </View>

                        <View style={styles.tab}>
                            <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 18 }}>₵80.00</Text>
                        </View>

                    </View>
                </View>

            </View> */}





            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: "100%",
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    image: {
        justifyContent: "center",
        width: "100%",
        height: "80%",
        resizeMode: 'contain'
    },
    tab: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tabContainer: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#BCBCBC',
        paddingVertical: 5,
        marginTop: 5
    },
    textHistory: {
        fontSize: 22,
        fontFamily: 'Manrope_600SemiBold',
    },
    text1: {
        justifyContent: "center",
        fontSize: 20,
        color: 'black',
        fontFamily: 'Manrope_600SemiBold',
    },

});
