import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Screen from "../components/Screen";
import Path from "../assets/path.svg";
import Email from "../assets/email.svg";

import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";

const HelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <Screen>
          <View style={{ paddingHorizontal: 10 }}>
            {/* back btn with text */}
            <View style={styles.topBackBtn}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.navigate("Home")}
              >
                <Ionicons name="chevron-back" size={20} color="black" />
              </TouchableOpacity>
              <AppText
                style={{ paddingLeft: 10, color: "white", fontSize: 12 }}
              >
                Back
              </AppText>
            </View>

            <View style={{ marginVertical: 10 }}>
              <AppText style={{ color: "white" }}>Request Help</AppText>
            </View>

            {/* girl icon */}

            <View
              style={{
                alignItems: "center",

                position: "relative",
                top: 23,
              }}
            >
              <Image
                style={styles.logo}
                source={require("../assets/girl.png")}
              />
            </View>
          </View>
        </Screen>
      </View>
      <View style={styles.secondarybox}>
        <View>
          <Path style={{ width: "100%", position: "relative", bottom: 100 }} />
          <View
            style={{
              zIndex: 1,
              // backgroundColor: "green",
              position: "relative",
              bottom: 500,
            }}
          >
            <AppText
              style={{ fontSize: 16, textAlign: "center", fontWeight: "600" }}
            >
              How Can we Help You
            </AppText>
            <AppText style={{ fontSize: 11, textAlign: "center" }}>
              Its Looks like You Are Experiancing Problem
            </AppText>
            <AppText style={{ fontSize: 11, textAlign: "center" }}>
              with out process.We are here to help
            </AppText>
            <AppText style={{ fontSize: 11, textAlign: "center" }}>
              so please get in touch with us
            </AppText>

            {/* mail box */}
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <View style={styles.mailbox}>
                <View>
                  <Email width={50} height={50} />
                  <AppText style={{ fontSize: 11 }}>Email Us</AppText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  ledgerText: { textAlign: "center", fontSize: 11 },
  logo: {
    width: 180,
    height: 180,
  },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  mailbox: {
    height: 150,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "white",
  },
  primarybox: {
    paddingHorizontal: 10,
    flex: 4,
    width: "100%",
    backgroundColor: "#2c62e2",
    //zIndex: 1,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // overflow: "hidden",
  },
  secondarybox: {
    flex: 4,
    width: "100%",
    backgroundColor: "#2c62e2",
    //borderRadius: 30,
    //alignItems: "flex-start",
    //paddingVertical: 30,
    // paddingHorizontal: 10,
    //paddingTop: 35,
    //overflow: "hidden",
  },

  topBackBtn: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },
});

export default HelpScreen;
