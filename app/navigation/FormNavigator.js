import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import LoginScreen from "../screens/LoginScreen";
// //import RegistarScreen from "../screens/RegisterScreen";
// import WelcomeScreen from "../screens/WelcomeScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import LoginSignupScreen from "../screens/LoginSignupScreen";
// import TypeSelectScreen from "../screens/TypeSelectScreen";
// import LoginTypeScreen from "../screens/LoginTypeScreen";
// import LoginFormREScreen from "../screens/LoginFormREScreen";
// import SignUpREScreen from "../screens/SignUpREScreen";
import PostPropertyFormScreen1 from "../screens/PostPropertyFormScreen1";
import PostPropertyFormScreen2 from "../screens/PostPropertyFormScreen2";
import DisplayPropertiesScreen from "../screens/DisplayPropertiesScreen";
import DetailPropertyScreen from "../screens/DetailPropertyScreen";
import UserPropertiesScreen from "../screens/UserPropertiesScreen";
import SuccessAddProperty from "../screens/SuccessAddProperty";
import routes from "../config/routes";
const Stack = createStackNavigator();

const FormNavigator = () => (
  <Stack.Navigator>
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

    {/* <Stack.Screen
      name="User1"
      component={UserPropertiesScreen}
      options={{ headerShown: false }}
    /> */}
    {/* <Stack.Screen name="TypeSelectScreen" component={TypeSelectScreen} />
    <Stack.Screen name="LoginFormREScreen" component={LoginFormREScreen} />
    <Stack.Screen name="SignUpREScreen" component={SignUpREScreen} /> */}
  </Stack.Navigator>
);

export default FormNavigator;
