// import { View, Text, Image, StyleSheet } from "react-native";
// import React from "react";
// import AppButton from "./AppButton";
// import Modal from "react-native-modal";
import React, { useState } from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import AppButton from "./AppButton";
const CompleteModal = ({ route, navigation }) => {
  const [isModalVisible, setModalVisible] = useState(true);

  //var email = route.params.email;
  console.log(route.params);

  const toggleModal = () => {
    setModalVisible(false);
    navigation.navigate("LoginSignupScreen");
    console.log(isModalVisible);
  };

  return (
    <View>
      <Modal animationIn={"tada"} isVisible={isModalVisible}>
        <View style={styles.main}>
          <Image source={require("../assets/tickicon.png")} />
          <Text style={styles.mainText}>Check Your Email To Verify</Text>
          <Text style={styles.mainText1}>the Account!</Text>
          <Text style={styles.secondryText}>{route.params}</Text>
          <AppButton
            title="OK"
            textcolor="white"
            color="primaryBlue"
            borderColor="#1645f5"
            onPress={toggleModal}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: 300,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
  },
  mainText1: {
    fontSize: 18,
    fontWeight: "500",
  },
  secondryText: {
    color: "#74bef0",
    fontSize: 18,
    paddingBottom: 10,
  },
});

export default CompleteModal;
