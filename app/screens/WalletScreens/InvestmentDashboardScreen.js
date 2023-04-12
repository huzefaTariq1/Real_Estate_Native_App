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
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
//import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import Waleet from "../../assets/waleet.svg";
import Invst from "../../assets/invst.svg";
import Up from "../../assets/up.svg";
import Invest from "../../assets/invest.svg";
import Rent from "../../assets/rent.svg";

import PaymentHistoryCard from "../../components/PaymentHistoryCard";
import WalletPaymentHistoryCard from "../../components/WalletPaymentHistoryCard";
import routes from "../../config/routes";
import TransctionCard from "../../components/TransctionCard";
import AddReturnModal from "../../components/AddReturnModal";

const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const InvestmentDashboardScreen = ({ navigation }) => {
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  const [clicked, setClicked] = useState("payments");
  const [paymentActive, setPaymentActive] = useState(true);
  const [transActive, setTranstActive] = useState(false);
  const [modalVisibled, setModalVisibled] = useState(false);

  const handleAddReturn = () => {
    setModalVisibled(true);
    console.log("add ret");
  };

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

  //const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.primarybox}>
        <Screen>
          <View style={{ paddingHorizontal: 10 }}>
            {/* back btn with text */}
            <View style={styles.topBackBtn}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={colors.primaryBlue}
                />
              </TouchableOpacity>
              <AppText
                style={{ paddingLeft: 10, color: "white", fontSize: 12 }}
              >
                Investment Dashboard
              </AppText>
            </View>

            {/* topbar end */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View>
                <AppText style={styles.smallText}>No of Projects</AppText>
                <AppText style={styles.smallText}>
                  See Projects <AppText>02</AppText>
                </AppText>
              </View>
              <View>
                <AppText style={styles.smallText}>Net Profit</AppText>
                <AppText style={{ color: "white", fontWeight: "700" }}>
                  GHC 650
                </AppText>
              </View>
            </View>

            {/* investment container ledger */}

            <View style={styles.rentLedgerConatiner}>
              <View style={styles.insideLegderContainer}>
                <AppText style={styles.ledgerText}>Amount Invested</AppText>
                <AppText style={styles.ledgerAmount}>Ghc 2023</AppText>
              </View>
              <View style={styles.insideLegderContainer1}>
                <AppText style={styles.ledgerText}>Returns Gained</AppText>
                <AppText style={styles.ledgerAmount}>Ghc 2023</AppText>
              </View>
            </View>

            {/* garph */}
            <LineChart
              data={data}
              width={320}
              height={170}
              yAxisLabel="$"
              chartConfig={{
                backgroundColor: "#2c62e2",
                backgroundGradientFrom: "#2c62e2",
                backgroundGradientTo: "#2c62e2",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "0",
                  strokeWidth: "0",
                  stroke: "white",
                },
              }}
              bezier
            />
          </View>
        </Screen>
      </View>

      {/* second flex screen */}
      <View style={styles.secondarybox}>
        <ScrollView>
          <View style={{ paddingHorizontal: 10 }}>
            {/* three btns   contsainer         */}

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => handleAddReturn()}
                style={{
                  width: 90,
                  height: 80,
                  borderRadius: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <AppText style={styles.bottomBtnText}>Add Returns</AppText>
                <AppText style={styles.bottomBtnText}>to Wallet</AppText>
                <View style={{ alignItems: "center" }}>
                  <Waleet width={20} height={20} />
                </View>
              </TouchableOpacity>

              {/* 2ndone */}
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.INVEST_NOW)}
                style={{
                  width: 90,
                  height: 80,
                  borderRadius: 10,
                  backgroundColor: colors.primaryBlue,
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <AppText style={styles.bottomBtnText1}>Tap Up</AppText>
                <AppText style={styles.bottomBtnText1}>Investment</AppText>
                <View style={{ alignItems: "center" }}>
                  <Invst width={20} height={20} />
                </View>
              </TouchableOpacity>

              {/* 3rdone */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.TWIDDLE_PROJECTS_MAIN)
                }
                style={{
                  width: 90,
                  height: 80,
                  borderRadius: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <AppText style={styles.bottomBtnText}>Invest In</AppText>
                <AppText style={styles.bottomBtnText}>Projects</AppText>
                <View style={{ alignItems: "center" }}>
                  <Up width={20} height={20} />
                </View>
              </TouchableOpacity>
            </View>

            {/* container close */}
            <AppText style={{ paddingVertical: 10 }}>Recent Transction</AppText>

            <TransctionCard status="Top Up Successfully" price="GHC 150" />

            <AddReturnModal
              modalVisibled={modalVisibled}
              setModalVisibled={setModalVisibled}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  bottomBtnText: { fontSize: 9, textAlign: "center" },
  bottomBtnText1: { fontSize: 9, textAlign: "center", color: "white" },
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
  ledgerAmount: {
    textAlign: "center",
    color: "#2c62e2",
    fontWeight: "700",
  },
  ledgerText: { textAlign: "center", fontSize: 11 },
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
  smallText: { fontSize: 12, color: "white" },

  main: {
    flex: 1,
    width: "100%",
  },
  primarybox: {
    paddingHorizontal: 10,
    flex: 6,
    width: "100%",
    backgroundColor: "#2c62e2",
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // overflow: "hidden",
  },
  secondarybox: {
    flex: 3,
    width: "100%",
    backgroundColor: "#fafcfb",
    //borderRadius: 30,
    //alignItems: "flex-start",
    //paddingVertical: 30,
    paddingHorizontal: 10,
    //paddingTop: 35,
    //overflow: "hidden",
  },

  topBackBtn: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },
});

export default InvestmentDashboardScreen;
