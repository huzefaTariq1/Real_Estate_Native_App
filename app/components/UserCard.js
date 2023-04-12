import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

const UserCard = ({ title, price, image, loc, catagery }) => {
  let backgroundColor;

  switch (catagery) {
    case "sale":
      backgroundColor = "#0336FF";
      break;
    case "rent":
      backgroundColor = "#FF9A03";
      break;
    case "Short Stay":
      backgroundColor = "#01E08F";
      break;
    default:
      backgroundColor = "#01E08F";
  }

  return (
    <View elevation={5} style={styles.card}>
      <Image resizeMode="stretch" style={styles.image} source={image} />
      {/* <View style={styles.type}>
      <AppText style={styles.catagery}>{catagery}</AppText>
    </View> */}
      <View style={styles.detailContainer}>
        <View style={[styles.type, { backgroundColor }]}>
          <AppText style={styles.catagery}>{catagery}</AppText>
        </View>
        <AppText style={styles.title}>{title}</AppText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AppText style={styles.price}>{price}</AppText>
          <AppText>month</AppText>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.locConatiner}>
            <Entypo name="location-pin" size={17} color={colors.borderColor} />
            <AppText style={styles.loc}>oyalia</AppText>
          </View>
          <View style={styles.editIcon}>
            <FontAwesome5 name="edit" size={13} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: colors.medium,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  editIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 170,
  },
  detailContainer: {
    padding: 10,
    paddingTop: 3,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "800",
  },
  loc: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.medium,
    paddingLeft: 3,
  },
  locConatiner: {
    flexDirection: "row",
    alignItems: "center",
  },
  catagery: {
    color: "white",
    textAlign: "center",
  },
  type: {
    // backgroundColor: "#f39a3e",
    width: 100,
    borderRadius: 30,
    position: "relative",
    bottom: 13,
  },
});
export default UserCard;
