import React, { useState } from "react";
import styled from "styled-components";

import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
    FlatList,
    Dimensions,
    ScrollView,
    Modal,
} from "react-native";
import DockBottom from "../homeScreen/DockBottom";
import NavigationTop from "../homeScreen/NavigationTop";

import TodayTab from "../homeScreen/TodayScreen";
import HabitsTab from "../homeScreen/HabitsScreen";
import colorsList from "../../assets/icons-and-colors/colorsList.json";

import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "../context/globalContext";
import Header from "../layout/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledAddHabits = styled.View`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: relative;
`;

const Screen = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 0 10px;
`;

const RepeatInputContainer = styled.View`
    background-color: ${(props) => props.theme.inputBackground};
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 6px;
`;

const RepeatButton = styled.Pressable`
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    flex: 1;
    /* height: 50px; */
    margin-vertical: 5px;
    margin-horizontal: 5px;
    border-radius: 6px;
    height: 45px;
`;

const InputLabel = styled.Text`
    font-weight: bold;
`;

const InputLabelContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-horizontal: 20px;
    margin-vertical: 10px;
`;

const InputContainer = styled.View`
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 6px;
    padding-horizontal: 10px;
`;

const HabitNameInput = styled.TextInput`
    background-color: ${(props) => props.theme.inputBackground};
    height: 45px;
    padding: 0 10px;
    border-radius: 6px;
    flex: 1;
    margin: 0 5px;
`;

const HabitImageButton = styled.View`
    background-color: ${(props) => props.theme.inputBackground};
    padding: 0 22px;
    border-radius: 6px;
    justify-content: center;
    margin: 0 5px;
`;

const HabitIconPreview = styled.View`
    width: 45px;
    height: 45px;
    border: 2px solid black;
    border-radius: 50px;
`;

const AddHabits = () => {
    const globalDispatch = useGlobalDispatchContext();
    const { currentScreen } = useGlobalStateContext();
    const [repeatHabit, setRepeatHabit] = useState(true);
    const [iconColor, setIconColor] = useState(colorsList[2]);

    const RepeatInputButtonProps = (isRepeatHabit) => ({
        onPress: () => setRepeatHabit(isRepeatHabit),
        style: ({ pressed }) => [
            pressed && {
                backgroundColor: "lightgrey",
            },
            isRepeatHabit === repeatHabit && {
                backgroundColor: "orange",
            },
        ],
    });

    const renderItem = ({ item }) => (
        <View
            style={{
                alignItems: "center",
                width: windowWidth / 6 - 10,
                aspectRatio: 1,
                padding: 6,
            }}
        >
            <Pressable
                onPress={() => setIconColor(item)}
                style={[
                    {
                        backgroundColor: item,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: "transparent",
                        width: "100%",
                        aspectRatio: 1,
                    },
                    item === iconColor && { borderColor: "black" },
                ]}
            ></Pressable>
        </View>
    );

    return (
        <Modal animationType="slide">
            <StyledAddHabits>
                <Header
                    buttonLeft={{
                        title: "Cancel",
                        action: () =>
                            globalDispatch({
                                type: "SET_SCREEN",
                                payload: "home",
                            }),
                    }}
                    buttonRight={{
                        title: "Save",
                        action: () =>
                            globalDispatch({
                                type: "SET_SCREEN",
                                payload: "home",
                            }),
                    }}
                >
                    New Habit
                </Header>
                <Screen>
                    <RepeatInputContainer
                    // style={{ paddingHorizontal: 0 }}
                    >
                        <RepeatButton {...RepeatInputButtonProps(true)}>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    color: repeatHabit ? "#000" : "#bcbcbc",
                                }}
                            >
                                Repeat Habit
                            </Text>
                        </RepeatButton>
                        <RepeatButton {...RepeatInputButtonProps(false)}>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    color: !repeatHabit ? "#000" : "#bcbcbc",
                                }}
                            >
                                One-time
                            </Text>
                        </RepeatButton>
                    </RepeatInputContainer>
                    <InputLabelContainer>
                        <Text
                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            Name the habit:
                        </Text>
                    </InputLabelContainer>
                    <InputContainer>
                        <HabitNameInput placeholder="Eg: running, eat breakfast, etc."></HabitNameInput>
                        <HabitImageButton>
                            <Text style={{ fontSize: 12 }}>Gallery</Text>
                        </HabitImageButton>
                    </InputContainer>
                    <InputLabelContainer
                        style={{
                            marginBottom: 20,
                        }}
                    >
                        <InputLabel>Pick icon and color:</InputLabel>
                        <HabitIconPreview
                            style={{ backgroundColor: iconColor }}
                        ></HabitIconPreview>
                    </InputLabelContainer>
                    <InputContainer style={{ height: windowWidth - 50 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            style={{
                                transform: [
                                    { rotate: "-90deg" },
                                    { scaleX: -1 },
                                ],
                            }}
                            numColumns={3}
                            data={colorsList}
                            renderItem={renderItem}
                            keyExtractor={(item) => item}
                        ></FlatList>
                    </InputContainer>
                </Screen>
            </StyledAddHabits>
        </Modal>
    );
};

export default AddHabits;
