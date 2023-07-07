import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ImageBackground } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE, Marker, getInitialState } from 'react-native-maps'
import * as Location from 'expo-location';

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
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      console.log("Pin: ", pin)
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
    <SafeAreaView>
      <View style={{ paddingHorizontal: 0, height: '100%', marginTop: StatusBar.currentHeight }}>
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

        <View style={{ width: 40, height: 40, backgroundColor: 'white', position: 'absolute', top: 20, left: 20, borderRadius: 50 / 2, alignItems: "center", justifyContent: "center", borderWidth: 0.5, borderColor: "grey" }}>
          <Feather name="menu" size={20} color="#000" />
        </View>
        <View style={{ width: 40, height: 40, backgroundColor: 'white', position: 'absolute', top: 20, right: 20, borderRadius: 50 / 2, alignItems: "center", justifyContent: "center", borderWidth: 0.5, borderColor: "grey" }}>
        <MaterialIcons name="my-location" size={24} color="black" />
        </View>
        <View style={{ width: "100%", height: "45%", backgroundColor: 'white', position: 'absolute', bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>

        <StatusBar style="dark" />
      </View>
    </SafeAreaView>

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
