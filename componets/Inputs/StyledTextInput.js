import React, { useState } from 'react';
import { View } from 'react-native';
import { styled } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SmallTexts from '../Texts/SmallTexts';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from '../../screens/color';
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';




const { primary, sea, white, little, killed, grey } = color;




const InputField = styled.TextInput`
    font-size: 16px;
    color: ${killed};
    width: 80%;
    padding-left: 5px;
    padding-right: 25px;
    font-family: 'Manrope_500Medium';
`;

const InputContainer = styled.View`
    height: 55px;
    width: 100%;
    flex-direction: row;
    padding-horizontal: 10px;
    border-radius: 10px;
    background-color: "#EDEDED";
    margin-bottom: 15px;
`;

const LeftIconContainer = styled.View`
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const LeftIcon = styled.View`
    position: absolute;
    z-index: 1;
`;

const RightIconContainer = styled.View`
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const RightIcon = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;
`;




const StyledTextInput = ({ icon, label, isPhone, thisIsEmail, isPassword, valid, ...props }) => {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold
    });

    const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
    const [hidePassword, setHidePassword] = useState(true);
    const [textChanged, setTextChanged] = useState(false)

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
        <InputContainer style={{ borderWidth: 2, borderColor: valid ? "#198754" : '#EDEDED', backgroundColor: "#FAFAFA" }}>
            <LeftIconContainer>
                <LeftIcon>
                    <Feather name={icon} size={18} color="#7A7A7A" />
                </LeftIcon>
            </LeftIconContainer>
            <InputField
                {...props}
                placeholderTextColor={killed}
                style={{ borderColor: inputBackgroundColor, ...props?.style }}
                onBlur={customOnBlur}
                onFocus={customOnFocus}
                secureTextEntry={isPassword && hidePassword}
                onChange={(text) => {
                    setTextChanged(true)
                }}
            />
            {isPassword && <RightIconContainer >

                <RightIcon onPress={() => { setHidePassword(!hidePassword) }}>
                    <Feather name={hidePassword ? 'eye-off' : 'eye'} size={20} color="#7A7A7A" />
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