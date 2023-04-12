import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import Notify from "../../assets/notify.svg";
import Logosvg from "../../assets/logosvg.svg";
import Payment from "../../assets/payment.svg";
import { useNavigation } from "@react-navigation/native";
import routes from "../../config/routes";

const InvestNowScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    console.log("backedd");
    //navigation.navigate(routes.SIDE_DRAWER);
  };

  const handleRegistar = () => {
    console.log("notify");
  };
  return (
    <Screen>
      <View style={styles.main}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate(routes.INVESTMENT_DASHBORAD)}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10, fontWeight: "700", fontSize: 15 }}>
            Invest Now
          </AppText>
        </View>

        {/* two btns card */}

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.TWIDDLE_WALLET)}
          style={styles.cardMain}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Logosvg width={40} height={40} />
            <AppText style={{ fontSize: 13, paddingLeft: 15 }}>
              Pay With Twiddl Wallet
            </AppText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardMain}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Payment width={40} height={40} />
            <AppText style={{ fontSize: 13, paddingLeft: 15 }}>
              Other Payments
            </AppText>
          </View>
        </TouchableOpacity>

        {/* crd close */}
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            style={{ paddingRight: 10 }}
            name="checkcircle"
            size={12}
            color="#01E08F"
          />
          <AppText style={{ fontSize: 10, color: colors.primaryBlue }}>
            You Already invested in{" "}
            <AppText style={{ fontSize: 10, fontWeight: "bold" }}>2350</AppText>{" "}
            projects
          </AppText>
        </View>
      </View>
    </Screen>
  );
};

export default InvestNowScreen;

const styles = StyleSheet.create({
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.primaryBlue,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  centerIcon: {
    alignItems: "center",
    paddingTop: 180,
  },
  cardMain: {
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
