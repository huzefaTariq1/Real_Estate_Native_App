import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const SendMessage = ({ message, time }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.triangle} />
        <View style={styles.bubble}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
        <Text style={{ color: "#63697B" }}>{time}</Text>
      </View>
    </View>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 8,
    marginRight: 16,
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderLeftWidth: 10,
    borderLeftColor: "#2c62e2",
    borderBottomWidth: 10,
    borderBottomColor: "transparent",
    position: "absolute",
    right: -10,
    bottom: 0,
  },
  bubble: {
    backgroundColor: "#2c62e2",
    padding: 8,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: "80%",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
