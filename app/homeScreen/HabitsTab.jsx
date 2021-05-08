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
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { useDataStateContext } from "../context/dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import NavigationTop from "./NavigationTop";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledHabitsTab = styled.View`
    flex: 1;
`;

const HabitsCategoryBox = styled.View`
    background-color: #fff;
    border-bottom-color: lightgrey;
    border-bottom-width: 1px;
    /* margin-bottom: 12px; */
    flex-direction: row;
    padding: 5px 10px;
`;

const HabitsCategoryItem = styled.Text`
    padding: 5px;
    margin-horizontal: 10px;
    /* border: 1px solid grey; */
`;

const HabitItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    /* border: 1px solid #000; */
    background-color: #fff;
    margin: 5px 10px 7px 10px;
    align-items: center;
    padding: 0 25px;
    /* border-radius: 15px; */
    border-radius: 50px;
`;

const HabitItemInfo = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

const HabitIMG = styled(FontAwesomeIcon)`
    /* border: 3px solid #ffd6a5;
    border-radius: 50px; */
`;
const HabitLabel = styled.Text`
    padding: 0 10px 0 20px;
    flex: 1;
    width: 100%;
    font-weight: bold;
    /* font-size: 15px; */
`;

const HabitStreaks = styled.Text`
    font-weight: bold;
`;

const HeaderTitle = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 18px;
`;

const HeaderButtons = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    padding: 10px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
`;

const HabitsTab = () => {
    const { habitsData } = useDataStateContext();

    const renderItem = ({ item }) => (
        <HabitItem
            title={item.title}
            style={{
                // elevation: 15,
                elevation: 3,
                shadowOffset: { width: 5, height: 5 },
                shadowColor: "grey",
                shadowOpacity: 0.5,
                shadowRadius: 10,
            }}
        >
            <HabitItemInfo>
                <HabitIMG icon={item.icon} size={34} color={"#ffadad"} />
                <HabitLabel numberOfLines={2}>{item.title}</HabitLabel>
            </HabitItemInfo>
            <HabitStreaks>
                <Text style={{ color: "grey" }}>{item.streak}</Text> D
            </HabitStreaks>
        </HabitItem>
    );
    return (
        <StyledHabitsTab>
            <NavigationTop>
                <HeaderTitle>My Habits</HeaderTitle>
                <HeaderButtons>
                    <Text style={{ fontSize: 22 }}>+</Text>
                </HeaderButtons>
            </NavigationTop>
            <HabitsCategoryBox>
                <TouchableOpacity>
                    <HabitsCategoryItem>Morning</HabitsCategoryItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HabitsCategoryItem>Day</HabitsCategoryItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HabitsCategoryItem>Night</HabitsCategoryItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HabitsCategoryItem>All</HabitsCategoryItem>
                </TouchableOpacity>
            </HabitsCategoryBox>
            <FlatList
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 50 }}
                data={habitsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </StyledHabitsTab>
    );
};

export default HabitsTab;
