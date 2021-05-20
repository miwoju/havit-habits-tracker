import React from "react";
import styled from "styled-components";
import { Text, View, ImageBackground, Image } from "react-native";

import welcomeBg from "../../assets/images/ui/welcome-bg.png";

const StyledWelcomeScreen = styled.View`
    /* justify-content: center; */
    resize-mode: cover;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
`;

const LoginButton = styled.View`
    width: 100%;
    height: 70px;
    background-color: #9bf6ff;
    justify-content: center;
    align-items: center;
`;

const SignupButton = styled.View`
    width: 100%;
    height: 70px;
    background-color: #caffbf;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: #485056;
    font-weight: bold;
`;

const StyledBackground = styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
`;

const LogoContainer = styled.View`
    position: absolute;
    top: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    align-items: center;
`;
const Logo = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 40px;
`;

const LogoText = styled.Text`
    font-size: 16px;
    color: black;
`;

const WelcomeScreen = () => {
    return (
        <StyledWelcomeScreen>
            <StyledBackground source={welcomeBg}>
                <LogoContainer>
                    <Logo>HAVIT</Logo>
                    <LogoText>Your Best Habit Tracker</LogoText>
                </LogoContainer>
            </StyledBackground>
            <LoginButton>
                <ButtonText>Log In</ButtonText>
            </LoginButton>
            <SignupButton>
                <ButtonText>Sign Up</ButtonText>
            </SignupButton>
        </StyledWelcomeScreen>
    );
};

export default WelcomeScreen;
