import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";

import styled from "styled-components";

import {
    GlobalProvider,
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "./app/context/globalContext";
import { DataProvider } from "./app/context/dataContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCoffee,
    faDumbbell,
    faTooth,
    faRunning,
    faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import AddHabits from "./app/screens/AddHabits";
library.add(faCoffee, faDumbbell, faTooth, faRunning, faBookOpen);

const StyledApp = styled.SafeAreaView`
    /* padding-top: ${StatusBar.currentHeight}; */
`;

function App() {
    // const colors =
    //     "https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc";

    const lightTheme = {
        backgroundColor: "#f5f5f5",
        inputBackground: "#f4f5f7",
        // backgroundColor: "#e9e9e9",
        text: "#485056",
        textSecondary: "#B5A18C",
    };
    const { isLoggedIn, currentScreen, isModal } = useGlobalStateContext();
    const globalDispatch = useGlobalDispatchContext();

    return (
        <ThemeProvider theme={lightTheme}>
            <StatusBar />
            <StyledApp style={styles.container}>
                <HomeScreen />
                {isModal === "add_habits" && <AddHabits />}
            </StyledApp>
        </ThemeProvider>
    );
}

export default function Root() {
    return (
        <GlobalProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </GlobalProvider>
    );
}

// const colorPalette = "https://coolors.co/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 28,
    },
});
