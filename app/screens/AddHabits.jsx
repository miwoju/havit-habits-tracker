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
import { HeaderButton } from "../layout/UI";

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
            <Header title={"New Habit"}></Header>
            <Text>{currentScreen}</Text>

            <CancelButton
                onPress={() =>
                    globalDispatch({
                        type: "SET_SCREEN",
                        payload: "add_habits",
                    })
                }
            >
                <Text style={{ fontSize: 16 }}>Cancel</Text>
            </CancelButton>
        </StyledAddHabits>
    );
};

export default AddHabits;
