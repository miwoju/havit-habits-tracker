import React from "react";
import styled from "styled-components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from "react-native-safe-area-context";

// import Today from "./Today";
import { HabitsStack } from "../screens/Home/HabitsStack";
import { TodayStack } from "../screens/Home/TodayStack";
import { ProgressStack } from "../screens/Home/ProgressStack";
import { MoreStack } from "../screens/Home/MoreStack";

const Tabs = createBottomTabNavigator();

const TodayTabComponentStyle = styled.View`
    border-radius: 100px;
    background-color: ${(props) => props.theme.colorPrimary};
    aspect-ratio: 1;
    height: 80px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 0;
    border: 4px solid #fff;
`;

const TodayTabComponentTextStyle = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.text};
`;

const TodayTabComponent = () => {
    return (
        <TodayTabComponentStyle
            style={[
                { elevation: 2 },
                { transform: [{ translateX: -40 }, { translateY: -22 }] },
            ]}
        >
            <TodayTabComponentTextStyle>TODAY</TodayTabComponentTextStyle>
        </TodayTabComponentStyle>
    );
};

const HomeTabs = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                style: {
                    height: 60,
                    // backgroundColor: "#F8DAC2",
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabStyle: {
                    justifyContent: "center",
                    // borderRadius: 50,
                    // aspectRatio: 1,
                    // borderStyle: "solid",
                    // borderColor: "#000",
                    // borderWidth: 2,
                },
                labelStyle: {
                    fontFamily: "Norms",
                },
            }}
        >
            <Tabs.Screen
                name="="
                options={{ title: "=" }}
                component={TodayStack}
            />
            <Tabs.Screen
                name="Habits"
                options={{ title: "HABITS" }}
                component={HabitsStack}
            />
            <Tabs.Screen
                name="Today"
                options={{
                    title: "TODAY",
                    tabBarButton: () => <TodayTabComponent />,
                }}
                component={TodayStack}
            />
            <Tabs.Screen
                name="Placeholder"
                options={{
                    title: "",
                }}
                component={TodayStack}
            />
            <Tabs.Screen
                name="Progress"
                options={{ title: "PROGRESS" }}
                component={ProgressStack}
            />
            <Tabs.Screen
                name="More"
                options={{ title: "MORE" }}
                component={MoreStack}
            />
        </Tabs.Navigator>
    );
};

export default HomeTabs;
