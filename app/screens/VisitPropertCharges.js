import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Notify from "../assets/notify.svg";
import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";
import AppButton from "../components/AppButton";

const VisitPropertCharges = ({ route }) => {
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
              navigation.navigate("DetailPropertyScreen", userProperty)
            }
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10 }}>Visit Property Charges</AppText>
        </View>

        {/* topbar close */}

        <View style={styles.headingContainer}>
          <AppText style={{ fontSize: 17, color: "#0336FF" }}>
            Charges BreakDown
          </AppText>
          <AppText style={{ fontSize: 11, color: "#9C9C9C" }}>
            Pay Agent/Owner for Property Visiting
          </AppText>
        </View>

        {/* charges detail container */}
        <View style={styles.headingContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppText style={{ color: "#9C9C9C" }}>Charges Per Visit</AppText>
            <AppText>Ghc 80</AppText>
          </View>

          <View style={styles.seriveChargee}>
            <AppText style={{ color: "#9C9C9C" }}>
              Service Charges 0.5 %
            </AppText>
            <AppText>Ghc 20</AppText>
          </View>
        </View>

        {/* total */}
        <View style={styles.total}>
          <AppText
            style={{ fontWeight: "800", fontSize: 17, color: "#0336FF" }}
          >
            Total
          </AppText>
          <AppText>Ghc 100</AppText>
        </View>

        {/* last btn section */}
        <View style={{ paddingTop: 20 }}>
          <AppButton
            textcolor="white"
            title="Pay"
            borderColor="#1645f5"
            onPress={() => navigation.navigate(routes.RENT_SUCCESS_PAY)}
          />
        </View>

        <AppText style={styles.smallText}>
          Continoue to Advance{" "}
          <AppText style={styles.smallText1}>Deposit Payemnt Page</AppText> if
        </AppText>
        <AppText style={styles.smallText}>
          You have already Visted the Property and{" "}
        </AppText>
        <AppText style={styles.smallText}>Are Intrested in Property</AppText>
      </View>
    </Screen>
  );
};

export default VisitPropertCharges;

const styles = StyleSheet.create({
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
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  smallText: { fontSize: 10, textAlign: "center" },
  smallText1: { fontSize: 10, textAlign: "center", color: "#0336FF" },
  seriveChargee: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});
