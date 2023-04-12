import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import Logo from "../assets/logosvg.svg";

const WalletPaymentHistoryCard = ({ clear }) => {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: 5 }}>
            <Logo width={30} height={30} />
          </View>

          <View>
            <AppText style={{ fontSize: 10 }}>Twidle Inv</AppText>

            {/* small text with icon */}
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="creditcard" size={12} color="#9C9C9C" />
                <AppText
                  style={{ color: "#9C9C9C", fontSize: 7, marginLeft: 4 }}
                >
                  Upcoming
                </AppText>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 5,
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="check-circle" size={12} color="#9C9C9C" />
                <AppText
                  style={{ color: "#9C9C9C", fontSize: 7, marginLeft: 4 }}
                >
                  Property Sold
                </AppText>
              </View>
            </View>
          </View>
        </View>

        {/* payment details */}
        <View>
          <AppText>GHC 250000</AppText>
          <AppText
            style={clear === "Cleared" ? styles.timeText1 : styles.timeText}
          >
            {clear}
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default WalletPaymentHistoryCard;

const styles = StyleSheet.create({
  main: {
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
  timeText: { fontSize: 10, color: "#FF9A03", textAlign: "center" },
  timeText1: { fontSize: 10, color: "#01E08F", textAlign: "center" },
});
