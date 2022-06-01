import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
} from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

export const GithubIcon = () => (
    <Icon name='github' width={48} height={48} />
);


export default function Profile(params) {
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

                <View style={{ padding: 22 }}>
                    <View style={{ marginTop: 90 }}>
                        <Text style={{ marginBottom: 20, fontSize: 29, fontFamily: 'Manrope_700Bold', color: `#383838` }}>
                            Profile
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.categoryContainer} onPress={() => { navigation.navigate("Home")}}>
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

                    <TouchableOpacity style={styles.categoryContainer}  onPress={() => { navigation.navigate("Home")}}>
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

                        <View style={{ width: '18%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color="#383838"                               
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer} onPress={() => { navigation.navigate("Home")}}>
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

                    <TouchableOpacity style={styles.categoryContainer} onPress={() => { navigation.navigate("Home")}}>
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

                    <TouchableOpacity style={styles.categoryContainer}  onPress={() => { navigation.navigate("Home")}}>
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

});
