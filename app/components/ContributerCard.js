import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const ContributerCard = ({ source, contributer }) => {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={source}
          style={{
            width: 35,
            height: 34,
            marginRight: 10,
          }}
        />
        <AppText style={{ fontSize: 10 }}>{contributer}</AppText>
      </View>
    </View>
  );
};

export default ContributerCard;

const styles = StyleSheet.create({
  main: {
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
