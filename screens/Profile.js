import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold
} from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';

export const GithubIcon = () => (
    <Icon name='github' width={48} height={48}/>
  );


export default function Profile(params) {
    const navigation = params.navigation;
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold
    });


    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>

            <View style={{ padding: 22 }}>
                <View style={{ marginTop: 90 }}>
                    <Text style={{ marginBottom: 40, fontSize: 38, fontFamily: 'Manrope_600SemiBold', color: `#383838` }}>
                        Profile
                    </Text>
                </View>

                <View style={styles.optionsContainer}>
                    <View>
                        <Ionicons
                            name="home-outline"
                            size={28}
                            color="gray"
                            onPress={() => {
                                navigation.navigate("Home");
                            }}
                        />
                        <Text>
                            Settings
                        </Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View>
                        <Ionicons
                            name="home-outline"
                            size={28}
                            color="gray"
                            onPress={() => {
                                navigation.navigate("Home");
                            }}
                        />
                        <Text>
                            Settings
                        </Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View>
                        <Ionicons
                            name="cog-outline"
                            size={28}
                            color="gray"
                            onPress={() => {
                                navigation.navigate("Home");
                            }}
                        />
                        <Text>
                            Settings
                        </Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View>
                        <Text>
                            Settings
                        </Text>
                    </View>
                </View>





            </View>

            <View style={styles.iconView}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name="home-outline"
                        size={28}
                        color="gray"
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
                    />
                    <Text style={styles.iconViewText} >
                        Home
                    </Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name="cash-outline"
                        size={28}
                        color="gray"
                        onPress={() => {
                            navigation.navigate("ExchangeRate");
                        }}
                    />
                    <Text style={styles.iconViewText}>
                        Exchange Rate
                    </Text>
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
                    <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 16, color: "#016e96" }}>Profile</Text>
                </View>
            </View>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    iconView: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 35,
        backgroundColor: "#F8F8F8",
        justifyContent: "space-evenly",
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    iconViewText: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 16,
        color: 'gray',
    },
    optionsContainer: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: `#F0F0F0`,
        borderRadius: 15,
        marginBottom: 10,
    },
});
