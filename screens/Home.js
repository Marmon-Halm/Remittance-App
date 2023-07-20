import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBarHeight } from '../componets/shared';
import MapView, { PROVIDER_GOOGLE, Marker, getInitialState } from 'react-native-maps'
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';

//import RegularTexts from '../componets/Texts/RegularTexts';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import SmallTexts from '../componets/Texts/SmallTexts';
import BigTexts from '../componets/Texts/BigTexts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegularTexts from '../componets/Texts/RegularTexts';

// apiKey: AIzaSyA25oUM8BiNy3Iuv4QaLDTU4YzbZxmZUX4


export default function Home(params) {
  const navigation = params.navigation;

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalVisibleGH, setIsModalVisibleGH] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const handleModalGH = () => setIsModalVisibleGH(() => true)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const [visible, setVisible] = useState(true);

  function toggle() {
    setVisible((visible) => !visible);
  }



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




  let [fontsLoaded] = useFonts({

    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });



  // <View style={{height: '100%', position: 'relative'}}>

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <View style={{ paddingHorizontal: 0, height: '100%' }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            initialRegion={position}
            region={position}
            showsUserLocation={true}
          >
            {/* <Marker
             coordinate={{
               latitude: position.latitude,
               longitude: position.longitude
             }}
             tracksViewChanges={true}>
           </Marker> */}

          </MapView>

          <TouchableOpacity style={styles.menuContainer} onPress={() => { navigation.navigate("Settings") }}>
            <Feather name="menu" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.locationContainer}>
            <MaterialIcons name="my-location" size={24} color="black" />
          </TouchableOpacity>

          <BottomSheet
            snapPoints={[350, 500]}
          >
            <View style={styles.searchContainer}>
              <View style={{ alignItems: "center",  marginBottom: 15 }}>
                <Text style={{ color: "#737373", fontFamily: "Manrope_500Medium", fontSize: 12 }}>Your Location</Text>
                <RegularTexts style={{ textAlign: "center" }}>User Location</RegularTexts>
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
          </BottomSheet>


          <StatusBar style="dark" />
        </View>
      }
    </GestureHandlerRootView>




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
    paddingHorizontal: 20,
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

});


















