import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { StatusBarHeight } from '../componets/shared';
import { useFonts, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import TitleText from '../componets/Texts/TitleText';
import RegularTexts from '../componets/Texts/RegularTexts';
import StyledInput from '../componets/Inputs/StyledInput';
import BottomButton from '../componets/Buttons/BottomButton';
import { GOOGLE_API_KEY } from '../environment';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Location = (params) => {
    const navigation = params.navigation;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [phoneNumber, setPhoneNumber] = useState("");
    const [value, setValue] = useState("");


    let [fontsLoaded] = useFonts({
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    return (
        <View>
            <View style={{ height: '100%', width: windowWidth, paddingTop: StatusBarHeight, backgroundColor: "#F6F6F6", paddingHorizontal: 20 }}>
                <View style={styles.topNav}>
                    <View style={{ width: "10%" }}>
                        <AntDesign name="close" size={26} style={{ textAlign: "left" }} color="black" onPress={() => {
                            navigation.goBack()
                        }} />
                    </View>

                </View>

                <View style={styles.searchButton}>
                    <MaterialCommunityIcons name="map-marker" size={22} color="#737373" />
                    <GooglePlacesAutocomplete
                        placeholder='Pick Up Location'
                        onPress={(data, details = null) => {
                            console.log(data, details)
                        }}
                        selectProps={{
                            value,
                            onChange: setValue,
                        }}
                        returnKeyType={'search'}
                        minLength={2}
                        listViewDisplayed={true}
                        autoFocus="true"
                        query={{
                            key: {GOOGLE_API_KEY},
                            language: 'en',
                        }}
                        textInputProps={{
                            placeholderTextColor: "#737373",
                            returnKeyType: "search"
                        }}
                        styles={{

                            textInput: {
                                height: '100%',
                                color: '#737373',
                                fontSize: 15,
                                backgroundColor: '#FAFAFA',
                                fontFamily: "Manrope_500Medium",
                            },

                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                            listView: {
                                top: 45.5,
                                zIndex: 10,
                                position: 'absolute',
                                color: 'black',
                                backgroundColor: "white",
                                width: '89%',
                            },
                            separator: {
                                flex: 1,
                                backgroundColor: 'blue',
                            },
                            description: {
                                flexDirection: "row",
                                flexWrap: "wrap",
                                fontSize: 14,
                                maxWidth: '89%',
                            },
                        }}
                    />
                </View>

                <View style={styles.searchButton}>
                    <MaterialCommunityIcons name="map-marker" size={22} color="#737373" />
                    <GooglePlacesAutocomplete
                        placeholder='Drop Off'
                        onPress={(data, details = null) => {
                            console.log(data, details)
                        }}
                        returnKeyType={'search'}
                        minLength={2}
                        listViewDisplayed={true}
                        query={{
                            key: 'AIzaSyA25oUM8BiNy3Iuv4QaLDTU4YzbZxmZUX4',
                            language: 'en',
                        }}
                        textInputProps={{
                            placeholderTextColor: "#737373",
                            returnKeyType: "search"
                        }}
                        styles={{

                            textInput: {
                                height: '100%',
                                color: '#737373',
                                fontSize: 15,
                                backgroundColor: '#FAFAFA',
                                fontFamily: "Manrope_500Medium",
                            },

                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                            listView: {
                                top: 45.5,
                                zIndex: 10,
                                position: 'absolute',
                                color: 'black',
                                backgroundColor: "white",
                                width: '89%',
                            },
                            separator: {
                                flex: 1,
                                backgroundColor: 'blue',
                            },
                            description: {
                                flexDirection: "row",
                                flexWrap: "wrap",
                                fontSize: 14,
                                maxWidth: '89%',
                            },
                        }}
                    />
                </View>


                <StatusBar style="dark" />


            </View>


        </View>


    );

};

const styles = StyleSheet.create({
    topNav: {
        width: '100%',
        flexDirection: "row",
        paddingVertical: 10
    },
    searchButton: {
        height: 42,
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1.5,
        borderColor: '#737373',
        backgroundColor: "#FAFAFA",
        alignItems: "center"
    },

});

export default Location;




