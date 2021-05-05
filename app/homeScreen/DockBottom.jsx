import React from "react";
import styled from "styled-components";
import { Text, SafeAreaView, ImageBackground, Image } from "react-native";

const StyledDockBottom = styled.View`
    background-color: white;
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const DockButton = styled.View`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text`
    font-size: 10px;
`;

const DockBottom = () => {
    return (
        <StyledDockBottom>
            <DockButton>
                <ButtonText>TODAY</ButtonText>
            </DockButton>
            <DockButton>
                <ButtonText>STATS</ButtonText>
            </DockButton>
            <DockButton>
                <ButtonText>MY DAY</ButtonText>
            </DockButton>
            <DockButton>
                <ButtonText>MORE</ButtonText>
            </DockButton>
        </StyledDockBottom>
    );
};

export default DockBottom;
