import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

export default function Home(params) {
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
                <View style={{marginTop:30}}>
                  <Text>Welcome</Text>
                </View>
                <View style={{ marginTop: 90 }}>
                    <Text style={{ marginBottom: 40, fontSize: 34, fontFamily: 'Manrope_600SemiBold', color: `#383838` }}>
                        Transactions
                    </Text>
                </View>

                <View style={styles.optionsContainer}>
                    <View>
                      
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View>
                       
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View>
                       
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View>
                       
                    </View>
                </View>
            </View>

      <View style={styles.iconView}>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons
            name="home-outline"
            size={28}
            color="#016e96"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
          <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 16, color: "#016e96"}}>
            Home
          </Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Octicons name="history" size={28} color="gray" onPress={() => {navigation.navigate("Transaction");}} />
          <Text style={styles.iconViewText}>Transaction</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
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
  optionsContainer: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: `#E8E8E8`,
    borderRadius: 15,
    marginBottom: 15,
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
