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

    width: ${100 / 3}%;
    /* margin-bottom: 20px; */
    padding: 5px;
    /* border: 1px solid black; */
`;

const TodayButtonIcon = styled.Pressable`
    border-radius: 100px;
    width: 85%;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* border: ${(props) => (props.completed ? "5px solid" : "1.5px dashed")}
        ${(props) => props.color}; */
    /* padding: 5px; */
`;

const HabitIMG = styled(FontAwesomeIcon)`
    /* color: ${(props) => props.theme.text}; */
    z-index: 1;
`;

const TodayButtonLabel = styled.Text`
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
    line-height: 18px;
    margin-horizontal: 5px;
    color: ${(props) => props.theme.text};
    font-family: "Norms";
`;

const ProgressMeter = styled(Animatable.View)`
    /* background-color: ${(props) => props.color}; */
    /* opacity: ${(props) => (props.completed ? 1 : 0.8)}; */
    width: 100%;
    /* height: ${(props) => props.progress}%; */
    background-color: #fff;
    height: 100%;
    position: absolute;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 6px solid ${(props) => props.color};
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

const ProgressStreakTextContainer = styled(Animatable.View)`
    position: absolute;
    background-color: ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;
const ProgressStreakText = styled.Text`
    color: #fff;
    font-size: 16px;
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
                completed={item.completed}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "transparent",
                    },
                    {
                        elevation: 4,
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
                    style={{
                        elevation: 3,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                    }}
                >
                    <HabitIMG
                        icon={item.icon}
                        size={32}
                        color={item.completed ? "#fff" : item.color}
                    />
                    <ProgressStreak
                        transition="height"
                        duration={1000}
                        easing="ease-out-circ"
                        streak={item.streak}
                        color={item.color}
                        completed={item.completed}
                    ></ProgressStreak>
                    <ProgressStreakTextContainer
                        transition="opacity"
                        completed={item.completed}
                        duration={item.completed ? 800 : 1}
                        delay={250}
                        style={{ zIndex: 5, opacity: opacity }}
                        onAnimationEnd={() => setOpacity(0)}
                    >
                        <ProgressStreakText>{item.streak}</ProgressStreakText>
                    </ProgressStreakTextContainer>
                </ProgressMeter>

                {/* <ProgressStreak
                    streak={item.streak}
                    color={item.color}
                    style={{ opacity: opacity }}
                >
                    <ProgressStreakText>{item.streak}</ProgressStreakText>
                </ProgressStreak> */}
            </TodayButtonIcon>
            <TodayButtonLabel
            // numberOfLines={2}
            >
                {item.title}
            </TodayButtonLabel>
        </StyledTodayButton>
    );
};

export default TodayButton;
