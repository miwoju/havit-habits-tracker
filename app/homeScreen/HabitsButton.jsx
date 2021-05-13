import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
    Animated,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    FlatList,
    Dimensions,
    Pressable,
    Alert,
    TouchableOpacity,
} from "react-native";
import {
    useDataDispatchContext,
    useDataStateContext,
} from "../context/dataContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledHabitButton = styled.View`
    align-items: center;
    /* justify-content: center; */
    width: ${windowWidth / 4};
    aspect-ratio: 1;
    margin-bottom: 30px;
`;

const HabitButtonIcon = styled.Pressable`
    /* border: 3px solid #ffadad; */

    /* background-color: #caffbf; */

    border-radius: 50px;
    width: 70%;
    margin: 5px;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid ${(props) => (props.progress ? "#000" : "transparent")};
`;

const HabitIMG = styled(FontAwesomeIcon)`
    /* border: 3px solid #ffd6a5;
    border-radius: 50px; */
    color: ${(props) => props.theme.text};
`;

const HabitButtonLabel = styled.Text`
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
    margin-horizontal: 5px;
`;

const ProgressMeter = styled.View`
    background-color: ${(props) => props.color};
    opacity: ${(props) => (props.completed ? 1 : 0.4)};
    width: 100%;
    height: ${(props) => props.progress}%;
    position: absolute;
    bottom: 0;
`;

const ProgressStreak = styled(Animated.View)`
    background-color: #fdffb6;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme.text};
    border-radius: 50px;
`;

const ProgressStreakText = styled.Text`
    color: ${(props) => props.theme.text};
    font-size: 24px;
    font-weight: bold;
`;
const HabitsButton = ({ item, index }) => {
    const opacity = useState(new Animated.Value(0))[0];

    const { habitsData } = useDataStateContext();
    const dataDispatch = useDataDispatchContext();

    const onButtonPress = (id, index) => {
        dataDispatch({ type: "COMPLETE_HABIT", payload: id });
        if (habitsData[index].completed) {
            fadeIn(index);
        }
    };

    const fadeIn = (index) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => fadeOut());
    };

    const fadeOut = (index) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 700,
            delay: 400,
            useNativeDriver: true,
        }).start();
    };

    const colorList = [
        "#ffc6ff",
        "#bdb2ff",
        "#a0c4ff",
        "#9bf6ff",
        "#caffbf",
        "#fdffb6",
        "#ffd6a5",
        "#ffadad",
    ];

    const randomColor = () => {
        const generatedColor =
            colorList[Math.floor(Math.random() * colorList.length)];

        return generatedColor;
    };

    return (
        <StyledHabitButton title={item.title}>
            <HabitButtonIcon
                onPress={() => onButtonPress(item.id, index)}
                hitSlop={10}
                progress={item.progress >= 100}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#fff",
                    },
                    {
                        elevation: 4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                    },
                ]}
            >
                <ProgressMeter
                    progress={item.progress}
                    completed={item.completed}
                    color={randomColor()}
                />
                <ProgressStreak
                    streak={item.streak}
                    style={{ opacity: opacity }}
                >
                    <ProgressStreakText>{item.streak}</ProgressStreakText>
                </ProgressStreak>
                <HabitIMG icon={item.icon} size={32} />
            </HabitButtonIcon>
            <HabitButtonLabel numberOfLines={2}>{item.title}</HabitButtonLabel>
        </StyledHabitButton>
    );
};

export default HabitsButton;
