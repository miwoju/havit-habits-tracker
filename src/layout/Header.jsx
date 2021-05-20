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

import NavigationTop from "./NavigationTop";

const HeaderTitle = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 18px;
`;

const HeaderButton = styled.TouchableOpacity`
    position: absolute;
    padding: 10px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const Header = ({ buttonLeft, buttonRight, children }) => {
    return (
        <NavigationTop>
            {buttonLeft && (
                <HeaderButton style={{ left: 10 }} onPress={buttonLeft.action}>
                    <Text style={{ fontSize: 16 }}>{buttonLeft.title}</Text>
                </HeaderButton>
            )}
            {/* <TouchableOpacity onPress={onPress}>
                <HeaderButtonLeft>
                    <Text style={{ fontSize: 16 }}>{title}</Text>
                </HeaderButtonLeft>
            </TouchableOpacity> */}
            <HeaderTitle>{children}</HeaderTitle>
            {buttonRight && (
                <HeaderButton
                    style={{ right: 10 }}
                    onPress={buttonRight.action}
                >
                    <Text style={{ fontSize: 16 }}>{buttonRight.title}</Text>
                </HeaderButton>
            )}
        </NavigationTop>
    );
};

export default Header;
