import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";

const data1 = [{ time: "Weekly" }, { time: "Bi-Weekly" }, { time: "Monthly" }];

const YearlySelector = () => {
  const [clicked, setClicked] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("Monthly");

  return (
    <View>
      <TouchableOpacity
        style={{
          width: "100%",
          paddingVertical: 15,
          borderRadius: 7,
          borderWidth: 0.5,
          borderColor: "#707070",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: "white",
          marginTop: 13,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "600" }}>
            {selectedCountry == "" ? "Select Country" : selectedCountry}
          </Text>
        </View>
        {clicked ? (
          <AntDesign name="up" size={15} color="#0336FF" />
        ) : (
          <AntDesign name="down" size={15} color="#0336FF" />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 100,
            alignSelf: "center",
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          {/* <TextInput
                placeholder="Search.."
                placeholderTextColor="#FFF"
                value={search}
                ref={searchRef}
                onChangeText={(txt) => {
                  onSearch(txt);
                  setSearch(txt);
                }}
                style={{
                  width: "90%",
                  height: 50,
                  alignSelf: "center",
                  borderWidth: 0.2,
                  borderColor: "white",
                  borderRadius: 7,
                  marginTop: 20,
                  paddingLeft: 20,
                  color: "white",
                }}
              /> */}

          <FlatList
            data={data1}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "85%",
                    alignSelf: "center",
                    height: 30,
                    justifyContent: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "white",
                  }}
                  onPress={() => {
                    setSelectedCountry(item.time);

                    setClicked(!clicked);
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={
                        selectedCountry == item.time
                          ? styles.textt1
                          : styles.textt
                      }
                    >
                      {item.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 26,
    height: 23,
    marginRight: 10,
    borderRadius: 14,
  },
  textt: { fontWeight: "600" },
  textt1: { fontWeight: "600", color: "#0336FF" },
});

export default YearlySelector;
