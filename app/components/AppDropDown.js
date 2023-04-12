import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import ListItemSeparator from "./ListItemSeparator";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";

const AppDropDown = ({ handleChangere }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyType, setPropertyType] = useState("Commercial");

  // useEffect(() => {
  //   toggleModal();
  //   console.log("World city updated", propertyType);
  // }, [propertyType]);

  const toggleModal = (type) => {
    setPropertyType(type);
    setModalVisible(false);
    handleChangere(propertyType);
  };

  const openModal = () => {
    setModalVisible(true);
  };
  var a = "abc";
  return (
    <View style={styles.main}>
      <View style={styles.heading}>
        <Text style={styles.dropDownText1}>Select Real Estate Types</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={openModal}
        >
          <Text style={styles.dropDownText}>
            {propertyType ? propertyType : "Commercial"}
          </Text>
          <View style={{ justifyContent: "center", paddingRight: 10 }}>
            <AntDesign name="caretdown" size={14} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationIn={"slideInRight"} isVisible={isModalVisible}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => toggleModal("Commercial Properties")}
          >
            <Text style={styles.text}>Commercial Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleModal("Residential Properties")}
          >
            <Text style={styles.text}>Residential Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleModal("Industrial Properties")}
          >
            <Text style={styles.text}>Industrial Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleModal("Land")}>
            <Text style={styles.text}>Land</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownText: {
    fontSize: 20,
    padding: 10,
  },
  dropDownText1: {
    fontSize: 21,
    padding: 10,
    color: colors.primaryBlue,
    fontWeight: "600",
  },
  heading: {
    borderBottomColor: colors.lightGreyBackground,
    borderBottomWidth: 2,
  },
  main: {
    marginBottom: 30,
    borderRadius: 10,
    width: "100%",
    backgroundColor: colors.white,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 10,
    paddingLeft: 8,
  },
});

export default AppDropDown;
