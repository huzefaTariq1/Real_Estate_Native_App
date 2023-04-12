import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import routes from "../config/routes";
import AppText from "../components/AppText";

const NotificationSettingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const navigation = useNavigation();
  return (
    <Screen style={{ backgroundColor: "white" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate(routes.SETTING_MAIN_PAGE)}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* toogle btns container */}

        {/* block notification */}
        <View style={styles.btnContainer}>
          <AppText>Block All Notifications</AppText>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#0336FF" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        {/* mute message */}

        <View style={styles.btnContainer}>
          <AppText>Block All Notifications</AppText>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#0336FF" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>

        {/* hide statusbar */}

        <View style={styles.btnContainer}>
          <AppText>Hide Status Bar Notification</AppText>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#0336FF" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>

        {/* hide lock screen */}

        <View style={styles.btnContainer}>
          <AppText>Hide Lock Screen Notifications</AppText>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#0336FF" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default NotificationSettingScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderBottomColor: "#93A8AF",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
  },
  backBtn: {
    height: 30,
    width: 30,
    backgroundColor: colors.primaryBlue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
