import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

const ServiceProviderCard = () => {
  return (
    <TouchableWithoutFeedback>
      <View elevation={5} style={styles.card}>
        <AppText>Heelo World</AppText>
        <AppText>Heelo World</AppText>
        <AppText>Heelo World</AppText>
        <AppText>Heelo World</AppText>
        <AppText>Heelo World</AppText>
        <AppText>Heelo World</AppText>
      </View>
    </TouchableWithoutFeedback>
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
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 10,
    paddingTop: 3,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "800",
  },
  loc: {
    fontSize: 20,
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
    backgroundColor: "#f39a3e",
    width: 100,
    borderRadius: 30,
    position: "relative",
    bottom: 13,
  },
});

export default ServiceProviderCard;
