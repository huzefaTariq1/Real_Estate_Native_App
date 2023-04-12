import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <Screen style={styles.screens}>
      <Image
        style={styles.logo}
        source={require("../assets/mytwidlelogo.png")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {},
});

export default WelcomeScreen;
