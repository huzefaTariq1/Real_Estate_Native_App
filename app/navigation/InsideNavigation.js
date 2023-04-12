import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayPropertiesScreen from "../screens/DisplayPropertiesScreen";
import DetailPropertyScreen from "../screens/DetailPropertyScreen";
import OwnerDetailScreen from "../screens/OwnerDetailScreen";
import VisitPropertCharges from "../screens/VisitPropertCharges";
import RentPropertyScreen from "../screens/RentPropertyScreen";
import RentDetailPropertyScreen from "../screens/RentDetailPropertyScreen";
import RentPayScreen from "../screens/RentPayScreen";
import RentSuccessPay from "../screens/RentSuccessPay";
import SuccessScreen from "../screens/SuccessScreen";
import OwnerChatScreen from "../screens/OwnerChatScreen";
import OwnerStartsChat from "../screens/OwnerStartsChat";
import FilterScreen from "../screens/FilterScreen";

import PostPropertyFormScreen1 from "../screens/PostPropertyFormScreen1";
import PostPropertyFormScreen2 from "../screens/PostPropertyFormScreen2";
import SuccessAddProperty from "../screens/SuccessAddProperty";

import UserPropertiesScreen from "../screens/UserPropertiesScreen";
import MyTenantsScreen from "../screens/MyTenantsScreen";
import TenantProfile from "../screens/TenantProfile";
import UserSetting from "../screens/UserSetting";
import MyProfileSetting from "../screens/MyProfileSetting";
import EditUserProfile from "../screens/EditUserProfile";

import WalletScreen from "../screens/WalletScreens/WalletScreen";
import WalletAllPayments from "../screens/WalletScreens/WalletAllPayments";
import InvestmentDashboardScreen from "../screens/WalletScreens/InvestmentDashboardScreen";
import InvestNowScreen from "../screens/WalletScreens/InvestNowScreen";
import TwiddleWalletScreen from "../screens/WalletScreens/TwiddleWalletScreen";
import PayNowWalletScreen from "../screens/WalletScreens/PayNowWalletScreen";
import TwiddleMainProjectScreen from "../screens/TwiddleProjectsScreens/TwiddleMainProjectScreen";
import ProjectDetailScreen from "../screens/TwiddleProjectsScreens/ProjectDetailScreen";

import routes from "../config/routes";

const Stack = createStackNavigator();

const InsideNavigation = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="DisplayPropertiesScreen"
      component={DisplayPropertiesScreen}
    />
    <Stack.Screen
      name="DetailPropertyScreen"
      component={DetailPropertyScreen}
    />
    <Stack.Screen name={routes.PROFILE_SETTING} component={MyProfileSetting} />
    <Stack.Screen
      name={routes.OWNER_DETAIL_SCREEN}
      component={OwnerDetailScreen}
    />
    <Stack.Screen name={routes.OWNER_CHAT} component={OwnerChatScreen} />
    <Stack.Screen name={routes.STARTS_CHAT} component={OwnerStartsChat} />
    <Stack.Screen
      name={routes.VISIT_PROPERTY_CHARGES_SCREEN}
      component={VisitPropertCharges}
    />
    <Stack.Screen name={routes.RENT_SUCCESS_PAY} component={RentSuccessPay} />
    <Stack.Screen name={routes.RENT_PROPERTY} component={RentPropertyScreen} />
    <Stack.Screen
      name={routes.DETAIL_RENT_SCREEN}
      component={RentDetailPropertyScreen}
    />
    <Stack.Screen name={routes.RENT_PAY} component={RentPayScreen} />
    <Stack.Screen name={routes.SUCCESS_SCREEN} component={SuccessScreen} />
    <Stack.Screen name={routes.FILTER_PROPERTY} component={FilterScreen} />

    {/* user proveperties */}
    <Stack.Screen name="User1" component={UserPropertiesScreen} />
    <Stack.Screen name={routes.MY_TENANTS} component={MyTenantsScreen} />
    <Stack.Screen name={routes.TENANT_PROFILE} component={TenantProfile} />
    <Stack.Screen name={routes.USER_SETTING} component={UserSetting} />
    <Stack.Screen name={routes.EDIT_USER_PROFILE} component={EditUserProfile} />

    {/* form */}
    <Stack.Screen
      name="Form1"
      component={PostPropertyFormScreen1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="form2"
      component={PostPropertyFormScreen2}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.PROPERTY_ADD}
      component={SuccessAddProperty}
      options={{ headerShown: false }}
    />

    {/* checking here */}
    <Stack.Screen name={routes.WALEET_MAIN_SCREEN} component={WalletScreen} />
    <Stack.Screen
      name={routes.WALLET_ALL_PAYMENTS}
      component={WalletAllPayments}
    />
    <Stack.Screen
      name={routes.INVESTMENT_DASHBORAD}
      component={InvestmentDashboardScreen}
    />
    <Stack.Screen name={routes.INVEST_NOW} component={InvestNowScreen} />
    <Stack.Screen
      name={routes.TWIDDLE_WALLET}
      component={TwiddleWalletScreen}
    />
    <Stack.Screen name={routes.PAY_NOW_WALLET} component={PayNowWalletScreen} />

    {/* projects Stack here bcz of Dashborad navigation which is associated with wallet */}
    <Stack.Screen
      name={routes.TWIDDLE_PROJECTS_MAIN}
      component={TwiddleMainProjectScreen}
    />
    <Stack.Screen name="abc" component={ProjectDetailScreen} />
  </Stack.Navigator>
);

export default InsideNavigation;
