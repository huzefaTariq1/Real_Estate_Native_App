import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/AppText";

const AboutTwidleScreen = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* heading */}
        <AppText
          style={{ fontSize: 20, fontWeight: "800", paddingVertical: 20 }}
        >
          About Twidle
        </AppText>

        <ScrollView height={600}>
          {/* dummy policy text */}
          <AppText style={{ fontSize: 11, paddingBottom: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </AppText>

          <AppText style={{ fontSize: 11 }}>
            {" "}
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </AppText>

          <AppText style={{ fontSize: 11 }}>
            {" "}
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </AppText>

          <AppText style={{ fontSize: 11, paddingBottom: 16 }}>
            {" "}
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </AppText>

          <AppText style={{ fontSize: 11 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </AppText>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default AboutTwidleScreen;

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
});
