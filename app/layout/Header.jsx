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

const HeaderTitle = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 18px;
`;

const HeaderButtonRight = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    padding: 10px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
`;

const HeaderButtonLeft = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
    padding: 10px;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
`;

const Header = ({ title, buttonLeft, buttonRight, children }) => {
    return (
        <NavigationTop>
            {children}
            {/* <HeaderButtonLeft onPress={() => buttonLeft.action()}>
                <Text style={{ fontSize: 16 }}>{buttonLeft.title}</Text>
            </HeaderButtonLeft> */}
            <HeaderTitle>{title}</HeaderTitle>
            {/* <HeaderButtonRight onPress={() => buttonRight.action()}>
                <Text style={{ fontSize: 16 }}>{buttonRight.title}</Text>
            </HeaderButtonRight> */}
        </NavigationTop>
    );
};

export default Header;
