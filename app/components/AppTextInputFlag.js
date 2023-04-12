import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInputFlag({ icon, style, ...otherProps }) {
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
      <Image style={styles.imgg} source={require("../assets/gflag.png")} />
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 9,
    marginVertical: 10,
    borderColor: "#D2D2D2",
    borderWidth: 2,
  },
  icon: {
    marginRight: 10,
  },

  imgg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default AppTextInputFlag;
