import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import routes from "../config/routes";
import colors from "../config/colors";
import AppText from "../components/AppText";

const UserSetting = ({ navigation }) => {
  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={20} color="white" />
      </TouchableOpacity>

      {/* top conatiner btn */}

      <View style={styles.topBar}>
        <AppText style={styles.heading}>Setting</AppText>
        <TouchableOpacity>
          <AppText style={styles.log}>Logout</AppText>
        </TouchableOpacity>
      </View>

      {/* btns */}

      {/* profile seeting */}
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.PROFILE_SETTING)}
        style={styles.btns}
      >
        <AppText>My Profiles</AppText>
        <AntDesign name="arrowright" size={20} color="#0336FF" />
      </TouchableOpacity>

      {/* identity verified */}
      <TouchableOpacity style={styles.btns1}>
        <View style={{ flexDirection: "row" }}>
          <Feather name="user-check" size={17} color="white" />
          <AppText style={{ marginLeft: 4, color: "white" }}>
            Identity Verified
          </AppText>
        </View>
        <AntDesign name="checkcircle" size={20} color="white" />
      </TouchableOpacity>

      {/* heading */}
      <View style={{ paddingVertical: 10 }}>
        <AppText style={styles.heading}>Other</AppText>
      </View>

      {/* gps setting */}
      <TouchableOpacity style={styles.btns}>
        <AppText>Your Gps location</AppText>
        <AntDesign name="arrowright" size={20} color="#0336FF" />
      </TouchableOpacity>

      {/* help and suuppor */}
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.HELP)}
        style={styles.btns}
      >
        <AppText>Help And Support</AppText>
        <AntDesign name="arrowright" size={20} color="#0336FF" />
      </TouchableOpacity>

      {/* app setting */}
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.SETTING_NAVIGATION)}
        style={styles.btns}
      >
        <AppText>App Setting</AppText>
        <AntDesign name="arrowright" size={20} color="#0336FF" />
      </TouchableOpacity>
    </Screen>
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  backBtn: {
    height: 30,
    width: 30,
    backgroundColor: colors.primaryBlue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderColor: "#14469626",
    marginBottom: 10,
  },
  btns1: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: "#0336FF",
    borderColor: "#0336FF",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  log: {
    color: "#0336FF",
    fontWeight: "bold",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});
