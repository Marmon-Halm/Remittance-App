import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Dimensions, Image } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_700Bold, Manrope_600SemiBold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StatusBarHeight } from '../componets/shared';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import StyledTextInput from '../componets/Inputs/StyledTextInput';
import SmallTexts from '../componets/Texts/SmallTexts';
import BigTexts from '../componets/Texts/BigTexts';
import { MaterialIndicator } from 'react-native-indicators';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegularTexts from '../componets/Texts/RegularTexts';
import AppLoading from 'expo-app-loading';
import TitleText from '../componets/Texts/TitleText';
import { newGrey } from './color';
import tri from '../assets/tri.png';
import RegularButton from '../componets/Buttons/RegularButton';


// apiKey: AIzaSyA25oUM8BiNy3Iuv4QaLDTU4YzbZxmZUX4


export default function TruckSelection(params) {
  const navigation = params.navigation;

  const { width, height } = Dimensions.get("window");
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
      console.log(location)
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.005,
      });
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        <View style={{ paddingHorizontal: 0, height: '100%' }}>
          <MapView
            style={{ width: width, height: '57.5%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={position}
            region={position}
            showsUserLocation={true}
          >
          </MapView>




          <BottomSheet
            snapPoints={[500, 700]}
            overDragResistanceFactor={0}
            backgroundStyle={{
              borderRadius: 30, shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
            }}
          >
            <View style={styles.truckSelectionContainer}>

              <TouchableOpacity style={styles.carOption} >
                <View style={styles.iconView}>
                  <Image source={tri} style={{ width: '100%', height: '75%', borderRadius: 5 }} />
                </View>

                <View style={styles.textContainer}>
                  <View style={{ width: '100%', height: '45%', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={styles.waitingText}>
                      3 mins away
                    </Text>
                  </View>
                  <View style={{ width: '100%', height: '55%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={styles.truckNameText}>
                      Small Truck
                    </Text>
                    <Text style={styles.priceText}>
                      GHC 69.00
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.carOption} >
                <View style={styles.iconView}>
                  <Image source={tri} style={{ width: '100%', height: '75%', borderRadius: 5 }} />
                </View>

                <View style={styles.textContainer}>
                  <View style={{ width: '100%', height: '45%', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={styles.waitingText}>
                      3 mins away
                    </Text>
                  </View>
                  <View style={{ width: '100%', height: '55%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={styles.truckNameText}>
                      Medium Truck
                    </Text>
                    <Text style={styles.priceText}>
                      GHC 69.00
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.carOption} >
                <View style={styles.iconView}>
                  <Image source={tri} style={{ width: '100%', height: '75%', borderRadius: 5 }} />
                </View>

                <View style={styles.textContainer}>
                  <View style={{ width: '100%', height: '65%', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={styles.waitingText}>
                      3 mins away, Time of arrival and amount of load it can take
                    </Text>
                  </View>
                  <View style={{ width: '100%', height: '35%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'grey' }}>
                    <Text style={styles.truckNameText}>
                      Large Truck
                    </Text>
                    <Text style={styles.priceText}>
                      GHC 69.00
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

            </View>

          </BottomSheet>


          <View style={styles.backAndButton}>
            <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
              <AntDesign name="arrowleft" size={26} style={{ textAlign: "left" }} color="black" />
            </TouchableOpacity>
            <View style={{ width: '80%' }}>
              <RegularButton>Select Small Truck</RegularButton>
            </View>
          </View>




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
  backAndButton: {
    height: 120,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,

  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 55,
    borderWidth: 2,
    backgroundColor: "#FAFAFA",
    borderColor: "#EDEDED",
    borderRadius: 12,
  },
  truckSelectionContainer: {
    height: '52%',
    paddingHorizontal: 12,
  },
  carOption: {
    height: 90,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#F76A03',
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  iconView: {
    width: '25%',
    height: '100%',
    borderRadius: 15,
  },
  textContainer: {
    width: '72%',
    height: '100%',
    flexDirection: 'column',
  },
  waitingText: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 18,
    color: '#383838',
  },
  truckNameText: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 20,
    color: '#383838',
  },
  priceText: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 18,
    color: '#383838',
  },

});













{/* <View style={styles.rideSearcher}>
  <Text style={{ fontSize: 20, fontFamily: 'Manrope_600SemiBold' }}>Looking for a ride</Text>
  <View>
    <MaterialIndicator color='black' size={20} trackWidth={30 / 10} />
  </View>
</View> */}








