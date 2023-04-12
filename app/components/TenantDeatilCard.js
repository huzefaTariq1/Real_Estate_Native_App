import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import AppText from "./AppText";
import TenantCallModal from "./TenantCallModal";

const TenantDetailCard = ({ onPress }) => {
  const [modalVisibled, setModalVisibled] = useState(false);

  const handleAddReturn = () => {
    setModalVisibled(true);
    console.log("add ret");
  };

  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={require("../assets/Mask.png")}
          style={{
            width: 45,
            height: 45,
            marginRight: 10,
          }}
        />
        <View style={styles.circle}>
          <Entypo name="dots-three-vertical" size={15} color="black" />
        </View>
      </View>

      <View style={styles.describe}>
        <AppText style={styles.field}>FirstName:</AppText>
        <AppText style={styles.value}>Meagn</AppText>
      </View>

      <View style={styles.describe}>
        <AppText style={styles.field}>LastName:</AppText>
        <AppText style={styles.value}>Menbold</AppText>
      </View>

      <View style={styles.describe}>
        <AppText style={styles.field}>Phone Number:</AppText>
        <AppText style={styles.value}>+2334434343</AppText>
      </View>

      <View style={styles.describe}>
        <AppText style={styles.field}>Email:</AppText>
        <AppText style={styles.value}>meaganmen@gmail.com</AppText>
      </View>

      {/* keep */}

      <TouchableOpacity
        onPress={() => handleAddReturn()}
        style={styles.smallbtb}
      >
        <Ionicons name="chatbox" size={16} color="white" />
        <AppText style={{ fontSize: 11, color: "white", paddingLeft: 10 }}>
          Contact
        </AppText>
      </TouchableOpacity>
      <TenantCallModal
        modalVisibled={modalVisibled}
        setModalVisibled={setModalVisibled}
      />

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
  );
};

export default TenantDetailCard;

const styles = StyleSheet.create({
  circle: {
    height: 26,
    width: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F6FE",
  },
  describe: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  field: {
    color: "#9C9C9C",
    fontSize: 13,
  },
  insideLegderContainer: {
    width: "50%",
    borderWidth: 2,
    borderRightColor: "#707070",
    justifyContent: "center",
    height: 70,
    borderLeftColor: "white",
    borderBottomColor: "white",
    borderTopColor: "white",
  },
  insideLegderContainer1: {
    width: "48%",
    justifyContent: "center",
    height: 70,
  },
  ledgerText: { textAlign: "center", fontSize: 11 },
  ledgerAmount: {
    textAlign: "center",
    color: "#2c62e2",
    fontWeight: "700",
  },
  main: {
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    marginBottom: 10,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 25,
    marginTop: 20,
  },
  rentLedgerConatiner: {
    borderWidth: 2,
    borderColor: "#9C9C9C",
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

  smallbtb: {
    backgroundColor: "#7701E0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    marginTop: 15,
  },
  value: {
    fontSize: 13,
  },
});
