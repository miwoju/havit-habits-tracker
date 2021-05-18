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
import colorsList from "../../assets/icons-and-colors/colorsList.json";

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
`;

const InputLabelContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-horizontal: 20px;
    margin-vertical: 5px;
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

const HabitIconPreview = styled.View`
    width: 45px;
    height: 45px;
    border: 2px solid black;
    border-radius: 50px;
`;

const AddHabits = () => {
    const globalDispatch = useGlobalDispatchContext();
    const { currentScreen } = useGlobalStateContext();
    const [repeatHabit, setRepeatHabit] = useState(true);
    const [iconColor, setIconColor] = useState(colorsList[2]);

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
                <InputLabelContainer>
                    <Text style={{ fontWeight: "bold" }}>Name the habit:</Text>
                </InputLabelContainer>
                <InputContainer>
                    <HabitNameInput placeholder="Eg: running, eat breakfast, etc."></HabitNameInput>
                    <HabitImageButton>
                        <Text style={{ fontSize: 12 }}>Gallery</Text>
                    </HabitImageButton>
                </InputContainer>
                <InputLabelContainer>
                    <InputLabel>Pick icon and color:</InputLabel>
                    <HabitIconPreview
                        style={{ backgroundColor: iconColor }}
                    ></HabitIconPreview>
                </InputLabelContainer>
                <InputContainer>
                    {colorsList.map((color, index) => (
                        <Pressable
                            onPress={() => setIconColor(color)}
                            key={index}
                            style={[
                                {
                                    backgroundColor: color,
                                    width: 45,
                                    height: 45,
                                    borderRadius: 50,
                                    borderWidth: 2,
                                    borderColor: "transparent",
                                },
                                color === iconColor && { borderColor: "black" },
                            ]}
                        ></Pressable>
                    ))}
                </InputContainer>
            </Screen>
        </StyledAddHabits>
    );
};

export default AddHabits;
