import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

import AppText from "../../components/AppText";
import routes from "../../config/routes";
import colors from "../../config/colors";
import Screen from "../../components/Screen";
import TwiddleProjectCard from "../../components/TwiddleProjectCard";

const TwiddleMainProjectScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  });
  const [selected, setSelected] = useState("All Projects");

  const navigation = useNavigation();

  console.log(selected);

  return (
    <Screen>
      {/* <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      /> */}

      <View style={{ paddingHorizontal: 15 }}>
        {/* top bar */}
        <View style={styles.topBackBtn}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.openDrawer()}
          >
            <Octicons name="three-bars" size={15} color="black" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10, fontSize: 17 }}>
            {selected === "All Projects" ? (
              <AppText>Twiddle Projects</AppText>
            ) : (
              <AppText>Invest Now</AppText>
            )}
          </AppText>
        </View>
        {/* top bar close */}

        {selected === "Your Projects" && (
          <AppText
            style={{ fontSize: 16, color: "#0336FF", fontWeight: "bold" }}
          >
            Twiddle Projects
          </AppText>
        )}

        {/* filter btns */}
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => setSelected("All Projects")}>
            <Text
              style={
                selected === "All Projects"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              All Projects
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected("Your Projects")}>
            <Text
              style={
                selected === "Your Projects"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              Your Projects
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.INVESTMENT_DASHBORAD)}
          >
            <Text
              style={
                selected === "Dashboard"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              Dashboard
            </Text>
          </TouchableOpacity>
        </View>

        {/* fiter btn close */}

        {/* filter views */}
        <View>
          {selected === "All Projects" && (
            <TwiddleProjectCard onPress={() => navigation.navigate("abc")} />
          )}

          {selected === "Your Projects" && (
            <TwiddleProjectCard onPress={() => navigation.navigate("abc")} />
          )}
        </View>
      </View>
    </Screen>
  );
};

export default TwiddleMainProjectScreen;

const styles = StyleSheet.create({
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  topBackBtn: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //padding: 10,
    // borderTopColor: colors.darkestGrey,
    // borderTopWidth: 2,
    // borderBottomColor: colors.darkestGrey,
    // borderBottomWidth: 2,
    // marginVertical: 12,
  },
  filterbtnn: {
    borderBottomColor: colors.primaryBlue,
    borderBottomWidth: 3,
    padding: 10,
    color: colors.primaryBlue,
  },
  unfilterbtnn: {
    padding: 10,
  },
});
