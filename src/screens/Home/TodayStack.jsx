import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { createStackNavigator } from "@react-navigation/stack";

import {
    Animated,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    FlatList,
    Dimensions,
    Pressable,
    Alert,
    TouchableOpacity,
} from "react-native";

import {
    useDataDispatchContext,
    useDataStateContext,
} from "../../context/dataContext";

import NavigationTop from "../../layout/NavigationTop";
import TodayButton from "./TodayButton";

const StyledToday = styled.View`
    flex: 1;
`;

const HabitsCategoryLabel = styled.Text`
    margin: 15px 15px 15px 15px;
    background-color: lightgrey;
    align-self: flex-start;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 14px;
`;

// const HabitsItem = ({ title }) => <View></View>;

const Today = () => {
    const { habitsData } = useDataStateContext();
    const dataDispatch = useDataDispatchContext();

    useEffect(() => {
        dataDispatch({ type: "LOAD_HABITS" });
    }, []);

    const renderItem = ({ item, index }) => (
        <TodayButton item={item} index={index} />
    );
    return (
        <StyledToday>
            <HabitsCategoryLabel>Morning</HabitsCategoryLabel>
            <FlatList
                numColumns={4}
                data={habitsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></FlatList>
            <TouchableOpacity
                onPress={() => dataDispatch({ type: "RESET_DATA" })}
            >
                <Text>RESET</Text>
            </TouchableOpacity>
        </StyledToday>
    );
};

const SearchInput = styled.TextInput`
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    background-color: lightgrey;
    flex: 1;
    padding: 0 12px;
    align-self: stretch;
    margin: 10px 5px 10px 15px;
`;

const SearchButton = styled.View`
    /* background-color: red; */
    height: 100%;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
`;

const SearchHeader = () => {
    const [text, setText] = useState("");

    return (
        <NavigationTop height="60px">
            <SearchInput
                placeholder="Search my Habits!"
                onChangeText={(text) => setText(text)}
                defaultValue={text}
            >
                <Text>{text}</Text>
            </SearchInput>
            <SearchButton>
                <Text>Icon</Text>
            </SearchButton>
        </NavigationTop>
    );
};

const Stack = createStackNavigator();

export const TodayStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen
                name="Today"
                options={{ header: () => <SearchHeader /> }}
                component={Today}
            />
        </Stack.Navigator>
    );
};
