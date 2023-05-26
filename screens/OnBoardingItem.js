import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading';
import color from './color';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, } from '@expo-google-fonts/manrope';
import React from 'react';
import slides from './slides';

export default OnBoardingItem = ({ item }) => {
    const { width, height } = useWindowDimensions();

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    const ref = React.useRef(null);
    const Footer = () => {

        
        
        return <View style={{ height: height * 0.15, justifyContent: "space-between", paddingHorizontal: 20, }}>
            {/* indicator start */}
            <View style={{ flexDirection: "row", justifyContent: "center" }}>

                {slides.map((_, index) => (
                    <View key={index} style={[styles.indicator, currentSlideIndex == index && {
                        backgroundColor: color.little,
                        width: 25,
                    }]} />
                ))}

            </View>
            {/* indicator ends */}

            <View style={{ marginBottom: 20, }}>


                {
                    currentSlideIndex == slides.length - 1 ? (<View style={{ height: 55, }}>
                        <TouchableOpacity style={[styles.btnGT]} onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 20, color: color.white }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>) : (
                        <View style={{ flexDirection: "row" }}>
                            {/* skip btn */}
                            <TouchableOpacity style={[styles.btnSkip, { backgroundColor: "transparent", borderWidth: 1, }]}
                                onPress={skip}>
                                <Text style={{ fontFamily: 'Manrope_700Bold', fontSize: 17, color: color.killed }}>SKIP</Text>
                            </TouchableOpacity>

                            {/* space between */}
                            <View style={{ width: 15 }} />
                            {/* next btn */}
                            <TouchableOpacity style={[styles.btnNext]} onPress={goNextSlide}>
                                <Text style={styles.nextText}>NEXT</Text>
                            </TouchableOpacity>
                        </View>

                    )
                }
               
            </View>
        </View>
    }


    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    // next btn
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex)
        }
    };

    // skip btn
    const skip = () => {

        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex)
    }

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
    });


    if (!fontsLoaded) {
        return <AppLoading />;
    }

  return (

    <View style={[styles.container, { width }]}>


      <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain'}]}/>
        <View style={{ flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        </View>

        <Footer />


        

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    title: {
        fontSize:  30,
        marginBottom: 10,
        color: '#2D9B94',
        textAlign: 'center',
        fontFamily: 'Manrope_700Bold',
    },
    description: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: 64,
        fontFamily: 'Manrope_600SemiBold',
    },
    indicator: {
        height: 4,
        width: 10,
        backgroundColor: color.grey,
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btnSkip: {
        flex: 1,
        backgroundColor: `#016e96`,
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center"
    },
    btnNext: {
        flex: 1,
        backgroundColor: `#016e96`,
        padding: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center"
    },
    btnGT: {
        flex: 1,
        backgroundColor: `#016e96`,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: "center"
    },
    nextText: {
        fontFamily: 'Manrope_700Bold', 
        fontSize: 17, 
        color: 'white',
    },

});