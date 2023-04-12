import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";
import { useFocusEffect } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import listings from "../api/listings";
import UserCard from "../components/UserCard";

const UserPropertiesScreen = () => {
  const { user } = useContext(AuthContext);

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
      loadListing();
    }, [])
  );

  const loadListing = async () => {
    setLoading(true);
    const response = await listings.getUserListing();
    setLoading(false);

    if (!response.ok) {
      console.log(response);
      setError(true);
      return;
    }
    setError(false);
    setData(response.data);
  };

  return (
    <View style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.primarybox}>
        <SafeAreaView>
          {/* top bar starts */}
          <View style={styles.pm}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={styles.humburger1}
            >
              <Octicons name="three-bars" size={15} color="black" />
            </TouchableOpacity>

            <View style={styles.threeicons}>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.USER_SETTING)}
                style={styles.humburger}
              >
                <AntDesign
                  name="setting"
                  size={17}
                  color={colors.primaryBlue}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
                style={styles.humburger}
              >
                <Entypo
                  name="notification"
                  size={17}
                  color={colors.primaryBlue}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.STARTS_CHAT)}
                style={styles.humburger}
              >
                <AntDesign
                  name="message1"
                  size={17}
                  color={colors.primaryBlue}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* top bar starts ends */}

          <View style={styles.avConatiner}>
            <View style={styles.avatar}>
              <Image
                source={{ uri: user.user.avatar }}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              />
            </View>
          </View>

          <AppText style={styles.text}>{user.user.fullname}</AppText>

          <View style={styles.twobtns}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Service")}
              style={styles.btns1}
            >
              <View>
                <Octicons name="graph" size={18} color={colors.white} />
              </View>

              <AppText style={styles.whiteText}>Invest Now</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.WALEET_MAIN_SCREEN)}
              style={styles.btns}
            >
              <Ionicons
                name="ios-wallet-outline"
                size={24}
                color={colors.primaryBlue}
              />
              <AppText style={styles.text1}>My Wallet</AppText>
            </TouchableOpacity>
          </View>

          {/* large btn */}
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.MY_TENANTS)}
            style={styles.bigbtn}
          >
            <View>
              <AntDesign name="team" size={24} color={colors.primaryBlue} />
            </View>
            <AppText style={styles.text1}>My Tenants</AppText>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.secondarybox}>
        <ActivityIndicator animating={loading} size="large" />
        {!loading && data.length < 1 && (
          <>
            <AppText style={styles.zz}>
              You Have'nt Added Any Property Yet
            </AppText>
          </>
        )}

        {!loading && (
          <AppText style={styles.listText}>
            My Listed Proprties &#40;{data.length}&#41;
          </AppText>
        )}

        <FlatList
          data={data}
          keyExtractor={(listing) => listing._id}
          renderItem={({ item }) => (
            <UserCard
              title={item.title}
              price={"GHC " + item.price + "/"}
              image={{ uri: item.coverimage }}
              catagery={item.catagery}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avConatiner: {
    //backgroundColor:"red",
    width: "100%",
    alignItems: "center",
  },
  avatar: {
    overflow: "hidden",
    width: 90,
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 45,
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
    height: 46,
    width: 41,
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 25,
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
  humburger: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
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
  humburger1: {
    width: 36,
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
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
  text1: {
    color: colors.primaryBlue,
  },
  text: {
    paddingVertical: 10,
  },
  Image: {
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
  listText: {
    fontSize: 24,
    // paddingBottom: 22,
  },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fafcfb",
  },
  primarybox: {
    paddingHorizontal: 10,
    flex: 3.6,
    width: "100%",
    backgroundColor: "#2c62e2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  secondarybox: {
    flex: 4,
    width: "100%",
    backgroundColor: "#fafcfb",
    //borderRadius: 30,
    //alignItems: "flex-start",
    //paddingVertical: 30,
    paddingHorizontal: 10,
    //paddingTop: 35,
    //overflow: "hidden",
  },
  selectorContainer: {
    paddingVertical: 25,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  pm: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    // backgroundColor: "pink",
    justifyContent: "space-between",
  },
  threeicons: {
    flexDirection: "row",
    //  backgroundColor: "red",
    width: 120,
    justifyContent: "space-evenly",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    paddingTop: 4,
  },
  twobtns: {
    flexDirection: "row",
    // paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btns: {
    backgroundColor: "white",
    // padding: 10,
    borderRadius: 10,
    width: "47%",
    paddingVertical: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btns1: {
    backgroundColor: "#67e090",
    // padding: 10,
    borderRadius: 10,
    width: "47%",
    paddingVertical: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bigbtn: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 7,
    borderRadius: 10,
  },
  whiteText: {
    color: colors.white,
    marginLeft: 5,
  },
  zz: {
    textAlign: "center",
  },
});

export default UserPropertiesScreen;
