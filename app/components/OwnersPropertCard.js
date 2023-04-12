import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import Bed from "../assets/bed.svg";
import Car from "../assets/car.svg";
import Bath from "../assets/bath.svg";

export default function OwnersPropertCard({
  title,
  price,
  image,
  loc,
  catagery,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View elevation={5} style={styles.card}>
        <Image resizeMode="stretch" style={styles.image} source={image} />

        <View style={styles.detailContainer}>
          <View
            style={{
              alignItems: "flex-end",
              position: "relative",
              bottom: 155,
            }}
          >
            <Fontisto name="favorite" size={18} color="#ed546e" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppText style={styles.price}>
              {price} GHC{" "}
              <AppText style={{ fontWeight: "600" }}>/ month</AppText>
            </AppText>
          </View>
          <View style={styles.locConatiner}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo
                name="location-pin"
                size={17}
                color={colors.borderColor}
              />
              <AppText style={styles.loc}>{loc}</AppText>
            </View>

            <View style={styles.type}>
              <AppText style={styles.catagery}>{catagery}</AppText>
            </View>
          </View>

          {/* house details container */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Bed width={20} height={20} />
              <AppText style={{ fontSize: 10, paddingLeft: 10 }}>3 Bed</AppText>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Bath width={20} height={20} />
              <AppText style={{ fontSize: 10, paddingLeft: 10 }}>
                2 Bath
              </AppText>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Car width={20} height={20} />
              <AppText style={{ fontSize: 10, paddingLeft: 10 }}>
                2 Parking
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
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
    justifyContent: "space-between",
  },
  catagery: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
  },
  type: {
    backgroundColor: "#f39a3e",
    width: 90,
    borderRadius: 30,
  },
});
