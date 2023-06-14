import React from 'react';
import { styled } from 'styled-components/native';



const StyledView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-vertical: 15px;
`;


const RowContainer = (props) => {
    return   <StyledView {...props}>{ props.children }</StyledView>
};

export default RowContainer;