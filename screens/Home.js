import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ImageBackground,  } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import RNPickerSelect from 'react-native-picker-select';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';




export default function Home(params) {
  const navigation = params.navigation;



  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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



        <View style={{ padding: 25, marginTop: 40 }}>

          <Text style={{ marginTop: 50, marginBottom: 10, fontSize: 29, fontFamily: 'Manrope_800ExtraBold', color: `#383838` }}>Transfer.</Text>

          <View>
            <View style={[styles.optionsContainer, styles.shadowProp]}>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/GB.png')} />
              </View>

              <Text style={styles.unnecessary}> GBP    ⇄  GHS        0.91{"\n"}
                1 GBP     9.77GHS    0.91</Text>

            </View>

            <View style={[styles.optionsContainer, styles.shadowProp]}>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/usa.png')} />
              </View>
              <Text style={styles.unnecessary}> USD    ⇄  GHS        0.91{"\n"}
                1 USD     7.80GHS    0.91</Text>
            </View>

            <View style={[styles.optionsContainer, styles.shadowProp]}>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/france.png')} />
              </View>
              <Text style={styles.unnecessary}> EUR    ⇄  GHS        0.91{"\n"}
                   1 EUR     8.37GHS    0.91</Text>

            </View>

            <View style={[styles.optionsContainer, styles.shadowProp]}>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/nigeria.png')} />
              </View>
              <Text style={styles.unnecessary}> USD    ⇄  GHS        0.51{"\n"}
                1 NGA     0.019GHS    0.51</Text>
            </View>
          </View>



        </View>


        <View style={{ position: 'absolute', bottom: 120, paddingLeft: 25, paddingRight: 25, width: '100%' }}>
          <TouchableOpacity style={styles.button} onPress={handleModal}>
            <Text style={styles.buttonText} >Send money</Text>
          </TouchableOpacity>
          <View >
          <Modal isVisible={isModalVisible} style={styles.modal}>
          <View >
            <TouchableOpacity onPress={handleModal} style={{marginLeft: 15, marginTop: 15}}>
          <Ionicons
                    name="arrow-back-outline"
                    size={35}
                    color="#016e96" />
          </TouchableOpacity>
            </View>
            <View style={{marginTop:30}}>
            <Text style={{ marginLeft: 15, fontSize: 35, fontFamily: 'Manrope_800ExtraBold', color: `#383838` }}>Where would you like to send money?</Text>
            </View>
            <View style={[styles.optionsContainer1, styles.shadowProp]}>
              <TouchableOpacity>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/france.png')} />
              </View>
              <Text style={styles.unnecessary2}> France</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.optionsContainer2, styles.shadowProp]}>
            <TouchableOpacity>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/nigeria.png')} />
              </View>
              <Text style={styles.unnecessary2}> Nigeria</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.optionsContainer3, styles.shadowProp]}>
              <TouchableOpacity>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/ghana.png')} />
              </View>
              <Text style={styles.unnecessary2}> Ghana</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.optionsContainer4, styles.shadowProp]}>
              <TouchableOpacity>
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/GB.png')} />
              </View>
              <Text style={styles.unnecessary2}> United Kingdom</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.optionsContainer4, styles.shadowProp]}>
            <TouchableOpacity>  
              <View style={{ width: 45, heigth: 42 }}>
                <Image style={styles.flag} source={require('../assets/usa.png')} />
              </View>
              <Text style={styles.unnecessary2}> United States of America</Text>
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
              color="#016e96"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
            <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 14, color: "#016e96" }}>
              Home
            </Text>
          </View>


          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="bars" size={28} color="black" onPress={() => { navigation.navigate("Transaction") }} />
            <Text style={styles.iconViewText}>Transactions</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: `#016e96`,
    padding: 12,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    elevation: 18,

  },
  buttonText: {
    color: `#fff`,
    fontSize: 23,
    fontFamily: 'Manrope_700Bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    paddingLeft: 18,
    backgroundColor: `white`,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 20,
  },
  optionsContainer1: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    paddingLeft: 18,
    backgroundColor: `white`,
    marginBottom: 25,
    marginTop: 35,
    marginLeft: 56,
  },
  optionsContainer2: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    paddingLeft: 18,
    backgroundColor: `white`,
    marginBottom: 30,
    marginLeft: 56,
  },
  optionsContainer3: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    paddingLeft: 18,
    backgroundColor: `white`,
    marginBottom: 30,
    marginLeft: 56,
    
  },optionsContainer4: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    paddingLeft: 18,
    backgroundColor: `white`,
    marginBottom: 30,
    marginLeft: 56,
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
  flag: {

    width: '100%',
    height: 42,
    marginTop: 15,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 10
  },
  textInput: {
    backgroundColor: 'transparent',
    paddingTop: 12,
    paddingBottom: 9,
    fontFamily: 'Manrope_500Medium',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    fontSize:18,
    width: '90%',
    marginBottom: 27,
    marginLeft: 15,
  },
  textCountry: {
    fontSize: 24,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'Manrope_700Bold',
    color: `#016e96`,
  },
  unnecessary: {
    color: "black",
    fontSize: 17,
    marginTop:8,
    marginLeft: 10,
    
  },
  unnecessary2: {
    color: "black",
    fontSize: 25,
    marginTop:5,
    
  },
  modal: {
    backgroundColor: 'white',
    margin: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
    flexDirection: 'column',
  },
  
});
