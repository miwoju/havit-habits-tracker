import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";

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
} from "../../context/dataContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledTodayButton = styled.View`
    align-items: center;
    /* justify-content: center; */
    width: ${windowWidth / 4}px;
    aspect-ratio: 1;
    margin-bottom: 30px;
`;

const TodayButtonIcon = styled.Pressable`
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
    border: 2px solid ${(props) => props.color};

    /* border: 1px solid ${(props) =>
        props.progress ? "#000" : "transparent"}; */
`;

const HabitIMG = styled(FontAwesomeIcon)`
    /* border: 3px solid #ffd6a5;
    border-radius: 50px; */
    color: ${(props) => props.theme.text};
`;

const TodayButtonLabel = styled.Text`
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
    margin-horizontal: 5px;
`;

const ProgressMeter = styled(Animatable.View)`
    /* background-color: ${(props) => props.color}; */
    /* opacity: ${(props) => (props.completed ? 1 : 0.8)}; */
    width: 100%;
    opacity: 0.3;
    /* height: ${(props) => props.progress}%; */
    height: 100%;
    position: absolute;
    bottom: 0;
`;

const ProgressStreak = styled(Animatable.View)`
    background-color: ${(props) => props.color};
    /* opacity: ${(props) => (props.completed ? 1 : 0.8)}; */
    width: 100%;

    height: ${(props) => (props.completed ? 100 : 0)}%;

    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 0;
`;

// const ProgressStreak = styled(Animatable.View)`
//     /* background-color: rgba(253, 255, 182, 0.9); */
//     background-color: ${(props) => props.color};
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     z-index: 9;
//     align-items: center;
//     justify-content: center;
//     border: 2px solid ${(props) => props.theme.text};
//     border-radius: 50px;
//     z-index: 0;
// `;

const ProgressStreakText = styled(Animatable.Text)`
    color: ${(props) => props.theme.text};
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    /* opacity: ${(props) => (props.completed ? 1 : 0)}; */
`;

const TodayButton = ({ item, index }) => {
    const [opacity, setOpacity] = useState(0);

    const { habitsData } = useDataStateContext();
    const dataDispatch = useDataDispatchContext();

    const onButtonPress = (id, completed, index) => {
        dataDispatch({ type: "COMPLETE_HABIT", payload: id });

        if (item.completed) {
            setOpacity(1);
            let timer = setTimeout(() => {
                setOpacity(0);
                clearTimeout(timer);
            }, 1200);
        } else {
            setOpacity(0);
        }
    };

    return (
        <StyledTodayButton title={item.title}>
            <TodayButtonIcon
                onPress={() => onButtonPress(item.id, item.completed, index)}
                hitSlop={10}
                color={item.color}
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
                    // transition="height"
                    // duration={1000}
                    // easing="ease-out-circ"
                    progress={item.progress}
                    completed={item.completed}
                    color={item.color}
                ></ProgressMeter>
                <ProgressStreak
                    transition="height"
                    duration={1000}
                    easing="ease-out-circ"
                    streak={item.streak}
                    color={item.color}
                    completed={item.completed}
                ></ProgressStreak>
                <ProgressStreakText
                    transition="opacity"
                    completed={item.completed}
                    duration={item.completed ? 800 : 1}
                    style={{ zIndex: 1, opacity: opacity }}
                    onAnimationEnd={() => setOpacity(0)}
                >
                    {item.streak}
                </ProgressStreakText>

                {/* <ProgressStreak
                    streak={item.streak}
                    color={item.color}
                    style={{ opacity: opacity }}
                >
                    <ProgressStreakText>{item.streak}</ProgressStreakText>
                </ProgressStreak> */}
                <HabitIMG
                    icon={item.icon}
                    size={32}
                    color={item.completed ? "#fff" : item.color}
                />
            </TodayButtonIcon>
            <TodayButtonLabel numberOfLines={2}>{item.title}</TodayButtonLabel>
        </StyledTodayButton>
    );
};

export default TodayButton;
