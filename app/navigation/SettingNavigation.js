import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import NotificationSettingScreen from "../screens/NotificationSettingScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import TermUseScreen from "../screens/TermUseScreen";
import routes from "../config/routes";

const Stack = createStackNavigator();

const SettingNavigation = () => (
  <Stack.Navigator presentation="slide" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.SETTING_MAIN_PAGE} component={SettingScreen} />

    <Stack.Screen
      name={routes.NOTIFICATION_SETTING_SCREEN}
      component={NotificationSettingScreen}
    />

    <Stack.Screen
      name={routes.PRIVACY_POLICY}
      component={PrivacyPolicyScreen}
    />

    <Stack.Screen name={routes.TERM_OF_USE} component={TermUseScreen} />
  </Stack.Navigator>
);

export default SettingNavigation;
