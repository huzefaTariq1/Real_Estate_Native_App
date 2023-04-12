import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Ttlogo from "../assets/ttlogo.svg";

const WelcomeScreen3 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#0336FF", flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 9,
          backgroundColor: "#1F47F5",
        }}
      >
        <View style={styles.tlogo}>
          <View style={styles.horilog}>
            <Ttlogo width={140} height={180} />
          </View>
          <View style={styles.middleCircle}>
            <View style={styles.smallCircle}>
              <Image
                style={styles.logo}
                source={require("../assets/rocket.png")}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Invest In</Text>
            <Text style={styles.text}>Real Estate</Text>
          </View>
        </View>
      </View>
      {/* last btns sections */}
      <View style={styles.doneBtnContainer}>
        <View style={styles.lastSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginSignupScreen")}
            style={styles.smallbutton}
          >
            <Text>Skips</Text>
          </TouchableOpacity>
          <View style={styles.dotcontainer}>
            <View style={styles.dot}></View>

            <View style={styles.dot}></View>
            <View style={styles.dot1}></View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginSignupScreen")}
            style={styles.nexticon}
          >
            <Text style={{ color: "#fff", marginRight: 4 }}>Nexts</Text>
            <Image source={require("../assets/nexticon.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
    marginLeft: 10,
  },
  horilog: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "grey",
    height: 100,
  },
  // screens: {
  //   flex: 1,
  //   backgroundColor: colors.primaryBlue,
  //   alignItems: "center",
  //   width: "100%",
  // },
  middleCircle: {
    backgroundColor: "#345bf6",
    width: 400,
    height: 400,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: {
    backgroundColor: "#496bf6",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logo: {
    height: 200,
    width: 210,
  },
  tlogo: {
    alignItems: "center",
  },
  textContainer: {
    color: "#fff",
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },
  lastSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
    paddingHorizontal: 12,
  },
  smallbutton: {
    backgroundColor: "#fafafa",
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 8,
  },
  nexticon: {
    flexDirection: "row",

    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  dot1: {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  dotcontainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    width: 30,
    justifyContent: "space-between",
  },

  doneBtn: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  doneBtnContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#1F47F5",
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen3;
