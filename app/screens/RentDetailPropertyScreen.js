import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";
import AppButton from "../components/AppButton";

const RentDetailPropertyScreen = ({ route }) => {
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
              // navigation.navigate(routes.RENT_PROPERTY, userProperty)
              navigation.goBack()
            }
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10, fontWeight: "700" }}>
            RENT RATE DETAILS AND BREAKDOWN
          </AppText>
        </View>

        {/* herder close */}
        <ScrollView>
          {/* Rent Payment Deatils container */}
          <View style={styles.mainContainer}>
            <AppText style={styles.headings}>Rent Payment Deatils</AppText>
            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>Rent Rate Per Month</AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 150</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                3 Years &#40;36 Months&#41;
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 5400</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>
          </View>

          {/* service charges container */}
          <View style={styles.mainContainer}>
            <AppText style={styles.headings}>Service Fess/Charges</AppText>
            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                Meditaion Fees &#40;4%&#41;{" "}
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 216</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                3 % Interest Per Month
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 162</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                First Three Month Rent Deposit
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 162</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>
          </View>

          {/* repayment Container */}
          <View style={styles.mainContainer}>
            <AppText style={styles.headings}>Repayment Details</AppText>
            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                Installment Frequency
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.underLineBlue}>Monthly</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                Monthly Installments
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 150</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>No. of Installments</AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>36</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>
          </View>

          {/* last container */}
          <View style={styles.mainContainer1}>
            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading2}>
                Rent Rate Per Month
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading5}>Ghc 5400</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading2}>
                36 Months With Interest
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 5346</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading3}>Total Rent Payment</AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading4}>Ghc 11232</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <AppButton
              textcolor="white"
              title="Continoue"
              borderColor="#1645f5"
              onPress={() => navigation.navigate(routes.RENT_PAY)}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default RentDetailPropertyScreen;

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
  DeatilContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headings: {
    color: "#0336FF",
    fontWeight: "600",
    paddingBottom: 7,
  },
  main: {
    paddingHorizontal: 20,
  },
  mainContainer: {
    borderWidth: 1,
    paddingVertical: 13,
    borderBottomColor: "#707070",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
  },
  mainContainer1: {
    paddingTop: 14,
  },

  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: { fontSize: 10, textAlign: "center" },
  smallText1: { fontSize: 10, textAlign: "center", color: "#0336FF" },
  smallheading: { fontSize: 13, color: "#9C9C9C" },
  smallheading1: { fontSize: 13, paddingRight: 10 },
  underLineBlue: {
    color: "#1492E6",
    fontSize: 13,
    paddingRight: 10,
    textDecorationLine: "underline",
  },
  smallheading2: { fontSize: 14, fontWeight: "600" },
  smallheading3: { fontSize: 14, fontWeight: "600", color: "#0336FF" },
  smallheading4: { fontSize: 13, paddingRight: 10, color: "#0336FF" },
  smallheading5: {
    fontSize: 13,
    paddingRight: 10,
    textDecorationLine: "underline",
  },
});
