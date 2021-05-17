import React from "react";
import styled from "styled-components";

import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
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
import { HeaderButton } from "../layout/HeaderUI";

const StyledAddHabits = styled.View`
    height: 100%;
    width: 100%;
    position: relative;
`;

const CancelButton = styled(HeaderButton)`
    right: 10px;
`;

const AddHabits = () => {
    const globalDispatch = useGlobalDispatchContext();
    const { currentScreen } = useGlobalStateContext();

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
                            payload: "add_habits",
                        }),
                }}
            >
                New Habit
            </Header>
            <Text>{currentScreen}</Text>
        </StyledAddHabits>
    );
};

export default AddHabits;
