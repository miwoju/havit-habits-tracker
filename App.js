import {} from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";

import styled from "styled-components";

import {
    GlobalProvider,
    useGlobalStateContext,
} from "./app/context/globalContext";

const StyledApp = styled.SafeAreaView`
    /* padding-top: ${StatusBar.currentHeight}; */
`;

export default function App() {
    const lightTheme = {
        // boxShadow: "0px 0px 6px 2px rgba(40, 40, 40, 0.2);",
        // boxLight: "0px 0px 7px 5px rgba(160, 175, 190, 0.8);",
        // background: "#EDF0F5",
        // backgroundColor: "#E4E0D5",
        backgroundColor: "#f5f5f5",
        text: "#485056",
        textSecondary: "#B5A18C",
    };
    const { isLoggedIn } = useGlobalStateContext();

    return (
        <ThemeProvider theme={lightTheme}>
            <StyledApp style={styles.container}>
                <StatusBar />
                {/* {!isLoggedIn && <WelcomeScreen />} */}
                <HomeScreen />
            </StyledApp>
        </ThemeProvider>
    );
}

// const colorPalette = "https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
