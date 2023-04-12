import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import Notify from "../../assets/notify.svg";
import { useNavigation } from "@react-navigation/native";
import AppTextInputFlag from "../../components/AppTextInputFlag";
import AppFormField from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitButton";
import AppForm from "../../components/AppForm";
import ErrorMessage from "../../components/ErrorMessage";
import * as Yup from "yup";
import AppFormFlagField from "../../components/AppFormFlagField";
import AppFormCurrencyField from "../../components/AppFormCurrencyField";
import AppButton from "../../components/AppButton";
import SmallSubmitButton from "../../components/SmallSubmitButton";
import routes from "../../config/routes";

import ModalAppear from "../../components/ModalAppear";
const validationSchema = Yup.object().shape({
  phone1: Yup.number().required().min(100).max(10000).label("Amount"),
});

const PayNowWalletScreen = () => {
  const [modalVisibled, setModalVisibled] = useState(false);
  const [investedAmount, setInvestedAmount] = useState("");
  const navigation = useNavigation();

  const handleInvest = (values) => {
    setInvestedAmount(values.phone1);
    console.log(investedAmount);
    setModalVisibled(true);
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
            onPress={() => navigation.navigate(routes.TWIDDLE_WALLET)}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10 }}>Notifications</AppText>
        </View>

        {/* colose */}

        <AppForm
          initialValues={{ phone1: "" }}
          onSubmit={(values) => handleInvest(values)}
          validationSchema={validationSchema}
        >
          <AppFormCurrencyField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            name="phone1"
            placeholder="5000"
          />
          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                style={styles.smallbtn}
                onPress={() => navigation.navigate(routes.INVESTMENT_DASHBORAD)}
              >
                <AppText style={{ fontSize: 12, color: "#0336FF" }}>
                  Cancel
                </AppText>
              </TouchableOpacity>

              <SmallSubmitButton title="Invest Now" />
            </View>
          </View>
        </AppForm>

        <AppText>hello</AppText>
        <ModalAppear
          modalVisibled={modalVisibled}
          setModalVisibled={setModalVisibled}
          amount={investedAmount}
        />
      </View>
    </Screen>
  );
};

export default PayNowWalletScreen;

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

  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallbtn: {
    backgroundColor: "#F2F6FE",
    padding: 6,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
});
