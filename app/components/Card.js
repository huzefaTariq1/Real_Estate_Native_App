import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({ title, price, image, loc, catagery, onPress }) {
  let backgroundColor;

  switch (catagery) {
    case "sale":
      backgroundColor = "#0336FF";
      break;
    case "rent":
      backgroundColor = "#FF9A03";
      break;
    case "short_stay":
      backgroundColor = "#01E08F";
      break;
    default:
      backgroundColor = "#01E08F";
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View elevation={5} style={styles.card}>
        <Image resizeMode="stretch" style={styles.image} source={image} />

        <View style={styles.detailContainer}>
          <View style={[styles.type, { backgroundColor }]}>
            <AppText style={styles.catagery}>{catagery}</AppText>
          </View>

          <View
            style={{ alignSelf: "flex-end", position: "relative", bottom: 170 }}
          >
            <View style={styles.addFavourte}>
              <Fontisto name="favorite" size={16} color="#0336FF" />
            </View>
          </View>

          <View style={styles.nestedDetail}>
            <AppText style={styles.title}>{title}</AppText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AppText style={styles.price}>
                {price} <AppText>month</AppText>
              </AppText>
            </View>
            <View style={styles.locConatiner}>
              <Entypo
                name="location-pin"
                size={17}
                color={colors.borderColor}
              />
              <AppText style={styles.loc}>{loc}</AppText>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  addFavourte: {
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: 170,
  },
  detailContainer: {
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
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
    fontSize: 13,
  },
  nestedDetail: { position: "relative", bottom: 25 },
  type: {
    // backgroundColor: "#f39a3e",
    width: 100,
    borderRadius: 30,
    position: "relative",
    bottom: 13,
  },
  type2: {
    backgroundColor: "#0336FF",
    width: 100,
    borderRadius: 30,
    position: "relative",
    bottom: 13,
  },
  type3: {
    backgroundColor: "green",
    width: 100,
    borderRadius: 30,
    position: "relative",
    bottom: 13,
  },
});
