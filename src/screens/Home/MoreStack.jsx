import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { createStackNavigator } from "@react-navigation/stack";

import { Animated, Text, View } from "react-native";

const StyledMore = styled.View`
    flex: 1;
`;

const More = () => {
    return (
        <StyledMore>
            <Text>More TAB</Text>
        </StyledMore>
    );
};

const Stack = createStackNavigator();

export const MoreStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen name="More" component={More} />
        </Stack.Navigator>
    );
};
