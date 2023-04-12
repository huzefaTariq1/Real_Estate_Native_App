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
import { useNavigation } from "@react-navigation/native";
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

const TwiddleWalletScreen = () => {
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
                onPress={() => navigation.navigate(routes.WALEET_MAIN_SCREEN)}
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
                Twiddl Wallet
              </AppText>
            </View>

            {/* topbar end */}
            <AppText style={{ fontSize: 11, color: "white" }}>
              Available Balance
            </AppText>
            <AppText style={{ color: "white", fontSize: 17 }}>
              Ghc 502044
            </AppText>
          </View>
        </Screen>
      </View>

      {/* second flex screen */}
      <View style={styles.secondarybox}>
        <View
          style={{
            height: "100%",

            justifyContent: "flex-end",
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <AppButton
              textcolor="white"
              title="Continoue"
              borderColor="#1645f5"
              onPress={() => navigation.navigate(routes.PAY_NOW_WALLET)}
            />
          </View>
        </View>
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

  topBackBtn: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },
});

export default TwiddleWalletScreen;
