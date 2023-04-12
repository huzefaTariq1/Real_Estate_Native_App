import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";

import { useNavigation } from "@react-navigation/native";
import routes from "../../config/routes";
import { ScrollView } from "react-native-gesture-handler";
import WalletPaymentHistoryCard from "../../components/WalletPaymentHistoryCard";

const NotificationScreen = () => {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate(routes.WALEET_MAIN_SCREEN)}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10, fontSize: 20 }}>Payments</AppText>
        </View>

        <ScrollView height={650}>
          <WalletPaymentHistoryCard clear="Cleared" />
          <WalletPaymentHistoryCard clear="Cleared" />
          <WalletPaymentHistoryCard clear="Cleared" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
          <WalletPaymentHistoryCard clear="Cleared" />
          <WalletPaymentHistoryCard clear="Clear in 1 Days" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
          <WalletPaymentHistoryCard clear="Cleared" />
          <WalletPaymentHistoryCard clear="Clear in 9 Days" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
          <WalletPaymentHistoryCard clear="Clear in 3 Days" />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default NotificationScreen;

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
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
