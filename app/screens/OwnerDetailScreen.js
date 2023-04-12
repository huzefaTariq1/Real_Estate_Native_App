import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";

import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import OwnersPropertCard from "../components/OwnersPropertCard";

const OwnerDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const userProperty = route.params;

  const source = require("../assets/homi.png");

  return (
    <Screen>
      <View style={styles.main}>
        {/* header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() =>
              navigation.navigate("DetailPropertyScreen", userProperty)
            }
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <AppText style={{ paddingLeft: 10, fontWeight: "700", fontsize: 20 }}>
            Details
          </AppText>
        </View>
        {/* header close */}

        {/* user conatiner */}
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.avatar}>
            <Image
              source={{ uri: userProperty.user.avatar }}
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            />
          </View>
          {/* user details container */}
          <View style={{ paddingLeft: 20 }}>
            <AppText style={{ fontSize: 11, fontWeight: "700" }}>
              {userProperty.user.firstname} {userProperty.user.lastname}
            </AppText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="shield-checkmark-sharp"
                size={17}
                color="#0336FF"
              />
              <AppText style={{ paddingLeft: 10, fontSize: 11 }}>
                Real State Agent
              </AppText>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto name="email" size={16} color="#8F92A1" />
              <AppText
                style={{ paddingLeft: 10, color: "#8F92A1", fontSize: 11 }}
              >
                {userProperty.user.email}
              </AppText>
            </View>
          </View>
        </View>

        <View>
          <AppText style={{ fontSize: 11, color: "#8F92A1" }}>
            I Am Jack And i have 6 apartments for rents and long term, i invite
            tenants who appreciate the convenience of use and nice aesthetic
            interiors
          </AppText>
        </View>

        {/* two btns */}

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.OWNER_CHAT)}
          style={styles.startChat}
        >
          <Ionicons name="md-chatbox-sharp" size={17} color="white" />
          <AppText style={{ fontSize: 11, color: "white", paddingLeft: 10 }}>
            Start Chat
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shedule}>
          <MaterialIcons name="phone" size={17} color="white" />
          <AppText style={{ fontSize: 11, color: "white", paddingLeft: 10 }}>
            Shedule Appointment
          </AppText>
        </TouchableOpacity>

        {/* properties data starts here */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
          }}
        >
          <AppText style={{ fontWeight: "700", fontSize: 20 }}>
            Propert Listing &#40; 2 &#41;
          </AppText>

          <View
            style={{
              backgroundColor: "#0336FF",
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="filter" size={18} color="white" />
          </View>
        </View>

        <ScrollView height={400}>
          <OwnersPropertCard
            title="huzefa"
            price="3000"
            image={source}
            catagery="Rent"
            onPress={() => console.log("tapped")}
            loc="xyz"
          />

          <OwnersPropertCard
            title="huzefa"
            price="3000"
            image={source}
            catagery="Rent"
            onPress={() => console.log("tapped")}
            // onPress={() => navigation.navigate("DetailPropertyScreen", item)}
            loc="xyz"
          />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default OwnerDetailScreen;

const styles = StyleSheet.create({
  avatar: {
    overflow: "hidden",
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.medium,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  backBtn: {
    height: 30,
    width: 30,
    backgroundColor: colors.primaryBlue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  main: {
    paddingHorizontal: 20,
  },
  startChat: {
    flexDirection: "row",
    backgroundColor: "#0336FF",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  shedule: {
    flexDirection: "row",
    backgroundColor: "#9A03FF",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
});
