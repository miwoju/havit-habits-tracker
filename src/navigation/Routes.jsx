import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeTabs from "./HomeTabs";
import AddHabits from "../screens/Modal/AddHabits";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = ({ children }) => {
    return (
        <>
            <HomeTabs />
            {/* <MainStack.Navigator
                            screenOptions={
                                {
                                    // headerStatusBarHeight: StatusBar.currentHeight,
                                }
                            }
                            // initialRouteName="Today"
                        >
                            <MainStack.Screen
                                name="AddHabits"
                                options={{ header: () => "New Habits" }}
                                component={AddHabits}
                            />
                        </MainStack.Navigator> */}
        </>
    );
};

const MyTheme = {
    // ...DefaultTheme,
    // colors: {
    //     ...DefaultTheme.colors,
    //     primary: "rgb(255, 45, 85)",
    // },
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        // primary: "rgb(255, 45, 85)",
        background: "#FCF3E6",
        // background: "#F8DAC2",
        // card: "rgb(255, 255, 255)",
        card: "#fff",
        // text: "rgb(28, 28, 30)",
        // border: "rgb(199, 199, 204)",
        // notification: "rgb(255, 69, 58)",
    },
};

function RootStackScreen() {
    return (
        <NavigationContainer theme={MyTheme}>
            <RootStack.Navigator initialRouteName="Main" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreen} />
                <RootStack.Screen name="AddHabits" component={AddHabits} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;
