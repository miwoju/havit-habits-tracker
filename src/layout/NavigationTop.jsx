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
    background-color: #fff;
    width: 100%;
    height: ${(props) => (props.height ? props.height : "50px")};
    position: relative;
    flex-direction: row;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const NavigationTop = ({ height, children }) => {
    // const [text, setText] = useState("");

    return (
        <StyledNavigationTop height={height}>{children}</StyledNavigationTop>
    );
};

export default NavigationTop;
