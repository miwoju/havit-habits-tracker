import React from "react";
import styled from "styled-components";

import { Text, View, SafeAreaView, ImageBackground, Image } from "react-native";
import DockBottom from "../homeScreen/DockBottom";
import NavigationTop from "../homeScreen/NavigationTop";

import TodayScreen from "./Home/Today";
import HabitScreen from "./Home/Habits";

import { useGlobalStateContext } from "../context/globalContext";

const StyledHomeScreen = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.backgroundColor};
    width: 100%;
    height: 100%;
    /* flex-direction: column; */
    position: relative;
`;

const HomeScreen = () => {
    const { currentTab } = useGlobalStateContext();
    return (
        <StyledHomeScreen>
            {/* <NavigationTop /> */}
            <View flex={1}>
                {currentTab === "today" && <TodayScreen />}
                {currentTab === "habits" && <HabitScreen />}
            </View>
            <DockBottom />
        </StyledHomeScreen>
    );
};

export default HomeScreen;
