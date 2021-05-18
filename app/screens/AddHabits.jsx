import React, { useState } from "react";
import styled from "styled-components";

import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";
import DockBottom from "../homeScreen/DockBottom";
import NavigationTop from "../homeScreen/NavigationTop";

import TodayTab from "../homeScreen/TodayTab";
import HabitsTab from "../homeScreen/HabitsTab";

import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "../context/globalContext";
import Header from "../layout/Header";

const StyledAddHabits = styled.View`
    height: 100%;
    width: 100%;
    position: relative;
`;

const Screen = styled.View`
    /* background-color: red; */
    background-color: #fff;
    flex: 1;
    padding: 0 10px;
`;

// const RepeatContainer = styled.View`
//     background-color: ${(props) => props.theme.inputBackground};
//     flex-direction: row;
//     justify-content: space-around;
//     width: 100%;
//     /* margin: 0 10px; */
//     border-radius: 6px;
// `;

const RepeatInputContainer = styled.View`
    background-color: ${(props) => props.theme.inputBackground};
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 40px;
    border-radius: 6px;
`;

const RepeatButton = styled.Pressable`
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    flex: 1;
    /* height: 50px; */
    margin-vertical: 5px;
    margin-horizontal: 5px;
    border-radius: 6px;
    height: 45px;
`;

const InputLabel = styled.Text`
    font-weight: bold;
    margin-vertical: 5px;
    padding-horizontal: 20px;
`;

const InputContainer = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 40px;
    border-radius: 6px;
    padding-horizontal: 10px;
`;

const HabitNameInput = styled.TextInput`
    background-color: ${(props) => props.theme.inputBackground};
    height: 45px;
    padding: 0 10px;
    border-radius: 6px;
    flex: 1;
    margin: 0 5px;
`;

const HabitImageButton = styled.View`
    background-color: ${(props) => props.theme.inputBackground};
    padding: 0 22px;
    border-radius: 6px;
    justify-content: center;
    margin: 0 5px;
`;

const AddHabits = () => {
    const globalDispatch = useGlobalDispatchContext();
    const { currentScreen } = useGlobalStateContext();
    const [repeatHabit, setRepeatHabit] = useState(true);

    const RepeatInputButtonProps = (isRepeatHabit) => ({
        onPress: () => setRepeatHabit(isRepeatHabit),
        style: ({ pressed }) => [
            pressed && {
                backgroundColor: "lightgrey",
            },
            isRepeatHabit === repeatHabit && {
                backgroundColor: "orange",
            },
        ],
    });

    return (
        <StyledAddHabits>
            <Header
                buttonLeft={{
                    title: "Cancel",
                    action: () =>
                        globalDispatch({
                            type: "SET_SCREEN",
                            payload: "add_habits",
                        }),
                }}
                buttonRight={{
                    title: "Save",
                    action: () =>
                        globalDispatch({
                            type: "SET_SCREEN",
                            payload: "home",
                        }),
                }}
            >
                New Habit
            </Header>
            <Screen>
                <RepeatInputContainer
                // style={{ paddingHorizontal: 0 }}
                >
                    <RepeatButton {...RepeatInputButtonProps(true)}>
                        <Text style={{ fontWeight: "bold" }}>Repeat Habit</Text>
                    </RepeatButton>
                    <RepeatButton {...RepeatInputButtonProps(false)}>
                        <Text style={{ fontWeight: "bold" }}>One-time</Text>
                    </RepeatButton>
                </RepeatInputContainer>
                <InputLabel>Name the habit:</InputLabel>
                <InputContainer>
                    <HabitNameInput placeholder="Eg: running, eat breakfast, etc."></HabitNameInput>
                    <HabitImageButton>
                        <Text style={{ fontSize: 12 }}>Gallery</Text>
                    </HabitImageButton>
                </InputContainer>
                <InputLabel>Pick icon and color:</InputLabel>
                <InputContainer></InputContainer>
            </Screen>
        </StyledAddHabits>
    );
};

export default AddHabits;
