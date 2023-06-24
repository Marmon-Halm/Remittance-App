import React from 'react';
import { styled } from 'styled-components/native';
import { StatusBarHeight } from '../shared';
import { color } from '../../screens/color';
const { white } = color;



const StyledView = styled.View`
    flex: 1;
    paddingHorizontal: 22px;
    padding-top: ${StatusBarHeight + 15}px;
    background-color: ${white};
`;


const MainContainer = (props) => {
    return   <StyledView {...props}>{ props.children }</StyledView>
};

export default MainContainer;