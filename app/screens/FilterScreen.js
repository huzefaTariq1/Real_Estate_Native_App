import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import AppText from "../components/AppText";
import colors from "../config/colors";

import Screen from "../components/Screen";
import { BorderlessButton } from "react-native-gesture-handler";

const FilterScreen = () => {
  const navigation = useNavigation();
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(100);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState("sale");
  const [selected1, setSelected1] = useState(2);

  const handleClick = (value) => {
    setSelected(value);
    console.log(value);
  };

  const handleClick1 = (value) => {
    setSelected1(value);
    console.log(value);
  };

  return (
    <View style={{ backgroundColor: "#0336FF", flex: 1 }}>
      <View
        style={{
          flex: 9,
          backgroundColor: "white",
        }}
      >
        {/* topbar */}
        <View style={styles.topBar11}>
          <View style={styles.filterTextContainer111}>
            <AppText style={styles.filterText111}>FILTERS</AppText>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.crossBtn}
          >
            <Entypo name="cross" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* topbar end */}

        <View style={{ paddingHorizontal: 10 }}>
          <AppText style={{ fontWeight: "bold", fontSize: 20 }}>Type</AppText>
          {/* filter btns */}
          <View style={styles.filterBtn}>
            <View>
              <TouchableOpacity
                style={
                  selected === "sale" ? styles.buttonBlue : styles.buttonGrey
                }
                onPress={() => handleClick("sale")}
              >
                <Text
                  style={
                    selected === "sale" ? styles.textWhite : styles.textBlack
                  }
                >
                  sale
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={
                  selected === "rent" ? styles.buttonBlue : styles.buttonGrey
                }
                onPress={() => handleClick("rent")}
              >
                <Text
                  style={
                    selected === "rent" ? styles.textWhite : styles.textBlack
                  }
                >
                  Rent
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={
                  selected === "short_stay"
                    ? styles.buttonBlue
                    : styles.buttonGrey
                }
                onPress={() => handleClick("short_stay")}
              >
                <Text
                  style={
                    selected === "short_stay"
                      ? styles.textWhite
                      : styles.textBlack
                  }
                >
                  Short Stay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* filter btns end */}

          <AppText style={{ fontWeight: "bold", fontSize: 20 }}>Rooms</AppText>

          {/* filter btns rooms */}

          <View style={styles.filterBtn1}>
            <View>
              <TouchableOpacity
                style={selected1 == 1 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(1)}
              >
                <Text
                  style={selected1 == 1 ? styles.textWhite : styles.textBlack}
                >
                  1 Room
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={selected1 == 2 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(2)}
              >
                <Text
                  style={selected1 == 2 ? styles.textWhite : styles.textBlack}
                >
                  2 Room
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={selected1 == 3 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(3)}
              >
                <Text
                  style={selected1 == 3 ? styles.textWhite : styles.textBlack}
                >
                  3 Room
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={selected1 == 4 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(4)}
              >
                <Text
                  style={selected1 == 4 ? styles.textWhite : styles.textBlack}
                >
                  4 Room
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={selected1 == 5 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(5)}
              >
                <Text
                  style={selected1 == 5 ? styles.textWhite : styles.textBlack}
                >
                  5 Room
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 2nd row filter rooms */}
          <View style={styles.filterBtn1}>
            <View>
              <TouchableOpacity
                style={selected1 == 6 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(6)}
              >
                <Text
                  style={selected1 == 6 ? styles.textWhite : styles.textBlack}
                >
                  6 Room
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={selected1 == 7 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(7)}
              >
                <Text
                  style={selected1 == 7 ? styles.textWhite : styles.textBlack}
                >
                  7 Room
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={selected1 == 8 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(8)}
              >
                <Text
                  style={selected1 == 8 ? styles.textWhite : styles.textBlack}
                >
                  8 Room
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={selected1 == 9 ? styles.buttonBlue1 : styles.buttonGrey1}
                onPress={() => handleClick1(9)}
              >
                <Text
                  style={selected1 == 9 ? styles.textWhite : styles.textBlack}
                >
                  9 Room
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={
                  selected1 == 10 ? styles.buttonBlue1 : styles.buttonGrey1
                }
                onPress={() => handleClick1(10)}
              >
                <Text
                  style={selected1 == 10 ? styles.textWhite : styles.textBlack}
                >
                  10 Room
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* filter btn rooms end here */}

          <AppText style={{ fontWeight: "bold", fontSize: 20 }}>
            Price Range
          </AppText>

          {/* showing price ranges container */}

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "20%" }}>
              <AppText style={{ textAlign: "center", fontWeight: "bold" }}>
                From
              </AppText>
              <View style={styles.value}>
                <AppText style={{ textAlign: "center" }}>{fromValue}</AppText>
              </View>
            </View>

            <View style={{ width: "20%" }}>
              <AppText style={{ textAlign: "center", fontWeight: "bold" }}>
                To
              </AppText>
              <View style={styles.value}>
                <AppText style={{ textAlign: "center" }}>{toValue}</AppText>
              </View>
            </View>
          </View>

          {/* to value
          <View style={{ width: "20%" }}>
            <AppText style={{ textAlign: "center" }}>To</AppText>
            <View
              style={{
                borderWidth: 2,
                borderBottomColor: "#8F92A1",
                borderTopColor: "white",
                borderLeftColor: "white",
                borderRightColor: "white",
              }}
            >
              <AppText style={{ textAlign: "center" }}>{toValue}</AppText>
            </View>
          </View> */}
        </View>

        <View style={styles.container}>
          <View>
            <RangeSlider
              min={10}
              max={100}
              fromValueOnChange={(value) => setFromValue(value)}
              toValueOnChange={(value) => setToValue(value)}
              initialFromValue={0}
            />
          </View>
          {/* <Text>from value: {fromValue}</Text>
         <Text>to value: {toValue}</Text> */}
        </View>
      </View>
      <View style={styles.doneBtnContainer}>
        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation.navigate("DisplayPropertiesScreen")}
        >
          <AppText style={{ color: "white", textAlign: "center" }}>
            Apply Filter
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  buttonBlue: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,

    width: 105,
    marginVertical: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  buttonGrey: {
    backgroundColor: "#EAEEFA",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    width: 105,

    marginVertical: 10,
    borderColor: "#EAEEFA",
    borderWidth: 2,
  },
  buttonBlue1: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 7,
    marginVertical: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  buttonGrey1: {
    backgroundColor: "#EAEEFA",
    borderRadius: 6,
    paddingHorizontal: 7,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,

    marginVertical: 10,
    borderColor: "#EAEEFA",
    borderWidth: 2,
  },
  crossBtn: {
    backgroundColor: "#0336FF",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  doneBtnContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  doneBtn: {
    backgroundColor: "#0336FF",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  filterText111: { textAlign: "center", fontSize: 20 },
  filterTextContainer111: { width: "90%" },
  filterBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterBtn1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBar11: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWhite: {
    color: colors.white,
    fontSize: 12,
    textTransform: "uppercase",
  },
  textBlack: {
    color: "black",
    fontSize: 12,
    textTransform: "uppercase",
  },
  value: {
    borderWidth: 2,
    borderBottomColor: "#8F92A1",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
  },
});
