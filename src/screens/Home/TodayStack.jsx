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
    ScrollView,
} from "react-native";

import {
    useDataDispatchContext,
    useDataStateContext,
} from "../../context/dataContext";

import NavigationTop from "../../layout/NavigationTop";
import TodayButton from "./TodayButton";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const StyledToday = styled.View`
    flex: 1;
    /* padding-top: 60px; */
`;

const HabitsCategoryLabel = styled.Text`
    /* margin-bottom: 15px; */
    background-color: #fff;
    align-self: center;
    /* padding: 6px; */
    margin-right: 12px;
    border-radius: 50px;
    font-size: 14px;
    color: ${(props) => props.theme.text};
    font-family: "Norms";
    /* font-weight: bold; */
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
    const listHeader = (
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
            <HabitsCategoryLabel
            // style={{ elevation: 4}}
            >
                Morning
            </HabitsCategoryLabel>
            <HabitsCategoryLabel
            // style={{ elevation: 4}}
            >
                Afternoon
            </HabitsCategoryLabel>
            <HabitsCategoryLabel
            // style={{ elevation: 4}}
            >
                Night
            </HabitsCategoryLabel>
            <HabitsCategoryLabel
            // style={{ elevation: 4}}
            >
                All
            </HabitsCategoryLabel>
        </View>
    );
    return (
        <StyledToday
        // colors={["#FFF8EA", "#fcf3e6"]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1.2, y: 1.2 }}
        // locations={[0.3, 0.9]}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={listHeader}
                contentContainerStyle={{
                    paddingTop: 15,
                    paddingBottom: 15,
                }}
                columnWrapperStyle={{
                    // backgroundColor: "#fcf3e6",
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    // borderTopRightRadius: 65,
                }}
                numColumns={3}
                data={habitsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </StyledToday>
    );
};

const SearchBar = styled.View`
    /* background-color: #fff; */
    width: 100%;
    /* position: absolute; */
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: 60px;
    background-color: ${(props) => props.theme.colorPrimary};
    height: 53px;
`;

const SearchInput = styled.TextInput`
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    /* background-color: lightgrey; */
    color: ${(props) => props.theme.text};
    flex: 1;
    padding: 0 25px;
    align-self: stretch;
    margin: 10px 5px 10px 15px;
    font-size: 16px;
    font-family: "Norms";
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
        <SearchBar>
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
        </SearchBar>
    );
};

const Stack = createStackNavigator();

export const TodayStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                cardStyle: {
                    elevation: 3,
                    // backgroundColor: "#FFF8EA",
                    backgroundColor: "#fff",
                    // marginTop: 12,
                    marginLeft: 12,
                    marginRight: 12,
                    marginBottom: 8,
                    borderRadius: 30,
                },
            }}
        >
            <Stack.Screen
                name="Today"
                options={{ header: () => <SearchHeader /> }}
                component={Today}
            />
        </Stack.Navigator>
    );
};
