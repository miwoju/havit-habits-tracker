import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { createStackNavigator } from "@react-navigation/stack";

import { Animated, Text, View } from "react-native";

const StyledProgress = styled.View`
    flex: 1;
`;

const Progress = () => {
    return (
        <StyledProgress>
            <Text>PROGRESS TAB</Text>
        </StyledProgress>
    );
};

const Stack = createStackNavigator();

export const ProgressStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen
                name="Progress"
                options={{ title: "My Progress" }}
                component={Progress}
            />
        </Stack.Navigator>
    );
};
