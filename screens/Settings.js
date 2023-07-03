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



export default function Settings(params) {
    const navigation = params.navigation;

    const {setUserLoggedIn } = useContext(UserContext)

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

    return (



        <View style={styles.container}>


            <View style={{ paddingTop: 50, paddingBottom: 10, paddingHorizontal: 22, marginBottom: 0, width: '100%', borderBottomWidth: 0.5, borderBottomColor: "#C2C2C2" }}>
                <View style={styles.view3}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => { navigation.goBack() }} />

                    <Text style={styles.textSettings}>
                        Settings
                    </Text>

                    <Text style={{ color: '#F8F8F8' }}>
                        sasas
                    </Text>
                </View>
            </View>

            <View style={{ padding: 22, }}>





                <View style={{ width: '100%', alignItems: 'center', marginBottom: 35 }}>
                    <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                        <AntDesign name="adduser" size={40} color="#787878" />
                    </View>

                    <Text style={styles.profileText}>James Obeng</Text>
                    <Text style={styles.profileText2}>+233 50 578 0528</Text>

                </View>

                <View style={{ marginBottom: 50 }}>
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

        
               <FilledButton style={{borderColor: '#BA2F2F', alignSelf: 'baseline'}}>LogOut</FilledButton>


                {/* onPress={onLogOut} */}


                {/* <View>
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
                                    keyboardType="email-address"
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

                            <View style={{ top: 225, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.buttonAdd}>
                                    <Ionicons name="add" size={35} color='#FFF' />
                                </TouchableOpacity>
                            </View>

                        </Modal>
                    </View> */}

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

                        {/* <View style={{ top: 200, width: '100%' }}>
                                <TouchableOpacity style={styles.button} onPress={closeModalandAlertMessage1}>
                                    <Text style={styles.buttonText}>Save Changes</Text>
                                </TouchableOpacity>
                            </View> */}




                    </Modal>

                    {/* <Modal isVisible={isModalVisible3} style={styles.modal}>
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

                            <View style={{ top: 225, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.buttonAdd}>
                                    <Ionicons name="add" size={35} color='#FFF' />
                                </TouchableOpacity>
                            </View>

                        </Modal> */}
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
        padding: 0,
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
    textSettings: {
        fontSize: 22,
        fontFamily: 'Manrope_600SemiBold',
    },
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
