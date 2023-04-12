import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import Reco from "../assets/reco.svg";
import Privacy from "../assets/privacy.svg";
import Term from "../assets/term.svg";
import Question from "../assets/question.svg";
import routes from "../config/routes";

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={{ paddingHorizontal: 20 }}>
        {/* back btn container */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <View>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="chevron-back" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <AppText style={{ fontSize: 20, fontWeight: "800", paddingLeft: 10 }}>
            My App Setting
          </AppText>
        </View>

        {/* setting btns */}

        {/* notification btn */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes.NOTIFICATION_SETTING_SCREEN)
          }
        >
          <View style={styles.mainSettingBtn}>
            <View style={styles.insideBtn}>
              <FontAwesome name="bell-o" size={16} color={colors.primaryBlue} />
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>
                Notification
              </AppText>
            </View>
            <View style={styles.insideBtn}>
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>Allow</AppText>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        {/* recomend a friend btn */}
        <TouchableOpacity onPress={() => console.log("tapped")}>
          <View style={styles.mainSettingBtn}>
            <View style={styles.insideBtn}>
              <Reco width={20} height={20} />
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>
                Recomend a Friend
              </AppText>
            </View>
            <View style={styles.insideBtn}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        {/*privacy policy*/}
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.PRIVACY_POLICY)}
        >
          <View style={styles.mainSettingBtn}>
            <View style={styles.insideBtn}>
              <Privacy width={20} height={20} />
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>
                Privacy Policy
              </AppText>
            </View>
            <View style={styles.insideBtn}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Term of use */}
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.TERM_OF_USE)}
        >
          <View style={styles.mainSettingBtn}>
            <View style={styles.insideBtn}>
              <Term width={20} height={20} />
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>
                Term of Use
              </AppText>
            </View>
            <View style={styles.insideBtn}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Help */}
        <TouchableOpacity onPress={() => console.log("tapped")}>
          <View style={styles.mainSettingBtn}>
            <View style={styles.insideBtn}>
              <Question width={20} height={20} />
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>Help</AppText>
            </View>
            <View style={styles.insideBtn}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default SettingScreen;

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

  insideBtn: { flexDirection: "row", alignItems: "center" },
  mainSettingBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#373B4D1A",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
});
