import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AppTabs from "../screens/Home/HomeTabs";
import AddHabits from "../screens/Modal/AddHabits";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = ({ children }) => {
    return (
        <>
            <AppTabs />
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

function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Main" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreen} />
                <RootStack.Screen name="AddHabits" component={AddHabits} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;
