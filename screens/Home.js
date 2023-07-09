import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, Entypo } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { StatusBarHeight } from '../componets/shared';
import MapView, { PROVIDER_GOOGLE, Marker, getInitialState } from 'react-native-maps'
import * as Location from 'expo-location';
import RegularTexts from '../componets/Texts/RegularTexts';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import SmallTexts from '../componets/Texts/SmallTexts';
import BigTexts from '../componets/Texts/BigTexts';

// apiKey: AIzaSyA25oUM8BiNy3Iuv4QaLDTU4YzbZxmZUX4


export default function Home(params) {
  const navigation = params.navigation;

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalVisibleGH, setIsModalVisibleGH] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const handleModalGH = () => setIsModalVisibleGH(() => true)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin, setPin] = useState({
    latitude: 5.614818,
    longitude: -0.205874
  });

  // useEffect(() => {
  //   (async () => {

  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }


  const [liveLatitude, setLiveLatitude] = useState(null);
  const [liveLongitude, setLiveLongitude] = useState(null);

  const permissionAlert = () => {
    Alert.alert(
      'You did not allow location permissions',
      'Please go to settings and allow location permissions for full functionality',
      [
      ],
      {
        cancelable: true
      }
    );
  }

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      // console.log("Pin: ", pin)
    })();
  }, []);



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

  // <View style={{height: '100%', position: 'relative'}}>

  return (

    <View style={{ paddingHorizontal: 0, height: '100%' }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 5.710106756927991,
          longitude: -0.15921827899221827,
          latitudeDelta: 0.0059,
          longitudeDelta: 0.0059,
        }}
        showsUserLocation={true}>


      </MapView>

      <TouchableOpacity style={styles.menuContainer} onPress={() => {navigation.navigate("Settings")}}>
        <Feather name="menu" size={22} color="#000" />
      </TouchableOpacity>
      <View style={styles.locationContainer}>
        <TouchableOpacity>
          <MaterialIcons name="my-location" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={{ width: "18%", height: "1.2%", backgroundColor: "#C9C9C9", borderRadius: 4, alignSelf: "center" }}></View>
        <View style={{ alignItems: "center", marginTop: 15, marginBottom: 15 }}>
          <Text style={{ color: "#737373", fontFamily: "Manrope_500Medium", fontSize: 12 }}>Your Location</Text>
          <RegularTexts style={{textAlign: "center"}}>User Location</RegularTexts>
        </View>
        <View >
          <StyledTextInput
            icon="search"
            placeholder="Where to ?"

          />
        </View>

        <View style={{ marginVertical: 25, flex: 1, flexDirection: 'row', justifyContent: "space-between", width: 420 }} >
          <View style={styles.addressTabs}>
            <Ionicons name="location-outline" size={42} color="#C9C9C9" />
            <Text style={{ fontSize: 18, fontFamily: "Manrope_500Medium" }}>Home</Text>
          </View>

          <View style={styles.addressTabs}>
            <Ionicons name="location-outline" size={42} color="#C9C9C9" />
            <Text style={{ fontSize: 18, fontFamily: "Manrope_500Medium" }}>Work</Text>
          </View>

          <View style={styles.addressTabs}>
            <Ionicons name="location-outline" size={42} color="#C9C9C9" />
            <Text style={{ fontSize: 18, fontFamily: "Manrope_500Medium" }}>Address</Text>
          </View>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>

  )




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
  menuContainer: {
    width: Platform.OS === 'ios' ? 40 : 0,
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: 'white',
    position: 'absolute',
    top: StatusBarHeight,
    left: 20,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "grey"
  },
  locationContainer: {
    width: Platform.OS === 'ios' ? 40 : 0,
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: 'white',
    position: 'absolute',
    top: StatusBarHeight,
    right: 20,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "grey"
  },
  searchContainer: {
    width: "100%",
    height: "45%",
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: "grey",
    paddingTop: 7,
    paddingHorizontal: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10
  },
  addressTabs: {
    justifyContent: "center",
    alignItems: "center",
    height: 104,
    width: 127,
    borderWidth: 1.5,
    backgroundColor: "#FAFAFA",
    borderColor: "#EDEDED",
    borderRadius: 10,


  },
  modal: {
    paddingTop: 30,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: '#F8F8F8',
    marginTop: 60, // This is the important style you need to set
    marginRight: 0, // This is the important style you need to set
    marginLeft: 0, // This is the important style you need to set
    marginBottom: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
    borderRadius: 22,
    flexDirection: 'column',
  },

});
