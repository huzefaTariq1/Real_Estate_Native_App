import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { Ionicons } from "@expo/vector-icons";

import AuthContext from "../auth/context";
import { useContext } from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { ScrollView } from "react-native";
import routes from "../config/routes";

const EditUserProfile = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  console.log(user);
  return (
    <Screen style={{ paddingHorizontal: 5 }}>
      {/* top bar */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle-sharp"
              size={35}
              color="#0336FF"
            />
          </TouchableOpacity>
          <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
            Edit Profile
          </AppText>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.EDIT_USER_PROFILE)}
        >
          <AppText style={{ color: "#0336FF", fontSize: 15 }}>Save</AppText>
        </TouchableOpacity>
      </View>
      {/* top bar ends */}
    </Screen>
  );
};

export default EditUserProfile;

const styles = StyleSheet.create({
  field: {
    borderWidth: 1,
    borderColor: "#8F92A1",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginVertical: 10,
  },
  field1: {
    borderWidth: 1,
    borderColor: "#8F92A1",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "700",
  },
  text1: {
    color: "#9C9C9C",
  },
  XsmallText: {
    fontSize: 13,
    fontWeight: "300",
    paddingTop: 10,
    paddingBottom: 7,
    color: colors.medium,
  },
});
