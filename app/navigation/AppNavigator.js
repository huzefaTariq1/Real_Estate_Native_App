import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DisplayPropertiesScreen from "../screens/DisplayPropertiesScreen";
import FormNavigator from "./FormNavigator";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import UserPropertiesScreen from "../screens/UserPropertiesScreen";

import InsideNavigation from "./InsideNavigation";

import { Octicons } from "@expo/vector-icons";

import WalletScreen from "../screens/WalletScreens/WalletScreen";

import TwiddleMainProjectScreen from "../screens/TwiddleProjectsScreens/TwiddleMainProjectScreen";

import routes from "../config/routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#1645f5",
      tabBarInactiveTintColor: "black",
      tabBarShowLabel: false,
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    }}
  >
    <Tab.Screen
      name="Home1"
      component={InsideNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="User1"
      component={UserPropertiesScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Form1"
      component={FormNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton onPress={() => navigation.navigate("Form1")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Service"
      component={TwiddleMainProjectScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Octicons name="graph" size={18} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name={routes.WALEET_MAIN_SCREEN}
      component={WalletScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="wallet-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
