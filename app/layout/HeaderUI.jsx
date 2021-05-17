import React from "react";
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
    TouchableOpacity,
    ScrollView,
} from "react-native";
import NavigationTop from "../homeScreen/NavigationTop";

// export const StyledHeaderUI = styled.View``;

const StyledHeaderButton = styled.TouchableOpacity`
    position: absolute;
    padding: 10px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
`;

export const HeaderButton = ({ children, onPress, title }) => {
    return (
        //!TRY ADDING ONPRESS THIS WAY TO LEFTBUTTON AND RIGHTBUTTON NEXT TIME
        <StyledHeaderButton onPress={onPress}>
            <Text style={{ fontSize: 16 }}>{title}</Text>
        </StyledHeaderButton>
    );
};
