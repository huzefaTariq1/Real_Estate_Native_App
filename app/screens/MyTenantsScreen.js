import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import routes from "../config/routes";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import TenantCard from "../components/TanantCard";

const MyTenantsScreen = ({ route }) => {
  const navigation = useNavigation();

  const userProperty = route.params;

  return (
    <Screen style={{ backgroundColor: "white" }}>
      <View style={styles.main}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("User1")}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10, fontWeight: "700" }}>
            {" "}
            My Tenants
          </AppText>
        </View>

        {/* herder close */}

        <View style={{ paddingTop: 20 }}>
          <TenantCard
            onPress={() => navigation.navigate(routes.TENANT_PROFILE)}
          />
        </View>
      </View>
    </Screen>
  );
};

export default MyTenantsScreen;

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
  headingContainer: {
    borderWidth: 1,
    borderBottomColor: "#E9E9EC",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    paddingVertical: 7,
  },
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: { fontSize: 10, textAlign: "center" },
  smallText1: { fontSize: 10, textAlign: "center", color: "#0336FF" },
});
