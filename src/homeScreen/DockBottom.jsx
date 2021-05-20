import React from "react";
import styled from "styled-components";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import { useGlobalDispatchContext } from "../context/globalContext";

const StyledDockBottom = styled.View`
    background-color: white;
    width: 100%;
    height: 70px;
    /* position: absolute;
    bottom: 0;
    left: 0;
    right: 0; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const DockButton = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text`
    font-size: 10px;
`;

const DockBottom = () => {
    const globalDispatch = useGlobalDispatchContext();

    const onButtonPress = (payload) => {
        globalDispatch({ type: "SET_TAB", payload: payload });
    };
    return (
        <StyledDockBottom>
            <DockButton onPress={() => onButtonPress("today")}>
                <ButtonText>TODAY</ButtonText>
            </DockButton>
            <DockButton onPress={() => onButtonPress("habits")}>
                <ButtonText>HABITS</ButtonText>
            </DockButton>
            <DockButton onPress={() => onButtonPress("progress")}>
                <ButtonText>PROGRESS</ButtonText>
            </DockButton>
            <DockButton onPress={() => onButtonPress("more")}>
                <ButtonText>MORE</ButtonText>
            </DockButton>
        </StyledDockBottom>
    );
};

export default DockBottom;
