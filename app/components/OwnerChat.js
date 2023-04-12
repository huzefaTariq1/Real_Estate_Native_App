import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AppText from "./AppText";
import React from "react";

const OwnerChat = ({ onPress, source, name, msg }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.main}>
        <View style={styles.insideConatiner}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={source} style={styles.img} />
            <View>
              <AppText style={{ fontSize: 10 }}>{name}</AppText>
              <AppText style={{ fontSize: 10 }}>{msg}</AppText>
            </View>
          </View>
          <View>
            <AppText style={{ fontSize: 12, color: "#9C9C9C" }}>now</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OwnerChat;

const styles = StyleSheet.create({
  main: {
    height: 70,
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
  insideConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 45,
    height: 44,
    marginRight: 10,
  },
  timeText: { fontSize: 10, color: "#FF9A03", textAlign: "center" },
  timeText1: { fontSize: 10, color: "#01E08F", textAlign: "center" },
});
