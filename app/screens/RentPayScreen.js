import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Notify from "../assets/notify.svg";
import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";
import AppButton from "../components/AppButton";

const RentPayScreen = ({ route }) => {
  const [text, setText] = useState("");
  const [isChecked, setChecked] = useState(true);
  const navigation = useNavigation();

  const userProperty = route.params;

  console.log(text);

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
            Payment Of Initial Rent
          </AppText>
        </View>

        {/* herder close */}

        <ScrollView>
          {/* serach land lord container */}
          <View style={styles.mainContainer}>
            <AppText style={styles.headings2}>
              Search Or Add Land Lord Detail
            </AppText>

            {/* input filed */}

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Search Land Lord By Name"
                onChangeText={(input) => setText(input)}
                value={text}
                placeholderTextColor="#9C9C9C"
              />
            </View>

            <AppText style={styles.headings1}>Add New LandLord Here</AppText>
          </View>

          {/* ADVANCE PAYMENT CONTAINER   */}
          <View style={styles.mainContainer}>
            <AppText style={styles.headings3}>Advance Payments</AppText>
            <View style={{ flexDirection: "row" }}>
              <AppText style={styles.verySmallText}>
                The Below was estimated based on your performance {""}
              </AppText>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.RENT_PROPERTY)}
              >
                <AppText style={{ fontSize: 10, color: "#1492E6" }}>
                  Change
                </AppText>
              </TouchableOpacity>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>
                First Three &#40;3&#41; Months
              </AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 450</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>

            <View style={styles.DeatilContainer}>
              <AppText style={styles.smallheading}>Meditation Fees</AppText>
              <View style={{ flexDirection: "row" }}>
                <AppText style={styles.smallheading1}>Ghc 218</AppText>
                <AntDesign name="infocirlceo" size={15} color="#1492E6" />
              </View>
            </View>
          </View>

          {/* total */}
          <View style={styles.totalContainer}>
            <AppText style={styles.totalText}>Total</AppText>
            <AppText style={styles.totalText}>Ghc 666</AppText>
          </View>

          {/* terms contatier */}

          <View style={styles.termsContainer}>
            <AppText style={styles.smallText2}>
              This options estimates the amount of money to be paid
            </AppText>
            <AppText style={styles.smallText2}>
              by the renter in order for the rent to qualify for
            </AppText>
            <AppText style={styles.smallText2}>
              Twiddle's Pay-as-you offer
            </AppText>

            <View style={{ paddingTop: 14 }}>
              <AppText style={styles.smallText2}>
                The estimation is done by multiplying the rent by 3
              </AppText>
              <AppText style={styles.smallText2}>
                &#40;e.g GHC 150 * 3 Months=GHC 450&#41; this is the minimum
              </AppText>
              <AppText style={styles.smallText2}>
                advance deposit require by Twiddle
              </AppText>
            </View>
          </View>

          {/* check box term and condition */}

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
            <Text style={styles.paragraph}>I Agree to Twiddle INV's</Text>
            <TouchableOpacity>
              <Text style={styles.paragraph1}>Terms & Condition</Text>
            </TouchableOpacity>
          </View>

          {!isChecked && (
            <AppText style={styles.error}>Terms Must Be Checked</AppText>
          )}

          {isChecked && (
            <View style={{ paddingTop: 20 }}>
              <AppButton
                textcolor="white"
                title="Make Payment"
                borderColor="#1645f5"
                onPress={() => navigation.navigate(routes.SUCCESS_SCREEN)}
              />
            </View>
          )}

          <AppText style={styles.smallText2}>
            Note:Your Installemnt Starts four weeks after this
          </AppText>
          <AppText style={styles.smallText2}>
            Transction.You Make make payments anytime within
          </AppText>
          <AppText style={styles.smallText2}>this stipend time</AppText>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default RentPayScreen;

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
  checkbox: {
    margin: 8,
  },
  DeatilContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  error: {
    color: "red",
    alignItems: "center",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "500",
  },
  headings: {
    color: "#0336FF",
    fontWeight: "600",
    paddingBottom: 7,
  },
  headings1: {
    color: "#1492E6",
    fontWeight: "600",
    textDecorationLine: "underline",
    paddingTop: 10,
  },
  headings2: {
    color: "#0336FF",
    fontWeight: "600",
    paddingBottom: 7,
    fontSize: 17,
  },
  headings3: {
    color: "#0336FF",
    fontWeight: "600",
    fontSize: 17,
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
  paragraph: {
    fontSize: 11,
  },
  paragraph1: {
    fontSize: 11,
    color: "#1492E6",
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
  smallText2: { fontSize: 10, textAlign: "center", color: "#9C9C9C" },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },

  verySmallText: {
    fontSize: 10,
    color: "#9C9C9C",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#E9E9EC",
    color: "#9C9C9C",
  },

  totalText: {
    fontWeight: "700",
    color: "#0336FF",
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  termsContainer: {
    backgroundColor: "#F2F5FE",
    width: "100%",
    borderRadius: 15,
    paddingVertical: 15,
  },
});
