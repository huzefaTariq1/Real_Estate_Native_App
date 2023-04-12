import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { StatusBar } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Notify from "../assets/notify.svg";
import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";
import AppButton from "../components/AppButton";
import Selector from "../components/Selector";
import YearlySelector from "../components/YearlySelector";
import { ScrollView } from "react-native";

const RentPropertyScreen = ({ route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const navigation = useNavigation();

  const userProperty = route.params;
  const handleBack = () => {
    console.log("backedd");
    //navigation.navigate(routes.SIDE_DRAWER);
  };

  const handleRegistar = () => {
    console.log("notify");
  };
  return (
    <Screen style={{ backgroundColor: "white" }}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.main}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() =>
              //navigation.navigate("DetailPropertyScreen", userProperty)
              navigation.goBack()
            }
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10 }}>
            Rent Detailss Collection
          </AppText>
        </View>

        {/* herder close */}

        <View style={{ paddingVertical: 10 }}>
          <AppText style={styles.headings}>Make Advance Payments</AppText>
          <AppText style={styles.smallheading}>
            Switch To Identicate your Service
          </AppText>
        </View>

        {/* toogle btns container */}

        <View style={styles.btnContainer}>
          <AppText>First Three Months &#40;3&#41;</AppText>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#0336FF" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <AppText>Block All Notifications</AppText>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#0336FF" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#FFFFFF"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>

        {/* toogle btns container close */}

        <View style={{ paddingBottom: 10 }}>
          <AppText style={styles.headings}>Period Occupancy</AppText>
          <AppText style={styles.smallheading}>
            Tap to Select how long you want to stay in this property
          </AppText>
        </View>

        {/* drop down */}
        <Selector />

        <View style={{ paddingTop: 10 }}>
          <AppText style={styles.headings}>Period Occupancy</AppText>
          <AppText style={styles.smallheading}>
            Tap to Select how long you want to stay in this property
          </AppText>
        </View>

        <YearlySelector />

        <View style={{ paddingTop: 20 }}>
          <AppButton
            textcolor="white"
            title="Continoue"
            borderColor="#1645f5"
            onPress={() =>
              navigation.navigate(routes.DETAIL_RENT_SCREEN, userProperty)
            }
          />
        </View>
      </View>
    </Screen>
  );
};

export default RentPropertyScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#93A8AF",
    borderRadius: 6,

    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backBtn: {
    height: 30,
    width: 30,
    backgroundColor: colors.primaryBlue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  centerIcon: {
    alignItems: "center",
    paddingTop: 180,
  },
  headings: {
    color: "#0336FF",
    fontWeight: "600",
  },
  headingContainer: {
    borderWidth: 1,
    borderBottomColor: "#E9E9EC",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    paddingVertical: 7,
  },
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: { fontSize: 10, textAlign: "center" },
  smallText1: { fontSize: 10, textAlign: "center", color: "#0336FF" },
  smallheading: { fontSize: 11, color: "#9C9C9C" },
});
