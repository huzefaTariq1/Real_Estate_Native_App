import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Screen from "../components/Screen";

import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppDropDown from "../components/AppDropDown";

import client from "../api/client";
import AppText from "../components/AppText";
import ServiceProviderCard from "../components/ServiceProviderCard";

const ServiceProviderScreen = () => {
  const [search, setSearch] = useState();
  const [selected, setSelected] = useState("sale");
  const [valuere, setValuere] = useState("commercial");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadListing();
  }, [selected]);

  const loadListing = async () => {
    setLoading(true);
    // const response = await listings.getListings();
    const response = await client.get(
      `/api/property/filter/type?search=${selected}`
    );
    setLoading(false);

    if (!response.ok) {
      console.log(response);
      setError(true);
      return;
    }
    setError(false);
    // console.log(response.data);
    setData(response.data);
  };

  const handleClick = (value) => {
    setSelected(value);
    console.log(value);
  };

  const handleChangere = (newValue) => {
    setValuere(newValue);
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.topBar}>
        <View style={styles.humburger}>
          <MaterialCommunityIcons
            name="forwardburger"
            size={24}
            color="black"
          />
        </View>
        <View>
          <AppTextInput
            style={styles.container}
            icon="home-search"
            onChangeText={(text) => setSearch(text)}
            name={search}
            placeholder="Search"
          />
        </View>
        <View style={styles.filter}>
          <Feather name="filter" size={21} color={colors.white} />
        </View>
      </View>

      <View style={styles.filterBtn}>
        <View>
          <TouchableOpacity
            style={selected === "sale" ? styles.buttonBlue : styles.buttonGrey}
            onPress={() => handleClick("sale")}
          >
            <Text
              style={selected === "sale" ? styles.textWhite : styles.textBlack}
            >
              sale
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={selected === "rent" ? styles.buttonBlue : styles.buttonGrey}
            onPress={() => handleClick("rent")}
          >
            <Text
              style={selected === "rent" ? styles.textWhite : styles.textBlack}
            >
              Rent
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={
              selected === "Short Stay" ? styles.buttonBlue : styles.buttonGrey
            }
            onPress={() => handleClick("Short Stay")}
          >
            <Text
              style={
                selected === "Short Stay" ? styles.textWhite : styles.textBlack
              }
            >
              Short Stay
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <AppDropDown handleChangere={handleChangere} />

      <AppText style={styles.HeadingText}>Service Provider</AppText>

      {/* <ServiceProviderCard /> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonBlue: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,

    marginVertical: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  buttonGrey: {
    backgroundColor: colors.unselctedbtn,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderColor: colors.unselctedbtn,
    borderWidth: 2,
  },
  container: {
    borderRadius: 30,
    width: 220,
  },
  filter: {
    width: 36,
    height: 36,
    backgroundColor: colors.primaryBlue,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.medium,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  filterBtn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  filterBtnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingTop: 10,
  },
  HeadingText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  humburger: {
    width: 36,
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.medium,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  screen: {
    paddingHorizontal: 6,
    backgroundColor: "#FAFBFF",
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWhite: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
  textBlack: {
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default ServiceProviderScreen;
