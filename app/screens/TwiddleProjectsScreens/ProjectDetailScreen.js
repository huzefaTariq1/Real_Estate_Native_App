import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  AppState,
} from "react-native";
import * as Progress from "react-native-progress";
import { StatusBar } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import routes from "../../config/routes";
import ContributerCard from "../../components/ContributerCard";
const ProjectDetailScreen = ({ navigation }) => {
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  const [selected, setSelected] = useState("Description");

  const source = require("../../assets/Mask.png");
  const source1 = require("../../assets/path.png");

  const handleBack = () => {
    navigation.navigate(routes.TWIDDLE_PROJECTS_MAIN);
  };
  return (
    <View style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.primarybox}>
        <Image
          style={styles.Image}
          source={require("../../assets/project.png")}
        />
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Ionicons name="chevron-back" size={20} color="#0336FF" />
        </TouchableOpacity>
      </View>
      <View style={styles.secondarybox}>
        {/* heading conatiner */}
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <AppText style={{ fontSize: 14 }}>Mall of Africa in Ghana</AppText>
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <AppText style={styles.smallText}>
            Min. Invstment:
            <AppText style={{ color: "#0336FF", fontSize: 10 }}>GHC 5</AppText>
          </AppText>
          <AppText style={styles.smallText}>100 Days Left</AppText>
        </View>

        {/* progress bar */}
        <View style={{ paddingTop: 10 }}>
          <Progress.Bar progress={0.46} width={313} />
        </View>

        {/* details */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
            width: "100%",
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

        {/* detail close */}

        {/*filter btns */}
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => setSelected("Description")}>
            <Text
              style={
                selected === "Description"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              Description
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("Gallery")}>
            <Text
              style={
                selected === "Gallery" ? styles.filterbtnn : styles.unfilterbtnn
              }
            >
              Gallery
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("Project News")}>
            <Text
              style={
                selected === "Project News"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              Project News
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected("Contributers")}>
            <Text
              style={
                selected === "Contributers"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              Contributers
            </Text>
          </TouchableOpacity>
        </View>
        {/*filter btns close */}

        <ScrollView style={{ width: "100%" }}>
          {/* // description */}
          {selected === "Description" && (
            <View>
              <AppText style={styles.smallText1}>
                The mall of Africa will be a biggest and ultra modern mall in
                africa the world has seen this project will encapculate the
                cultural elements of all 55 counts..
              </AppText>

              <AppText style={{ fontSize: 12, fontWeight: "700" }}>
                Features
              </AppText>

              <AppText style={styles.smallText2}>
                2 Washrooms|3 parking|100 Shops|5 Children play Ground
              </AppText>

              <AppText style={{ fontSize: 12, fontWeight: "700" }}>
                Inspiration
              </AppText>

              <AppText style={styles.smallText2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </AppText>
            </View>
          )}

          {/* gallery */}
          {selected === "Gallery" && (
            <View>
              <View style={styles.picContainer}>
                <View style={styles.largeImage}>
                  <Image
                    source={require("../../assets/project.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  />
                </View>
                <View>
                  <View style={styles.smallImage}>
                    <Image
                      source={require("../../assets/project.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                  <View style={styles.smallImage}>
                    <Image
                      source={require("../../assets/project.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          {/* close */}

          {/* project news */}
          {selected === "Project News" && (
            <View>
              <AppText style={styles.smallText1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </AppText>

              <AppText style={styles.smallText1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </AppText>
            </View>
          )}
          {/* contributers close */}

          {/* project news */}
          {selected === "Contributers" && (
            <View>
              <ContributerCard source={source1} contributer="Pipe Bank LLC" />
              <ContributerCard
                source={source}
                contributer="Miss Maratha Hill"
              />
              <ContributerCard source={source1} contributer="Pipe Bank LLC" />
              <ContributerCard
                source={source}
                contributer="Miss Maratha Hill"
              />
            </View>
          )}
          {/* contributers */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 43,
    left: 20,
  },
  backbtnText: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    fontSize: 30,
    fontWeight: "300",
    paddingBottom: 5,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    //padding: 10,
    borderTopColor: "#0000001A",
    borderTopWidth: 2,
    borderBottomColor: "#0000001A",
    borderBottomWidth: 2,
    marginVertical: 12,
  },
  filterbtnn: {
    borderBottomColor: colors.primaryBlue,
    borderBottomWidth: 3,
    padding: 10,
    color: colors.primaryBlue,
    fontSize: 10,
  },
  largeImage: {
    overflow: "hidden",
    width: "50%",
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 10,
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
  text: {
    paddingVertical: 10,
  },
  Image: {
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
  main: {
    flex: 1,
    width: "100%",
  },
  picContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  primarybox: {
    flex: 3,
    width: "100%",
    backgroundColor: "brown",
  },
  secondarybox: {
    flex: 5,
    width: "100%",
    backgroundColor: "#fafcfb",
    borderRadius: 30,
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 17,

    overflow: "hidden",
  },
  selectorContainer: {
    paddingVertical: 25,
  },
  smallText: { fontSize: 10, color: "#9C9C9C", paddingTop: 10 },

  smallText1: { fontSize: 10, paddingTop: 5 },
  smallText2: { fontSize: 10, color: "#9C9C9C", paddingTop: 5 },
  smallImage: {
    // marginVertical: 10,
    marginBottom: 10,
    overflow: "hidden",
    width: 120,
    height: 150,
    backgroundColor: colors.white,
    borderRadius: 10,
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
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  unfilterbtnn: {
    padding: 10,
    fontSize: 10,
  },
});

export default ProjectDetailScreen;
