import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, style, ...otherProps }) {
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
    paddingVertical: 7,
    marginVertical: 10,
    borderColor: "#D2D2D2",
    borderWidth: 2,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 12,
  },
});

export default AppTextInput;
