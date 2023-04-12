import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import UserPropertiesScreen from "../screens/UserPropertiesScreen";
import LogoutScreen from "../screens/LogoutScreen";
import AppNavigator from "./AppNavigator";
import CustomDrawer from "../components/CustomDrawer";
import NotificationScreen from "../screens/NotificationScreen";
import Washroom from "../assets/washroom.svg";
import Home from "../assets/home.svg";
import Noti from "../assets/noti.svg";
import Eye from "../assets/eye.svg";
import Heart from "../assets/heart.svg";
import Install from "../assets/install.svg";
import Help from "../assets/help.svg";
import Faq from "../assets/faq.svg";
import Dricon from "../assets/dricon.svg";
import Setting from "../assets/setting.svg";
import Log from "../assets/log.svg";
import InstallmentDashboardScreen from "../screens/InstallmentDashboardScreen";
import routes from "../config/routes";
import HelpScreen from "../screens/HelpScreen";
import FaqScreen from "../screens/FaqScreen";
import AboutTwidleScreen from "../screens/AboutTwidleScreen";
import SettingNavigation from "./SettingNavigation";
import DisplayPropertiesScreen from "../screens/DisplayPropertiesScreen";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Home"
        component={AppNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({ size, color }) => <Home width={size} height={size} />,
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => <Noti width={size} height={size} />,
        }}
      />

      <Drawer.Screen
        name="Recently View"
        component={UserPropertiesScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => <Eye width={size} height={size} />,
        }}
      />

      <Drawer.Screen
        name="My Favourites"
        component={UserPropertiesScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => <Heart width={size} height={size} />,
        }}
      />

      <Drawer.Screen
        name={routes.INSTALLMENT_DASHBOARD}
        component={InstallmentDashboardScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Install width={size} height={size} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.HELP}
        component={HelpScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => <Help width={size} height={size} />,
        }}
      />

      <Drawer.Screen
        name={routes.FAQ}
        component={FaqScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => <Faq width={size} height={size} />,
        }}
      />

      <Drawer.Screen
        name={routes.ABOUT}
        component={AboutTwidleScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Dricon width={size} height={size} />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.SETTING_NAVIGATION}
        component={SettingNavigation}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Setting width={size} height={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          // headerShown: false,
          drawerIcon: ({ size, color }) => <Log width={size} height={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
