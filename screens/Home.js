import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ImageBackground, } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MainContainer from '../componets/Containers/MainContainer';
import MapContainer from '../componets/Containers/MapContainer';



// apiKey: AIzaSyA25oUM8BiNy3Iuv4QaLDTU4YzbZxmZUX4


export default function Home(params) {
  const navigation = params.navigation;

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalVisibleGH, setIsModalVisibleGH] = React.useState(false);


  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const handleModalGH = () => setIsModalVisibleGH(() => true)


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




  return <MapContainer>
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
      showsUserLocation={true} />

    <StatusBar style="dark" />

  </MapContainer>
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
