import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import AddReturnModal from "./AddReturnModal";

import TenantCallModal from "./TenantCallModal";

const TenantCard = ({ onPress }) => {
  const [modalVisibled, setModalVisibled] = useState(false);

  const handleAddReturn = () => {
    setModalVisibled(true);
    console.log("add ret");
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.main}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/Mask.png")}
            style={{
              width: 35,
              height: 34,
              marginRight: 10,
            }}
          />
          <AppText style={{ fontSize: 11, color: "white" }}>Megan men</AppText>
        </View>
        <TouchableOpacity
          onPress={() => handleAddReturn()}
          style={styles.smallbtb}
        >
          <AppText style={{ fontSize: 11 }}>Contact</AppText>
        </TouchableOpacity>
      </View>

      <TenantCallModal
        modalVisibled={modalVisibled}
        setModalVisibled={setModalVisibled}
      />
    </TouchableOpacity>
  );
};

export default TenantCard;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#8700FF",
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
  },
  smallbtb: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
