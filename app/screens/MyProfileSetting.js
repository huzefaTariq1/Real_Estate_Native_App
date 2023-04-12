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
const MyProfileSetting = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  //console.log(user);
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
            My Profile
          </AppText>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.EDIT_USER_PROFILE)}
        >
          <AppText style={{ color: "#0336FF", fontSize: 15 }}>Edit</AppText>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* top bar close */}
        <View
          style={{
            backgroundColor: "grey",
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        ></View>
        <AppText style={styles.XsmallText}>
          Select a presentable photo for yourself this is very important
        </AppText>
        <AppText style={styles.text}>First Names</AppText>

        {/* fields */}
        <View style={styles.field}>
          <AppText style={styles.text1}>{user.user.fullname}</AppText>
        </View>

        <AppText style={styles.text}>Last Name</AppText>

        {/* fields */}
        <View style={styles.field}>
          <AppText style={styles.text1}>{user.user.fullname}</AppText>
        </View>

        <AppText style={styles.text}>Phone Number</AppText>

        {/* fields */}
        <View style={styles.field}>
          <AppText style={styles.text1}>{user.user.fullname}</AppText>
        </View>

        <AppText style={styles.text}>Email Address</AppText>

        {/* fields */}
        <View style={styles.field}>
          <AppText style={styles.text1}>{user.user.fullname}</AppText>
        </View>

        <AppText style={styles.text}>Password</AppText>

        {/* fields */}
        <View style={styles.field1}>
          <Text style={styles.text1}>********</Text>
          <Ionicons name="ios-eye-sharp" size={20} color="black" />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MyProfileSetting;

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
