import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./AppText";

const MyDropDown = ({ question, answer }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderRadius: 30,
          // borderWidth: 0.5,
          // alignSelf: "center",
          //marginTop: 100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: "#F2F6FE",
          marginBottom: 10,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "600", color: "black" }}>{question}</Text>
        </View>
        {clicked ? (
          <AntDesign name="up" size={15} color="black" />
        ) : (
          <AntDesign name="down" size={15} color="black" />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 4,
            height: 110,
            alignSelf: "center",
            width: "100%",
            backgroundColor: "#F2F6FE",
            borderRadius: 30,
            padding: 20,
            marginBottom: 10,
          }}
        >
          <View>
            <AppText style={{ fontSize: 10, color: "#9C9C9C" }}>
              {answer}
            </AppText>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default MyDropDown;

const styles = StyleSheet.create({});
