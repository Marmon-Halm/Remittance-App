import React from 'react';
import { styled } from 'styled-components/native';
import { color } from '../../screens/color';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';

const { smallTextColor } = color;


const StyledText = styled.Text`
    font-size: 14px;
    color: ${smallTextColor};
    text-align: left;
    font-family: 'Manrope_500Medium';    
`;


const SmallTexts = (props) => {


    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold
      });
    
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    return  <StyledText {...props}>{ props.children }</StyledText>

};

export default SmallTexts;