import React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";

const StyledHeaderButtons = styled.TouchableOpacity`
    position: absolute;
    padding: 10px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const HeaderButtons = ({ onPress, title }) => {
    return (
        <StyledHeaderButtons style={{ right: 10 }} onPress={onPress}>
            <Text style={{ fontSize: 16 }}>{title}</Text>
        </StyledHeaderButtons>
    );
};

export default HeaderButtons;
