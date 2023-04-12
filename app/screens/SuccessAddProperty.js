import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import AppText from "../components/AppText";
import Success from "../assets/success.svg";

const SuccessAddProperty = () => {
  const handle = () => {
    navigation.replace("Form1");
    navigation.navigate("User1");
  };
  const navigation = useNavigation();
  return (
    // <View>
    //   <Text>SuccessScreen</Text>
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate("DisplayPropertiesScreen")}
    //   >
    //     <Text>go back</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{ backgroundColor: "#0336FF", flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 9,
          backgroundColor: "#0336FF",
        }}
      >
        <Success width={100} height={100} />
        <AppText
          style={{
            color: "white",
            paddingTop: 20,
            fontSize: 27,
            fontWeight: "700",
          }}
        >
          success!
        </AppText>
        <AppText style={{ color: "white" }}>You Successfully Make a </AppText>
        <AppText style={{ color: "white" }}>Payment </AppText>
      </View>
      <View style={styles.doneBtnContainer}>
        <TouchableOpacity style={styles.doneBtn} onPress={() => handle()}>
          <AppText style={{ color: "#0336FF", textAlign: "center" }}>
            Done
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessAddProperty;

const styles = StyleSheet.create({
  doneBtn: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  doneBtnContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#0336FF",
    paddingHorizontal: 20,
  },
});
