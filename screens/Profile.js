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


    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);
    const [isModalVisible4, setIsModalVisible4] = useState(false); 

    const handleModal1 = () => setIsModalVisible2(() => !isModalVisible2);
    const handleModal2 = () => setIsModalVisible3(() => !isModalVisible3);
    const handleModal3 = () => setIsModalVisible4(() => !isModalVisible4);

    const closeModalandAlertMessage = () => {
        alert("Profile Updated Successfully");
        handleModal1();
    }

    const closeModalandAlertMessage1 = () => {
        alert("Settings changed Successfully");
        handleModal3();
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

        <ImageBackground source={require("../assets/background.png")} resizeMode="cover" style={styles.image}>

            <View style={styles.container}>

                <View style={{ padding: 22 }}>
                    <View style={{ marginTop: 90 }}>
                        <Text style={{ marginBottom: 20, fontSize: 29, fontFamily: 'Manrope_700Bold', color: `#383838` }}>
                            Profile
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.categoryContainer} onPress={handleModal1}>
                        <View style={{ width: '11%' }}>
                            <Ionicons
                                name="create-outline"
                                size={30}
                                color="#383838"
                            />
                        </View>

                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={styles.categoryText}>
                                Edit profile
                            </Text>
                        </View>

                        <View style={{ width: '19%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color="#383838"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer} >
                        <View style={{ width: '12%' }}>
                            <Ionicons
                                name="help-circle-outline"
                                size={30}
                                color="#383838"
                            />
                        </View>

                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={styles.categoryText}>
                                Help & Support
                            </Text>
                        </View>

                       { <View style={{ width: '18%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color="#383838"
                            />
                        </View>}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer} onPress={handleModal2}>
                        <View style={{ width: '12%' }}>
                            <Ionicons
                                name="receipt-outline"
                                size={28}
                                color="#383838"
                            />
                        </View>

                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={styles.categoryText}>
                                My Reciepients
                            </Text>
                        </View>

                        <View style={{ width: '18%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color="#383838"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer} onPress={handleModal3} >
                        <View style={{ width: '12%' }}>
                            <Ionicons
                                name="settings-outline"
                                size={30}
                                color="#383838"
                            />
                        </View>

                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={styles.categoryText}>
                                Settings
                            </Text>
                        </View>

                        <View style={{ width: '18%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color="#383838"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer} onPress={() => { navigation.navigate("Login") }}>
                        <View style={{ width: '12%' }}>
                            <Ionicons
                                name="log-out-outline"
                                size={30}
                                color="#383838"
                            />
                        </View>

                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={styles.categoryText}>
                                Log out
                            </Text>
                        </View>
                        <View style={{ width: '18%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color="#383838"
                            />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Modal isVisible={isModalVisible2} style={styles.modal}>
                            <View style={styles.view3}>
                                <View style={{ width: '20%', }}>
                                    <Ionicons name="close-outline" size={40} color='#4F4E53' onPress={handleModal1} />
                                </View>
                                <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 23, fontFamily: 'Manrope_600SemiBold', margin: 0 }}>Edit Profile</Text>
                                </View>
                            </View>


                            <View>
                                <Text style={styles.textInputLabel}>First Name</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"name"}
                                    placeholder={'User First Name'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputLabel}>Last Name</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"name"}
                                    placeholder={'User Last Name'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputLabel}>Phone Number</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"number"}
                                    keyboardType="phone-pad"
                                    placeholder={'User Phone Number'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    disable={true}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputLabel}>Email Address</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"emailAddress"}
                                    keyboardType="email"
                                    placeholder={'User Email Address'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    disable={true}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View>

                            <View style={{ top: 200, width: '100%' }}>
                                <TouchableOpacity style={styles.button} onPress={closeModalandAlertMessage}>
                                    <Text style={styles.buttonText}>Save Changes</Text>
                                </TouchableOpacity>
                            </View>




                        </Modal>

                        <Modal isVisible={isModalVisible3} style={styles.modal}>
                            <View style={styles.view3}>
                                <View style={{ width: '20%', }}>
                                    <Ionicons name="close-outline" size={40} color='#4F4E53' onPress={handleModal2} />
                                </View>
                                <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 23, fontFamily: 'Manrope_600SemiBold', margin: 0 }}> My Recepients</Text>
                                </View>
                                <View style={{ width: '20%' }}>
                                    <Ionicons name="close" size={40} color='#FFF' onPress={handleModal2} />
                                </View>
                            </View>

                            <View>

                                <View>
                                    <TouchableOpacity style={[styles.categoryContainer2, styles.shadowProp]}>
                                        <View style={{ width: '11%' }}>
                                            <Ionicons
                                                name="man"
                                                size={45}
                                                color="#383838"
                                            />
                                        </View>

                                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={styles.unnecessary}>
                                                David Ayernor
                                            </Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={[styles.categoryContainer2, styles.shadowProp]}>
                                        <View style={{ width: '11%' }}>
                                            <Ionicons
                                                name="man"
                                                size={45}
                                                color="#383838"
                                            />
                                        </View>

                                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={styles.unnecessary}>
                                                Rose Baker
                                            </Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={[styles.categoryContainer2, styles.shadowProp]}>
                                        <View style={{ width: '11%' }}>
                                            <Ionicons
                                                name="woman"
                                                size={45}
                                                color="#383838"
                                            />
                                        </View>

                                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={styles.unnecessary}>
                                                Akosua Owusu
                                            </Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{  top: 225, justifyContent: 'flex-end', flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.buttonAdd}>
                                    <Ionicons name="add" size={35} color='#FFF' />
                                </TouchableOpacity>
                            </View>

                        </Modal>
                    </View>

                    <View>
                        <Modal isVisible={isModalVisible4} style={styles.modal}>
                            <View style={styles.view3}>
                                <View style={{ width: '20%', }}>
                                    <Ionicons name="close-outline" size={40} color='#4F4E53' onPress={handleModal3} />
                                </View>
                                <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 23, fontFamily: 'Manrope_600SemiBold', margin: 0 }}>Settings</Text>
                                </View>
                               


                            </View>


                            <View>
                                <Text style={styles.textInputLabel}>About</Text>
                                <Text style={styles.textInputLabel}>Group 24</Text>
                            </View>
                            {/*
                            <View>
                                <Text style={styles.textInputLabel}>Last Name</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"name"}
                                    placeholder={'User Last Name'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputLabel}>Phone Number</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"number"}
                                    keyboardType="phone-pad"
                                    placeholder={'User Phone Number'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    disable={true}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputLabel}>Settings</Text>
                                <TextInput style={styles.profileContainer}
                                    textContentType={"emailAddress"}
                                    keyboardType="email"
                                    placeholder={'User Email Address'}
                                    autoComplete={'true'}
                                    minLength={1}
                                    disable={true}
                                    placeholderTextColor={'gray'}
                                    keyboardAppearance={"light"}
                                />
                            </View> */}

                            <View style={{ top: 200, width: '100%' }}>
                                <TouchableOpacity style={styles.button} onPress={closeModalandAlertMessage1}>
                                    <Text style={styles.buttonText}>Save Changes</Text>
                                </TouchableOpacity>
                        </View> 




                        </Modal>

                        <Modal isVisible={isModalVisible3} style={styles.modal}>
                            <View style={styles.view3}>
                                <View style={{ width: '20%', }}>
                                    <Ionicons name="close-outline" size={40} color='#4F4E53' onPress={handleModal2} />
                                </View>
                                <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 23, fontFamily: 'Manrope_600SemiBold', margin: 0 }}> My Recepients</Text>
                                </View>
                                <View style={{ width: '20%' }}>
                                    <Ionicons name="close" size={40} color='#FFF' onPress={handleModal2} />
                                </View>
                            </View>

                            <View>

                                <View>
                                    <TouchableOpacity style={[styles.categoryContainer2, styles.shadowProp]}>
                                        <View style={{ width: '11%' }}>
                                            <Ionicons
                                                name="man"
                                                size={45}
                                                color="#383838"
                                            />
                                        </View>

                                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={styles.unnecessary}>
                                                David Ayernor
                                            </Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={[styles.categoryContainer2, styles.shadowProp]}>
                                        <View style={{ width: '11%' }}>
                                            <Ionicons
                                                name="man"
                                                size={45}
                                                color="#383838"
                                            />
                                        </View>

                                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={styles.unnecessary}>
                                                Rose Baker
                                            </Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={[styles.categoryContainer2, styles.shadowProp]}>
                                        <View style={{ width: '11%' }}>
                                            <Ionicons
                                                name="woman"
                                                size={45}
                                                color="#383838"
                                            />
                                        </View>

                                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={styles.unnecessary}>
                                                Akosua Owusu
                                            </Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{  top: 225, justifyContent: 'flex-end', flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.buttonAdd}>
                                    <Ionicons name="add" size={35} color='#FFF' />
                                </TouchableOpacity>
                            </View>

                        </Modal>
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
                        <AntDesign name="bars" size={28} color="black" onPress={() => { navigation.navigate("Transaction") }} />
                        <Text style={styles.iconViewText}>Transaction</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons
                            name="person-outline"
                            size={28}
                            color="#016e96"
                            onPress={() => {
                                navigation.navigate("Profile");
                            }}
                        />
                        <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 14, color: "#016e96" }}>Profile</Text>
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
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
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
    categoryContainer: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        padding: 12,
        backgroundColor: `#e8e8e8`,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryText: {
        fontFamily: 'Manrope_600SemiBold',
        fontSize: 23,
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
    profileContainer: {
        backgroundColor: "#E8E8E8",
        paddingTop: 15,
        paddingBottom: 12,
        paddingLeft: 12,
        fontFamily: 'Manrope_500Medium',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 10,
        fontSize: 18,
        color: `#000`,
        width: '100%',
        marginBottom: 10,
    },
    textInputLabel: {
        fontSize: 16,
        fontFamily: "Manrope_600SemiBold",
        marginBottom: 4,
        marginLeft: 6,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#016e96',
        padding: 5,
        borderRadius: 8,
        justifyContent: 'center',
        width: '100%',
        
    },
    buttonAdd: {
        flexDirection: 'row',
        backgroundColor: '#016e96',
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: `#fff`,
        fontSize: 20,
        fontFamily: 'Manrope_700Bold',
    },
    categoryContainer2: {
        flexDirection: 'row',
        width: '100%',
        padding: 12,
        backgroundColor: `#F9F9F9`,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 22,
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
