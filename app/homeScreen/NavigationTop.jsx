import React, { useState } from "react";
import styled from "styled-components";

import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
} from "react-native";

const StyledNavigationTop = styled.View`
    background-color: white;
    width: 100%;
    height: 60px;
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    align-items: center;
`;

const Input = styled.TextInput`
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    background-color: lightgrey;
    flex: 1;
    padding: 0 8px;
    align-self: stretch;
    margin: 10px 5px 10px 15px;
`;

const NavigationButton = styled.View`
    /* background-color: red; */
    height: 100%;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
`;

const NavigationTop = () => {
    const [text, setText] = useState("");

    return (
        <StyledNavigationTop>
            <Input
                placeholder="Search Habits!"
                onChangeText={(text) => setText(text)}
                defaultValue={text}
            ></Input>
            <NavigationButton>
                <Text>Icon</Text>
            </NavigationButton>
        </StyledNavigationTop>
    );
};

export default NavigationTop;
