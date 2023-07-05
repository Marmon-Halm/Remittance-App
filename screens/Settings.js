import React, { useContext } from 'react';
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
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { UserContext } from '../contexts/UserContext';
import FilledButton from '../componets/Buttons/FilledButton';
import MainContainer from '../componets/Containers/MainContainer';



export default function Settings(params) {
    const navigation = params.navigation;

    const { setUserLoggedIn } = useContext(UserContext)

    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);
    const [isModalVisible4, setIsModalVisible4] = useState(false);

    const [loggingOut, setLoggingOut] = useState(false);


    const handleLogin = () => {



    };

    const onLogOut = () => {
        setLoggingOut(true);
        signOut(auth)
            .then(() => {
                setUserLoggedIn(false);
                console.log('sign out')
            })
            .catch((error) => {
                console.log(error.message)
            });

        // clear user credentials

        setLoggingOut(false)
    }

    const handleModal1 = () => setIsModalVisible2(() => !isModalVisible2);
    const handleModal2 = () => setIsModalVisible3(() => !isModalVisible3);
    const handleModal3 = () => setIsModalVisible4(() => !isModalVisible4);




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

    return <MainContainer>
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 35 }}>
            <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                <AntDesign name="adduser" size={40} color="#787878" />
            </View>

            <Text style={styles.profileText}>James Obeng</Text>
            <Text style={styles.profileText2}>+233 50 578 0528</Text>

        </View>

        <View >
            <TouchableOpacity style={styles.categoryContainer} onPress={() => { navigation.navigate("EditProfile") }}>
                <View style={{ width: '11%' }}>
                    <Ionicons
                        name="create-outline"
                        size={28}
                        color="#2D9B94"
                    />
                </View>

                <View style={{ width: '70%', paddingLeft: 7 }}>
                    <Text style={styles.categoryText}>
                        Edit Profile
                    </Text>
                </View>

                <View style={{ width: '19%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Feather name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryContainer} onPress={() => { navigation.navigate("Trips") }}>
                <View style={{ width: '12%' }}>
                    <MaterialIcons name="history" size={28} color="#2D9B94" />
                </View>

                <View style={{ width: '70%', paddingLeft: 7 }}>
                    <Text style={styles.categoryText}>
                        History
                    </Text>
                </View>

                <View style={{ width: '18%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Feather name="chevron-right" size={24} color="black" />

                </View>
            </TouchableOpacity>


        </View>

        <FilledButton style={{ borderColor: '#BA2F2F' }} onPress={onLogOut}>LogOut</FilledButton>

        <StatusBar style="dark" />
    </MainContainer>






}

const styles = StyleSheet.create({

    categoryContainer: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#BFBFBF',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 12,
    },
    categoryText: {
        fontFamily: 'Manrope_600SemiBold',
        fontSize: 22,
        color: '#383838',
    },
    modal: {
        paddingTop: 30,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: '#FFF',
        marginTop: 60, // This is the important style you need to set
        marginRight: 0, // This is the important style you need to set
        marginLeft: 0, // This is the important style you need to set
        marginBottom: 0, // This is the important style you need to set
        alignItems: undefined,
        justifyContent: undefined,
        borderRadius: 20,
        flexDirection: 'column',
    },
    textInputLabel: {
        fontSize: 16,
        fontFamily: "Manrope_600SemiBold",
        marginBottom: 4,
        marginLeft: 6,
    },
    profileText: {
        fontSize: 22,
        fontFamily: 'Manrope_700Bold',
        marginBottom: 5,
    },
    profileText2: {
        fontSize: 14,
        color: '#717171',
        fontFamily: 'Manrope_600SemiBold'
    },
    logout: {
        fontSize: 22,
        color: '#BA2F2F',
        fontFamily: 'Manrope_600SemiBold'
    },
    unnecessary: {
        color: "black",
        fontSize: 22,
        marginLeft: 14,
        fontFamily: 'Manrope_800ExtraBold',
        color: `#383838`
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },

});
