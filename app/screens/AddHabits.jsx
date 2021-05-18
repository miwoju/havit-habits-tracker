import React, { useState } from "react";
import styled from "styled-components";

import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
    TouchableHighlight,
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
    padding: 10px;
`;

const RepeatInput = styled.View`
    background-color: ${(props) => props.theme.inputBackground};
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    /* margin: 0 10px; */
    border-radius: 6px;
`;

const RepeatInputButton = styled.Pressable`
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 50px;
    margin: 5px;
    border-radius: 6px;
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
                <RepeatInput>
                    <RepeatInputButton {...RepeatInputButtonProps(true)}>
                        <Text style={{ fontWeight: "bold" }}>Repeat Habit</Text>
                    </RepeatInputButton>
                    <RepeatInputButton {...RepeatInputButtonProps(false)}>
                        <Text style={{ fontWeight: "bold" }}>One-time</Text>
                    </RepeatInputButton>
                </RepeatInput>
            </Screen>
        </StyledAddHabits>
    );
};

export default AddHabits;
