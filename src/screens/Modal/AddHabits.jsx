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
// import DockBottom from "../../homeScreen/DockBottom";
// import NavigationTop from "../homeScreen/NavigationTop";

// import TodayTab from "./Home/Today";
// import HabitsTab from "./Home/Habits";
import colorsList from "../../../src/assets/icons-and-colors/colorsList.json";

import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "../../context/globalContext";
import Header from "../../layout/Header";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StyledAddHabits = styled.View`
    background-color: rgba(0, 0, 0, 0.5);
    /* height: 100%;
    width: 100%; */
    flex: 1;
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
    /* margin-bottom: 30px; */
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

const HabitButton = styled.View`
    background-color: ${(props) => props.theme.inputBackground};
    border-radius: 6px;
    justify-content: center;
    margin: 0 5px;
    ${(props) =>
        props.addPadding ? `padding: 0 22px;` : `padding: 6px 10px;`};
`;

const HabitIconPreview = styled.View`
    width: 45px;
    height: 45px;
    border: 2px solid black;
    border-radius: 50px;
`;

const AddHabits = ({ navigation }) => {
    const globalDispatch = useGlobalDispatchContext();
    const { currentScreen } = useGlobalStateContext();
    const [repeatHabit, setRepeatHabit] = useState(true);
    const [repeatDuration, setRepeatDuration] = useState("Daily");
    // const [iconColor, setIconColor] = useState(colorsList[2]);
    const [iconColor, setIconColor] = useState(2);

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

    const renderItem = ({ item, index }) => (
        <View
            style={{
                alignItems: "center",
                width: windowWidth / 6 - 10,
                aspectRatio: 1,
                padding: 6,
            }}
        >
            <Pressable
                onPress={() => setIconColor(index)}
                style={[
                    {
                        backgroundColor: colorsList[index],
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: "transparent",
                        width: "100%",
                        aspectRatio: 1,
                    },
                    index === iconColor && { borderColor: "black" },
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
                        action: () => {
                            navigation.navigate("Habits");
                        },
                    }}
                    buttonRight={{
                        title: "Save",
                        action: () => {
                            navigation.navigate("Habits");
                        },
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
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: 30 }}
                    >
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
                            <HabitNameInput placeholder="Running, Eat Breakfast..."></HabitNameInput>
                            <HabitButton addPadding>
                                <Text
                                    style={{
                                        fontSize: 12,
                                    }}
                                >
                                    Gallery
                                </Text>
                            </HabitButton>
                        </InputContainer>
                        <InputLabelContainer
                            style={{
                                marginBottom: 20,
                            }}
                        >
                            <InputLabel>Pick icon and color:</InputLabel>
                            <HabitIconPreview
                                style={{
                                    backgroundColor: colorsList[iconColor],
                                }}
                            ></HabitIconPreview>
                        </InputLabelContainer>
                        <InputContainer>
                            <ScrollView
                                horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            >
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    numColumns={Math.ceil(
                                        colorsList.length / 3
                                    )}
                                    data={colorsList}
                                    renderItem={renderItem}
                                    keyExtractor={(item, index) => index}
                                ></FlatList>
                            </ScrollView>
                        </InputContainer>
                        <InputLabelContainer>
                            <InputLabel>What time of day:</InputLabel>
                        </InputLabelContainer>
                        <InputContainer>
                            <ScrollView
                                horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            >
                                {[
                                    "WakeUp",
                                    "Morning",
                                    "Noon",
                                    "Afternoon",
                                    "Evening",
                                    "BeforeBed",
                                ].map((time, index) => (
                                    <HabitButton key={index}>
                                        <Text>{time}</Text>
                                    </HabitButton>
                                ))}
                            </ScrollView>
                        </InputContainer>
                        <InputLabelContainer>
                            <InputLabel>I want to repeat:</InputLabel>
                        </InputLabelContainer>
                        <RepeatInputContainer>
                            {["Daily", "Weekly", "Monthly"].map(
                                (repeatType) => (
                                    <RepeatButton
                                        onPress={() =>
                                            setRepeatDuration(repeatType)
                                        }
                                        style={
                                            repeatDuration === repeatType && {
                                                backgroundColor: "#fff",
                                            }
                                        }
                                    >
                                        <Text>{repeatType}</Text>
                                    </RepeatButton>
                                )
                            )}
                        </RepeatInputContainer>
                        <InputLabelContainer>
                            <InputLabel>Set remind time:</InputLabel>
                        </InputLabelContainer>
                        <InputLabelContainer>
                            <InputLabel>
                                Motivate yourself with one sentence:
                            </InputLabel>
                        </InputLabelContainer>
                        <InputContainer>
                            <HabitNameInput placeholder="To build a new habit, To succeed..."></HabitNameInput>
                        </InputContainer>
                    </ScrollView>
                </Screen>
            </StyledAddHabits>
        </Modal>
    );
};

export default AddHabits;
