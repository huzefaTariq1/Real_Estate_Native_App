import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
const TypeSelectScreen = ({ navigation }) => {
  const [chosenOption, setChosenOption] = useState("Real Estate");
  const options = [
    { label: "Real Estate", value: "Real Estate" },
    {
      label: "FSP (Finalcial Service Provider)",
      value: "FSP (Finalcial Service Provider)",
    },
    { label: "Service Provider", value: "Service Provider" },
  ]; //cr

  const handleBack = () => {
    navigation.navigate("LoginSignupScreen");
  };
  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <Image
          style={styles.Image}
          source={require("../assets/logsignup.png")}
        />
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.secondarybox}>
        <AppText style={styles.headingText}>Account Type:</AppText>
        <View>
          <View style={styles.selectorContainer}>
            <RadioForm
              radio_props={options}
              initial={0}
              buttonColor={"#9C9C9C"} // change the color of the radio button
              selectedButtonColor={"#0336FF"} // change the color of the selected radio button
              buttonSize={12} // change the size of the radio button
              labelStyle={{ fontSize: 16, color: "#000" }} // modify the style of the radio button label
              onPress={(value) => {
                setChosenOption(value);
              }}
            />
          </View>
        </View>

        <AppButton
          title="Continue"
          onPress={() =>
            navigation.navigate("SignUpREScreen", { chosenOption })
          }
          textcolor="white"
          color="primaryBlue"
          borderColor="#1645f5"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 32,
    width: 32,
    backgroundColor: colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 43,
    left: 20,
  },
  backbtnText: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    fontSize: 30,
    fontWeight: "300",
    paddingBottom: 5,
  },
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
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
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
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 17,
    paddingTop: 70,
    overflow: "hidden",
  },
  selectorContainer: {
    paddingVertical: 25,
  },
  text: {
    paddingVertical: 10,
  },
});

export default TypeSelectScreen;
