import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import AuthContext from "../auth/context";
import listings from "../api/listings";
import UserCard from "../components/UserCard";
import PaymentHistoryCard from "../components/PaymentHistoryCard";

const InstallmentDashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <Screen>
          <View style={{ paddingHorizontal: 10 }}>
            {/* back btn with text */}
            <View style={styles.topBackBtn}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.navigate("Home")}
              >
                <Ionicons name="chevron-back" size={20} color="#2c62e2" />
              </TouchableOpacity>
              <AppText
                style={{ paddingLeft: 10, color: "white", fontSize: 12 }}
              >
                Renters Installment Dashboard
              </AppText>
            </View>

            {/* text of amomut */}
            <AppText style={styles.smallText}>Total Rent Amount</AppText>
            <AppText style={styles.boldText}>GHC 5350</AppText>

            {/* rent ledger container */}

            <View style={styles.rentLedgerConatiner}>
              <View style={styles.insideLegderContainer}>
                <AppText style={styles.ledgerText}>Rent Paid</AppText>
                <AppText style={styles.ledgerAmount}>Ghc 2023</AppText>
              </View>
              <View style={styles.insideLegderContainer1}>
                <AppText style={styles.ledgerText}>Rent Remaining</AppText>
                <AppText style={styles.ledgerAmount}>Ghc 2023</AppText>
              </View>
            </View>
          </View>
        </Screen>
      </View>
      <View style={styles.secondarybox}>
        <View style={{ paddingHorizontal: 10 }}>
          <ScrollView>
            {/* paybutton */}
            <AppButton
              textcolor="white"
              title="Pay Your Rent"
              borderColor="#1645f5"
              onPress={() => console.log("tapped")}
            />

            {/* payment History */}
            <AppText style={{ paddingBottom: 10 }}>Rent Payments</AppText>
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
            <PaymentHistoryCard />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  boldText: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
  },
  insideLegderContainer: {
    width: "50%",
    borderWidth: 2,
    borderRightColor: "#707070",
    justifyContent: "center",
    height: 70,
    borderLeftColor: "#2c62e2",
    borderBottomColor: "white",
    borderTopColor: "white",
  },
  insideLegderContainer1: {
    width: "48%",
    justifyContent: "center",
    height: 70,
  },
  ledgerText: { textAlign: "center", fontSize: 11 },
  main: {
    flex: 1,
    width: "100%",
  },
  primarybox: {
    paddingHorizontal: 10,
    flex: 3,
    width: "100%",
    backgroundColor: "#2c62e2",
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // overflow: "hidden",
  },
  secondarybox: {
    flex: 5,
    width: "100%",
    backgroundColor: "#fafcfb",
    //borderRadius: 30,
    //alignItems: "flex-start",
    //paddingVertical: 30,
    paddingHorizontal: 10,
    //paddingTop: 35,
    //overflow: "hidden",
  },
  rentLedgerConatiner: {
    height: 80,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    marginVertical: 22,
  },
  ledgerAmount: {
    textAlign: "center",
    color: "#2c62e2",
    fontWeight: "700",
  },
  smallText: {
    fontSize: 12,
    color: "white",
  },
  topBackBtn: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },
});

export default InstallmentDashboardScreen;
