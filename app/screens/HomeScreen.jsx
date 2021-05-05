import React from "react";
import styled from "styled-components";

import { Text, View, SafeAreaView, ImageBackground, Image } from "react-native";
import DockBottom from "../homeScreen/DockBottom";
import NavigationTop from "../homeScreen/NavigationTop";

const StyledHomeScreen = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.backgroundColor};
    width: 100%;
    height: 100%;
    /* flex-direction: column; */
    position: relative;
`;

const HomeScreen = () => {
    return (
        <StyledHomeScreen>
            <NavigationTop />
            <DockBottom />
        </StyledHomeScreen>
    );
};

export default HomeScreen;
