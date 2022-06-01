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
import { Octicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';


export default function ExchangeRate(params) {
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

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20 }}>



                <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 30, marginBottom: 20 }}> EXCHANGE RATE PAGE </Text>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Home") }}>
                    <Text style={styles.buttonText}>PROCEED TO HOME</Text>
                </TouchableOpacity>
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
                        color="#016e96"
                        onPress={() => {
                            navigation.navigate("ExchangeRate");
                        }}
                    />
                    <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 12, color: "#016e96" }}>
                        Exchange Rate
                    </Text>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Octicons name="history" size={28} color="gray" onPress={() => {navigation.navigate("Transaction");}} />
          <Text style={styles.iconViewText}>Transaction</Text>
        </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name="person-outline"
                        size={28}
                        color="gray"
                        onPress={() => {
                            navigation.navigate("Profile");
                        }}
                    />
                    <Text style={styles.iconViewText}>Profile</Text>
                </View>
            </View>


            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 12,
        color: 'gray',
      },
});
