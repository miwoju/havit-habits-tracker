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
    height: ${(props) => (props.height ? props.height : "40px")};
    position: relative;
    /* flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0; */
    flex-direction: row;
    align-items: center;
`;

const NavigationTop = ({ height, children }) => {
    // const [text, setText] = useState("");

    return (
        <StyledNavigationTop height={height}>{children}</StyledNavigationTop>
    );
};

export default NavigationTop;
