import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import {Image} from 'react-native' ; 
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


<View style={{ padding: 25, marginTop: 60 }}>
                <View style={{marginTop:50}}>
                  <Text style={{ marginBottom: 10, fontSize: 34, fontFamily: 'Manrope_600SemiBold', color: `#383838`, fontWeight: "bold" }}>Transfer. </Text>
                </View>
                <View>
                <View style={styles.optionsContainer}></View>
                <View style={styles.optionsContainer}></View>
                </View>
               
              
</View>
            <View style={{marginTop: 20}}>
                
                </View>
                <View style={{alignItems: 'center', paddingBottom: 400,backgroundColor: "#006E90", borderTopRightRadius: 255}}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Home") }}>
                    <Text style={styles.buttonText}>Send Money</Text>
                </TouchableOpacity>
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
        <AntDesign name="bars" size={28} color="black" />
          <Text style={styles.iconViewText}>Transaction</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
    marginLeft: 35,
    marginRight: 35,
    marginTop: 240,
    flexDirection: 'row',
    backgroundColor: `#32C5FF`,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    elevation: 18,
    
  },
  buttonText: {
    color: `#fff`,
    fontSize: 25,
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
    paddingBottom: 14,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 17,
    borderTopLeftRadius: 17,
  },
  iconViewText: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 12,
    color: 'gray',
  },
});
