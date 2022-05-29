import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import color from './color';
import AppLoading from 'expo-app-loading';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, } from '@expo-google-fonts/manrope';
import {  Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';




const { width, height } = Dimensions.get('window');


// slides
const slides = [
    {
        id: '1',
        image: require('../assets/ima3.png'),
        title: 'Remer',
        subtitle: 'Safe and Secure International Money Transfer',
    },
    {
        id: '2',
        image: require('../assets/ima4.png'),
        title: 'Send money globally',
        subtitle: 'Send money to anyone anywhere',
    },
    {
        id: '3',
        image: require('../assets/ima5.png'),
        title: 'Stay worry-free',
        subtitle: 'The safety of your money and information is assured',
    },
    {
        id: '4',
        image: require('../assets/ima6.png'),
        title: 'Always be in CONTROL',
        subtitle: "Choose your send & receive method and track your transfer at any time",
    },
];

const Slide = ({ item }) => {
    return <View style={{ alignItems: "center" }}>
        <Image source={item.image} style={{ height: "75%", width, resizeMode: "contain" }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
};

function OnBoarding({ navigation }) {


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
                        <TouchableOpacity style={[styles.btnGT]} onPress={() => { navigation.navigate('Home') }}>
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
        Montserrat_400Regular,
        Manrope_500Medium,
        Montserrat_500Medium,
        Manrope_600SemiBold,
        Montserrat_600SemiBold,
        Manrope_700Bold,
        Montserrat_700Bold,
    });


    if (!fontsLoaded) {
        return <AppLoading />;
    }

   
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
              <StatusBar style="auto" />
            <FlatList data={slides} contentContainerStyle={{ height: height * 0.8 }}
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />} />

            <Footer />
        </SafeAreaView>
    );
}


// stylesheet

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginTop: -50,
        textAlign: "center",
        fontFamily: 'Manrope_600SemiBold',
    },
    subtitle: {
        fontSize: 15,
        marginTop: 20,
        maxWidth: "80%",
        textAlign: "center",
        lineHeight: 25,
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
})

export default OnBoarding;