import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReceiveMessage = ({ message, time }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.triangle} />
        <View style={styles.bubble}>
          <Text style={styles.text}>{message}</Text>
        </View>
        <View style={styles.triangle} />
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
        <Text style={{ color: "#63697B" }}>{time}</Text>
      </View>
    </View>
  );
};

export default ReceiveMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    margin: 8,
    marginRight: 16,
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "#EAECF2",
    borderBottomWidth: 10,
    borderBottomColor: "transparent",
    position: "absolute",
    left: -8,
    bottom: 0,
  },
  bubble: {
    backgroundColor: "#EAECF2",
    padding: 8,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: "80%",
  },
  text: {
    color: "#000000",
    fontSize: 16,
  },
});
