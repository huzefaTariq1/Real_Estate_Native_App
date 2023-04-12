import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginSignupScreen from "../screens/LoginSignupScreen";
import TypeSelectScreen from "../screens/TypeSelectScreen";
import LoginTypeScreen from "../screens/LoginTypeScreen";
import LoginFormREScreen from "../screens/LoginFormREScreen";
import SignUpREScreen from "../screens/SignUpREScreen";
import CompleteModal from "../components/CompleteModal";
import WelcomeScreen2 from "../screens/WelcomeScreen2";
import WelcomeScreen1 from "../screens/WelcomeScreen1";
import WelcomeScreen3 from "../screens/WelcomeScreen3";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welocome1"
      component={WelcomeScreen1}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="welocome2"
      component={WelcomeScreen2}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="welocome3"
      component={WelcomeScreen3}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="LoginSignupScreen"
      component={LoginSignupScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="LoginTypeScreen"
      component={LoginTypeScreen}
      options={{ headerShown: false }}
    />
    {/* registar type */}
    <Stack.Screen
      name="TypeSelectScreen"
      component={TypeSelectScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginFormREScreen"
      component={LoginFormREScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpREScreen"
      component={SignUpREScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="CompleteModal"
      component={CompleteModal}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
