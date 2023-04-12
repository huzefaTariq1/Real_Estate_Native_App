import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "react-native-hook-image-slider";

import Tap from "../assets/taap.svg";
import Bed from "../assets/bed.svg";
import Kitchen from "../assets/kitchen.svg";
import Ac from "../assets/ac.svg";
import Washroom from "../assets/washroom.svg";
import Car from "../assets/car.svg";
import Area from "../assets/area.svg";
import Quarter from "../assets/quarter.svg";

import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../config/routes";

const DetailPropertyScreen = ({ navigation, route }) => {
  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  });

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  const userProperty = route.params;

  const [selected, setSelected] = useState("Description");

  const handleBack = () => {
    navigation.goBack();
  };

  console.log(typeof userProperty.tapAvailable);
  const gt = userProperty.user.avatar;

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <View style={styles.kk}>
          <Slider
            imageHeight={"100%"}
            width={"100%"}
            images={[
              userProperty.propertyUpload[0],
              userProperty.propertyUpload[1],
              userProperty.propertyUpload[2],
              userProperty.propertyUpload[3],
              userProperty.propertyUpload[4],
              userProperty.propertyUpload[5],
            ]}
          />
        </View>

        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.secondarybox}>
        <View style={styles.titleContainer}>
          <View>
            <AppText style={styles.zz}>{userProperty.title}</AppText>
          </View>

          {/* user avatr */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.OWNER_DETAIL_SCREEN, userProperty)
            }
            style={styles.avConatiner}
          >
            <View style={styles.avatar}>
              <Image
                source={{ uri: userProperty.user.avatar }}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              />
            </View>
          </TouchableOpacity>
          {/* user avatr close */}
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.STARTS_CHAT)}
            style={styles.btn}
          >
            <Ionicons name="chatbox-sharp" size={18} color={colors.white} />
            <Text style={styles.btnText1}>Start Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                routes.VISIT_PROPERTY_CHARGES_SCREEN,
                userProperty
              )
            }
            style={styles.btn2}
          >
            <Text style={styles.btnText}>Visit Property</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}>
            <Ionicons
              name="ios-location-outline"
              size={19}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        {/* description,specs,gallery shown filter btns */}
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
          <TouchableOpacity onPress={() => setSelected("Specfication")}>
            <Text
              style={
                selected === "Specfication"
                  ? styles.filterbtnn
                  : styles.unfilterbtnn
              }
            >
              Specfication
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
        </View>

        {/* description,specs,gallery shown items */}
        <View>
          {selected === "Description" && (
            <AppText style={styles.smallText}>
              {userProperty.description}
            </AppText>
          )}

          {selected === "Specfication" && (
            <ScrollView
              contentContainerStyle={{ width: "100%", height: "100%" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Tap width={50} height={30} />
                  <View style={styles.label}>
                    {userProperty.tapAvailable ? (
                      <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                        Ac Availble
                      </AppText>
                    ) : (
                      <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                        Ac Not Availble
                      </AppText>
                    )}
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Bed width={50} height={30} />
                  <View style={styles.label}>
                    <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                      {userProperty.bedroom} Bedrooms
                    </AppText>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Kitchen width={50} height={30} />
                  <View style={styles.label}>
                    <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                      {userProperty.kitchen} Kitchen Availble
                    </AppText>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Ac width={50} height={30} />
                  <View style={styles.label}>
                    {userProperty.aircondition ? (
                      <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                        Ac Availble
                      </AppText>
                    ) : (
                      <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                        Ac Not Availble
                      </AppText>
                    )}
                  </View>
                </View>
              </View>

              {/* next row */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Washroom width={50} height={30} />
                  <View style={styles.label}>
                    <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                      {userProperty.washroom} Washroom
                    </AppText>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Car width={50} height={30} />
                  <View style={styles.label}>
                    <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                      {userProperty.carparking} Car Parks
                    </AppText>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Area width={50} height={30} />
                  <View style={styles.label}>
                    <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                      {userProperty.floorArea} M2
                    </AppText>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Quarter width={50} height={30} />
                  <View style={styles.label}>
                    {userProperty.quarterAvailble ? (
                      <AppText style={{ fontSize: 8, color: "#0336FF" }}>
                        Quarter Availble
                      </AppText>
                    ) : (
                      <AppText style={{ fontSize: 9, color: "#0336FF" }}>
                        Quarter Not Availble
                      </AppText>
                    )}
                  </View>
                </View>
              </View>
            </ScrollView>
          )}

          {selected === "Gallery" && (
            <ScrollView
              contentContainerStyle={{ width: "100%", height: "250%" }}
            >
              <View style={styles.picContainer}>
                <View style={styles.largeImage}>
                  <Image
                    source={{ uri: userProperty.propertyUpload[0] }}
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
                      source={{ uri: userProperty.propertyUpload[1] }}
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                  <View style={styles.smallImage}>
                    <Image
                      source={{ uri: userProperty.propertyUpload[2] }}
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.smallPicContainer}>
                <View style={styles.smallImage1}>
                  <Image
                    source={{ uri: userProperty.propertyUpload[3] }}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  />
                </View>
                <View style={styles.smallImage1}>
                  <Image
                    source={{ uri: userProperty.propertyUpload[4] }}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  />
                </View>
              </View>
              <View style={styles.smallPicContainer}>
                <View style={styles.smallImage1}>
                  <Image
                    source={{ uri: userProperty.propertyUpload[5] }}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  />
                </View>
                <View style={styles.smallImage1}>
                  <Image
                    source={{ uri: userProperty.propertyUpload[2] }}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          )}
        </View>
        {/* price container */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderTopColor: "#707070",
            borderTopColor: "white",
            borderBottomColor: "white",
            borderLeftColor: "white",
            borderRightColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
              GHC {userProperty.price}
            </AppText>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.RENT_PROPERTY, userProperty)
              }
              style={{
                backgroundColor: "blue",
                padding: 7,
                borderRadius: 30,
                paddingHorizontal: 20,
              }}
            >
              <AppText style={{ color: "white" }}>Rent Property</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kk: {
    height: "100%",
    width: "100%",
  },
  avConatiner: {
    //backgroundColor:"red",
    alignItems: "center",
  },
  avatar: {
    overflow: "hidden",
    width: 34,
    height: 34,
    backgroundColor: colors.white,
    borderRadius: 17,
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
    height: 36,
    width: 36,
    backgroundColor: "#0336FF",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 43,
    left: 20,
  },
  btn: {
    backgroundColor: colors.primaryBlue,

    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
    justifyContent: "center",
  },
  btn2: {
    backgroundColor: colors.orangeYellow,
    paddingHorizontal: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btn3: {
    backgroundColor: colors.greenApp,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 10,
  },
  btnText1: {
    color: "white",
    fontSize: 10,
    paddingLeft: 4,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  },
  label: {
    backgroundColor: "#F2F6FE",
    borderRadius: 8,
    paddingVertical: 4,
    justifyContent: "center",
    marginTop: 7,
    paddingHorizontal: 4,
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
  unfilterbtnn: {
    padding: 10,
  },

  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  primarybox: {
    // paddingHorizontal: 10,
    flex: 4,
    width: "100%",
    backgroundColor: "#2c62e2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  picContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  secondarybox: {
    flex: 4,
    width: "100%",
    backgroundColor: "#fafcfb",
    paddingHorizontal: 10,
  },
  smallText: {
    fontSize: 12,
  },
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
  smallImage1: {
    marginVertical: 10,
    overflow: "hidden",
    width: "45%",
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
  smallPicContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  spec: {
    backgroundColor: "pink",
  },
  specItem: {
    backgroundColor: "green",
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default DetailPropertyScreen;
