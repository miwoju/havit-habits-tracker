import React, { useState } from "react";
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
    Pressable,
    Alert,
    TouchableOpacity,
} from "react-native";

import {
    useDataDispatchContext,
    useDataStateContext,
} from "../context/dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import NavigationTop from "./NavigationTop";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledMyHabits = styled.View`
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

const HabitButton = styled.View`
    align-items: center;
    /* justify-content: center; */
    width: ${windowWidth / 4};
    aspect-ratio: 1;
    margin-bottom: 30px;
`;

const HabitButtonIcon = styled.Pressable`
    /* border: 3px solid #ffadad; */

    /* background-color: #caffbf; */

    border-radius: 50px;
    width: 70%;
    margin: 5px;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid ${(props) => (props.progress ? "#000" : "transparent")};
`;

const HabitIMG = styled(FontAwesomeIcon)`
    /* border: 3px solid #ffd6a5;
    border-radius: 50px; */
`;

const HabitButtonLabel = styled.Text`
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
    margin-horizontal: 5px;
`;

const InputSearch = styled.TextInput`
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

const ProgressMeter = styled.View`
    background-color: #caffbf;
    opacity: ${(props) => (props.completed ? 1 : 0.4)};
    width: 100%;
    height: ${(props) => props.progress}%;
    position: absolute;
    bottom: 0;
`;

// const HabitsItem = ({ title }) => <View></View>;

const MyHabits = () => {
    const [text, setText] = useState("");

    const { habitsData } = useDataStateContext();
    const dataDispatch = useDataDispatchContext();

    const onButtonPress = (id) => {
        dataDispatch({ type: "COMPLETE_HABIT", payload: id });
        // console.log(habitsData);
    };

    const renderItem = ({ item }) => (
        <HabitButton title={item.title}>
            <HabitButtonIcon
                onPress={() => onButtonPress(item.id)}
                hitSlop={10}
                progress={item.progress >= 100}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#fff",
                    },
                    {
                        elevation: 4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                    },
                ]}
            >
                <ProgressMeter
                    progress={item.progress}
                    completed={item.completed}
                />
                <HabitIMG icon={item.icon} size={32} color={"#444"} />
            </HabitButtonIcon>
            <HabitButtonLabel numberOfLines={2}>{item.title}</HabitButtonLabel>
        </HabitButton>
    );
    return (
        <StyledMyHabits>
            <NavigationTop height="60px">
                <InputSearch
                    placeholder="Search my Habits!"
                    onChangeText={(text) => setText(text)}
                    defaultValue={text}
                >
                    <Text>{text}</Text>
                </InputSearch>
                <SearchButton>
                    <Text>Icon</Text>
                </SearchButton>
            </NavigationTop>
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
        </StyledMyHabits>
    );
};

export default MyHabits;
