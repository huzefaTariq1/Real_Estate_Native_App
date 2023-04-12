import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Progress from "react-native-progress";
//import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import routes from "../config/routes";
const TwiddleProjectCard = ({ onPress }) => {
  //const navigation = useNavigation();

  return (
    <ScrollView height={600}>
      <View style={styles.main}>
        {/* image conatiner */}
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: "red",
            height: 200,
            width: "100%",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/project.png")}
          />
        </TouchableOpacity>
        {/* image conatiner close */}

        {/* below image conatiner with pading */}
        <View style={{ paddingHorizontal: 15 }}>
          {/* heading conatiner */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <AppText style={{ fontSize: 14 }}>
                Mall of Africa in Ghana
              </AppText>
              <AppText style={{ fontSize: 14 }}>Seed This project</AppText>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Entypo name="share" size={20} color="#9C9C9C" />
              </View>
              <Ionicons name="bookmark-sharp" size={20} color="#ED546E" />
            </View>
          </View>
          {/* heading conatiner */}

          <AppText style={styles.smallText}>
            The mall of Africa will be a biggest and ultra modern mall in africa
            the world has seen this project will encapculate the cultural
            elements of all 55 counts..
          </AppText>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppText style={styles.smallText}>
              Min. Invstment:
              <AppText style={{ color: "#0336FF", fontSize: 10 }}>
                GHC 5
              </AppText>
            </AppText>
            <AppText style={styles.smallText}>100 Days Left</AppText>
          </View>

          {/* progress bar */}
          <View style={{ paddingTop: 10 }}>
            <Progress.Bar progress={0.46} width={300} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
            }}
          >
            <View>
              <AppText style={{ fontSize: 11, color: "#9C9C9C" }}>
                Project Cost
              </AppText>
              <AppText style={{ fontSize: 11, color: "#0336FF" }}>
                GHC 150000
              </AppText>
            </View>

            <View>
              <AppText style={{ fontSize: 11, color: "#9C9C9C" }}>
                Invested So far
              </AppText>
              <AppText style={{ fontSize: 11, color: "#2E3034" }}>
                GHC 53593{" "}
                <AppText style={{ color: "#0336FF", fontSize: 11 }}>
                  &#40; 46% &#41;
                </AppText>
              </AppText>
            </View>
          </View>

          <AppText
            style={{
              fontSize: 10,
              textAlign: "center",
              paddingTop: 7,
              color: "#9C9C9C",
              paddingBottom: 25,
            }}
          >
            A Twiddle Inv.ltd Original 2022 All Rights Reserved
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
};

export default TwiddleProjectCard;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,

    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    marginBottom: 10,
    borderRadius: 10,
    //paddingHorizontal: 15,
    //paddingVertical: 10,
    overflow: "hidden",
  },
  smallText: { fontSize: 10, color: "#9C9C9C", paddingTop: 10 },
});
