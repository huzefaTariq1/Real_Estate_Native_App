import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function AppTextInputCurrency({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      {/* <Image style={styles.imgg} source={require("../assets/gflag.png")} /> */}
      <View
        style={{
          backgroundColor: "#F2F6FE",
          padding: 6,
          borderWidth: 2,
          borderRightColor: "#0336FF",
          borderTopColor: "#F2F6FE",
          borderLeftColor: "#F2F6FE",
          borderBottomColor: "#F2F6FE",
          marginRight: 40,
        }}
      >
        <AppText>GHC</AppText>
      </View>
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F6FE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 9,
    marginVertical: 10,
    // borderColor: "#D2D2D2",
    //borderWidth: 2,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
  },
  imgg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default AppTextInputCurrency;
