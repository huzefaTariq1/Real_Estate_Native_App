import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Notify from "../assets/notify.svg";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    console.log("backedd");
    //navigation.navigate(routes.SIDE_DRAWER);
  };

  const handleRegistar = () => {
    console.log("notify");
  };
  return (
    <Screen>
      <View style={styles.main}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10 }}>Notifications</AppText>
        </View>

        <View style={styles.centerIcon}>
          <Notify width={100} height={100} />
        </View>
        <AppText style={{ textAlign: "center", color: "#9C9C9C" }}>
          No Notifications found
        </AppText>
      </View>
    </Screen>
  );
};

export default NotificationScreen;

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
  centerIcon: {
    alignItems: "center",
    paddingTop: 180,
  },
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
