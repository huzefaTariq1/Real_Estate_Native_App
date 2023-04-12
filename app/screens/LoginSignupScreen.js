import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import Hhlogo from "../assets/hhlogo.svg";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const LoginSignupScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      {/* top image container */}
      <View style={styles.primarybox}>
        <Image
          style={styles.Image}
          source={require("../assets/logsignup.png")}
        />
      </View>
      {/* top image container close */}

      {/* bottom box ==secondary */}
      <View style={styles.secondarybox}>
        <Hhlogo width={140} height={80} />
        <AppText style={styles.text}>Welocme To Twidle</AppText>
        <View style={styles.buttonContainer}>
          <AppButton
            textcolor="white"
            title="login"
            borderColor="#1645f5"
            onPress={() => navigation.navigate("LoginTypeScreen")}
          />
          <AppButton
            title="Create an Account"
            onPress={() => navigation.navigate("TypeSelectScreen")}
            textcolor="primaryBlue"
            borderColor="#1645f5"
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  Image: {
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
  main: {
    flex: 1,
    width: "100%",
  },
  primarybox: {
    flex: 5,
    width: "100%",
    backgroundColor: "brown",
  },
  secondarybox: {
    flex: 4,
    width: "100%",
    backgroundColor: "#fafcfb",
    borderRadius: 30,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 17,
    paddingTop: 50,
    overflow: "hidden",
  },
  text: {
    paddingVertical: 10,
  },
});

export default LoginSignupScreen;
