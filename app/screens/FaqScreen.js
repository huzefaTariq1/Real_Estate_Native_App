import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import MyDropDown from "../components/MyDropDown";
import AppButton from "../components/AppButton";

const FaqScreen = () => {
  const [clicked, setClicked] = useState(false);

  const answer = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`;

  const navigation = useNavigation();
  return (
    <Screen style={{ backgroundColor: "white" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <AppText
          style={{ fontSize: 20, fontWeight: "800", paddingVertical: 20 }}
        >
          Frequently Asked Questions
        </AppText>

        {/* drop downs*/}
        <ScrollView height={600}>
          <MyDropDown question={"Lorem ipsum dolor?"} answer={answer} />

          <MyDropDown question={"Lorem ipsum dolor?"} answer={answer} />

          <MyDropDown question={"Lorem ipsum dolor?"} answer={answer} />

          <MyDropDown question={"Lorem ipsum dolor?"} answer={answer} />

          <View style={{ paddingTop: 20 }}>
            <AppButton
              textcolor="white"
              title="Submit Your Question"
              borderColor="#1645f5"
              onPress={() => console.log("tapped")}
            />
          </View>
        </ScrollView>

        {/* <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <AppButton
            textcolor="white"
            title="login"
            borderColor="#1645f5"
            onPress={() => console.log("tapped")}
          />
        </View> */}
      </View>
    </Screen>
  );
};

export default FaqScreen;

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
  img: {
    width: 26,
    height: 23,
    marginRight: 10,
    borderRadius: 14,
  },
});
