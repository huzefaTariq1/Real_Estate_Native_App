import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import Waleet from "../../assets/waleet.svg";
import Up from "../../assets/up.svg";
import Invest from "../../assets/invest.svg";
import Rent from "../../assets/rent.svg";

import PaymentHistoryCard from "../../components/PaymentHistoryCard";
import WalletPaymentHistoryCard from "../../components/WalletPaymentHistoryCard";
import routes from "../../config/routes";
import TransctionCard from "../../components/TransctionCard";

const WalletScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  });
  const [clicked, setClicked] = useState("payments");
  const [paymentActive, setPaymentActive] = useState(true);
  const [transActive, setTranstActive] = useState(false);

  const handlePaymentBtn = () => {
    setClicked("payments");
    setPaymentActive(true);
    setTranstActive(false);
  };

  const handletransBtn = () => {
    setClicked("transction");
    setPaymentActive(false);
    setTranstActive(true);
  };

  console.log(clicked);

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      {/* <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      /> */}

      <View style={styles.primarybox}>
        <Screen>
          <View style={{ paddingHorizontal: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* back btn with text */}
              <View style={styles.topBackBtn}>
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => navigation.openDrawer()}
                >
                  <Octicons name="three-bars" size={15} color="black" />
                </TouchableOpacity>
                <AppText
                  style={{ paddingLeft: 10, color: "white", fontSize: 12 }}
                >
                  Twiddle Wallet
                </AppText>
              </View>

              <TouchableOpacity onPress={() => console.log("tapped")}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* text of amomut */}
            <AppText style={styles.smallText}>Total Available Amount</AppText>
            <AppText style={styles.boldText}>GHC 53500</AppText>

            {/* 4 waleet btns container */}
            <View>
              <View style={styles.btnRowContainer}>
                {/* withdarw money btn*/}
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => console.log("tapped")}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Waleet width={20} height={20} />
                    <AppText style={styles.btnText}>Withdarw money</AppText>
                  </View>
                </TouchableOpacity>

                {/* top up balance */}
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => console.log("tapped")}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Up width={20} height={20} />
                    <AppText style={styles.btnText}>Top-Up Balance</AppText>
                  </View>
                </TouchableOpacity>
              </View>

              {/* 2nd row btn */}
              <View style={styles.btnRowContainer}>
                {/* invest dashborad btn*/}
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() =>
                    navigation.navigate(routes.INVESTMENT_DASHBORAD)
                  }
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Invest width={20} height={20} />
                    <AppText style={styles.btnText}>Invest Dashborad</AppText>
                  </View>
                </TouchableOpacity>

                {/* Rent dashborad */}
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() =>
                    navigation.navigate(routes.INSTALLMENT_DASHBOARD)
                  }
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Rent width={20} height={20} />
                    <AppText style={styles.btnText}>Rent Dashborad</AppText>
                  </View>
                </TouchableOpacity>
              </View>
              {/* closw */}
            </View>
          </View>
        </Screen>
      </View>

      {/* second flex screen */}
      <View style={styles.secondarybox}>
        <View style={{ paddingHorizontal: 10 }}>
          {clicked === "payments" ? (
            <ScrollView>
              {/* CONDITIONAL PAYMENT CONTAINER */}
              {/* transtation two btn container */}
              <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                {/* payments btn */}
                <TouchableOpacity
                  style={
                    paymentActive == true
                      ? styles.btnContainer1
                      : styles.DbtnContainer
                  }
                  onPress={() => handlePaymentBtn()}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AppText
                      style={
                        paymentActive == true
                          ? styles.activeText
                          : styles.dactiveText
                      }
                    >
                      Payments
                    </AppText>
                  </View>
                </TouchableOpacity>

                {/* transtacyion btn */}
                <TouchableOpacity
                  style={
                    transActive == true
                      ? styles.btnContainer2
                      : styles.DbtnContainer2
                  }
                  onPress={() => handletransBtn()}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AppText style={{ fontSize: 11 }}>Transactions</AppText>
                  </View>
                </TouchableOpacity>
              </View>

              {/* btn container close */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText>Recent Payments</AppText>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(routes.WALLET_ALL_PAYMENTS)
                  }
                >
                  <AppText style={{ fontSize: 10, color: colors.primaryBlue }}>
                    View All
                  </AppText>
                </TouchableOpacity>
              </View>

              {/* wallet payemnt cards */}
              <WalletPaymentHistoryCard clear="Clear in 3 Days" />
              <WalletPaymentHistoryCard clear="Cleared" />
              <WalletPaymentHistoryCard clear="Cleared" />
              <WalletPaymentHistoryCard clear="Clear in 4 Days" />
              <WalletPaymentHistoryCard clear="Cleared" />
              <WalletPaymentHistoryCard clear="Clear in 3 Days" />
              <WalletPaymentHistoryCard clear="Clear in 5 Days" />
            </ScrollView>
          ) : (
            <ScrollView>
              {/* CONDITIONAL  TRANSCTION CONTAINER */}
              {/* transtation two btn container */}
              <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                {/* payments btn */}
                <TouchableOpacity
                  style={
                    paymentActive == true
                      ? styles.btnContainer1
                      : styles.DbtnContainer
                  }
                  onPress={() => handlePaymentBtn()}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AppText
                      style={
                        paymentActive == true
                          ? styles.activeText
                          : styles.dactiveText
                      }
                    >
                      Payments
                    </AppText>
                  </View>
                </TouchableOpacity>

                {/* transtacyion btn */}
                <TouchableOpacity
                  style={
                    transActive == true
                      ? styles.btnContainer2
                      : styles.DbtnContainer2
                  }
                  onPress={() => handletransBtn}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AppText
                      style={
                        transActive == true
                          ? styles.activeText
                          : styles.dactiveText
                      }
                    >
                      Transactions
                    </AppText>
                  </View>
                </TouchableOpacity>
              </View>

              {/* btn container close */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText>Recent Transction</AppText>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(routes.WALLET_ALL_PAYMENTS)
                  }
                >
                  <AppText style={{ fontSize: 10, color: colors.primaryBlue }}>
                    View All
                  </AppText>
                </TouchableOpacity>
              </View>

              {/* transction payemnt cards */}
              <TransctionCard
                status="Withdrawl Completed Successfully"
                price="GHC 150"
                color="red"
              />
              <TransctionCard status="Top Up Successfully" price="GHC 150" />
              <TransctionCard
                status="Paid For Service Successfully"
                price="GHC 150"
              />
              <TransctionCard
                status="Invested Successfully"
                price="GHC 150"
                color="red"
              />
            </ScrollView>
          )}
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  activeText: {
    color: "white",
    fontSize: 11,
  },
  dactiveText: {
    fontSize: 11,
  },
  btnContainer: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  btnContainer1: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 7,
    padding: 5,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  DbtnContainer: {
    backgroundColor: "#E9E9EC",
    borderRadius: 7,
    padding: 5,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer2: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 7,
    padding: 5,
    marginLeft: 10,
  },
  DbtnContainer2: {
    backgroundColor: "#E9E9EC",
    borderRadius: 7,
    padding: 5,
    marginLeft: 10,
  },
  btnRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    fontSize: 10,
    paddingLeft: 4,
    color: colors.primaryBlue,
  },
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  boldText: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    marginBottom: 10,
  },

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

export default WalletScreen;
