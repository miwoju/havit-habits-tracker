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
import { HabitsStack } from "./HabitsStack";
import { TodayStack } from "./TodayStack";
import { ProgressStack } from "./ProgressStack";
import { MoreStack } from "./MoreStack";

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{ tabStyle: { justifyContent: "center" } }}
        >
            <Tabs.Screen
                name="Today"
                options={{ title: "TODAY" }}
                component={TodayStack}
            />
            <Tabs.Screen
                name="Habits"
                options={{ title: "HABITS" }}
                component={HabitsStack}
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
