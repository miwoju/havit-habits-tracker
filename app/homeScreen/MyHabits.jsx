import React from "react";
import styled from "styled-components";

import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    FlatList,
    Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledMyHabits = styled.View`
    flex: 1;
`;

const HabitsCategoryLabel = styled.Text`
    margin: 10px;
    background-color: lightgrey;
    align-self: flex-start;
    padding: 5px 10px;
    border-radius: 50px;
`;

const HabitsGrid = styled.FlatList`
    flex-direction: row;
`;

const HabitButton = styled.View`
    align-items: center;
    justify-content: center;
    width: ${windowWidth / 4};
    aspect-ratio: 1;
    padding: 15px;
    /* margin-vertical: 10px; */
`;

const HabitButtonIcon = styled.Text`
    background-color: lightgrey;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50px;
`;

const HabitButtonLabel = styled.Text`
    font-size: 12px;
`;

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third",
    },
    {
        id: "58694a0f-3da1-471f-bd96-1455571e29d72",
        title: "Fourth",
    },
    {
        id: "58694a0f-3da1-471f-bd96-1455471e29d72",
        title: "Fifth",
    },
];

// const HabitsItem = ({ title }) => <View></View>;

const MyHabits = () => {
    const renderItem = ({ item }) => (
        <HabitButton title={item.title}>
            <HabitButtonIcon></HabitButtonIcon>
            <HabitButtonLabel>{item.title}</HabitButtonLabel>
        </HabitButton>
    );
    return (
        <StyledMyHabits>
            <HabitsCategoryLabel>Morning</HabitsCategoryLabel>
            <HabitsGrid
                numColumns={4}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></HabitsGrid>
        </StyledMyHabits>
    );
};

export default MyHabits;
