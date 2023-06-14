import React, { useState } from 'react';
import { View } from 'react-native';
import { styled } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SmallTexts from '../Texts/SmallTexts';
import { Feather } from '@expo/vector-icons';
import { color } from '../../screens/color';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';




const { primary, sea, white, little, killed, grey } = color;




const InputField = styled.TextInput`
    font-size: 18px;
    color: ${killed};
    width: 90%;
    font-family: 'Manrope_500Medium';
`;
// const InputField = styled.TextInput`
//     font-size: 18px;
//     height: 55px;
//     margin-top: 3px;
//     color: ${killed};
//     padding: 15px;
//     padding-left: 48px;
//     padding-right: 55px;
//     font-family: 'Manrope_500Medium';
//     border-radius: 10px;
//     background-color: ${grey};
// `;

const InputContainer = styled.View`
    height: 55px;
    width: 100%;
    margin-vertical: 8px;
    flex-direction: row;
    padding-right: 55px;
    border-radius: 10px;
    background-color: ${grey};
`;

const LeftIconContainer = styled.View`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const LeftIcon = styled.View`
    position: absolute;
    z-index: 1;
`;

const RightIconContainer = styled.View`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const RightIcon = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;
`;




const StyledTextInput = ({ icon, label, isPhone, isPassword, ...props }) => {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold
    });

    const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
    const [hidePassword, setHidePassword] = useState(true);

    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(little);
    };

    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(killed);
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <InputContainer >
            <LeftIconContainer>
                <LeftIcon>
                    <Feather name={icon} size={21} color="#7A7A7A" />
                </LeftIcon>
            </LeftIconContainer>
            <SmallTexts>{label}</SmallTexts>
            <InputField
                {...props}
                placeholderTextColor={killed}
                style={{ borderColor: inputBackgroundColor, ...props?.style }}
                onBlur={customOnBlur}
                onFocus={customOnFocus}
                secureTextEntry={isPassword && hidePassword}
            />
            {isPassword && <RightIconContainer >
                <RightIcon onPress={() => { setHidePassword(!hidePassword) }}>
                    <Feather name={hidePassword ? 'eye-off' : 'eye'} size={18} color="#7A7A7A" />
                </RightIcon>
            </RightIconContainer>

            }

            {isPhone && <RightIcon>
                <Feather name={'chevron-down'} size={18} color="#7A7A7A" />

            </RightIcon>}

        </InputContainer>
    )

};

export default StyledTextInput;