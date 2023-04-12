import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState();
  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <Image
          style={styles.Image}
          source={require("../assets/logsignup.png")}
        />
      </View>
      <View style={styles.secondarybox}>
        <AppText style={styles.headingText}>Enter Your Email</AppText>
        <AppText style={styles.text}>Email</AppText>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          name={email}
          placeholder="example@gmail.com"
          textContentType="emailAddress"
        />

        <AppButton
          title="Continue"
          textcolor="white"
          color="primaryBlue"
          borderColor="#1645f5"
          onPress={() => console.log(email, password)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },

  headingText: {
    color: colors.primaryBlue,
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  text: {
    fontWeight: "700",
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
    flex: 2,
    width: "100%",
    backgroundColor: "brown",
  },
  secondarybox: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fafcfb",
    borderRadius: 30,
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 17,
    paddingTop: 50,
    overflow: "hidden",
  },
});

export default ForgotPasswordScreen;
