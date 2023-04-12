import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const TransctionCard = ({ status, price, color }) => {
  return (
    <View style={styles.main}>
      <AppText style={{ fontSize: 11, fontWeight: "bold" }}>{status}</AppText>

      <AppText style={color === "red" ? styles.price1 : styles.price}>
        {price}
      </AppText>

      <AppText
        style={{
          fontSize: 11,
          color: "#8F92A1",
          postion: "relative",
          bottom: 20,
        }}
      >
        01-Aug-2023
      </AppText>
    </View>
  );
};

export default TransctionCard;

const styles = StyleSheet.create({
  main: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  price: { textAlign: "right", color: "#01E08F", fontSize: 12 },
  price1: { textAlign: "right", color: "#FF4D4D", fontSize: 12 },
});
