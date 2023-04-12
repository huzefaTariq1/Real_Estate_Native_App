import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import routes from "../config/routes";
import OwnerChat from "../components/OwnerChat";
import AppText from "../components/AppText";

const OwnerChatScreen = () => {
  const [text, setText] = useState("");

  // dummy data of chat
  const listings = [
    {
      id: 1,
      name: "Debra",
      msg: "i'll be there",
      source: require("../assets/Debra.png"),
    },
    {
      id: 2,
      name: "Kyle",
      msg: "Hello Hope you Doing well",
      source: require("../assets/Kyle.png"),
    },
    {
      id: 3,
      name: "Mask",
      msg: "Hi, see you after time",
      source: require("../assets/Mask.png"),
    },
    {
      id: 4,
      name: "Johnny",
      msg: "good to see you",
      source: require("../assets/path.png"),
    },
    {
      id: 5,
      name: "John",
      msg: "i'll be in touch have a nice day",
      source: require("../assets/john.png"),
    },
    {
      id: 6,
      name: "Debra",
      msg: "i'll be there",
      source: require("../assets/Debra.png"),
    },
    {
      id: 7,
      name: "Kyle",
      msg: "Hello Hope you Doing well",
      source: require("../assets/Kyle.png"),
    },
    {
      id: 8,
      name: "Mask",
      msg: "Hi, see you after time",
      source: require("../assets/Mask.png"),
    },
    {
      id: 9,
      name: "Johnny",
      msg: "good to see you",
      source: require("../assets/path.png"),
    },
    {
      id: 10,
      name: "John",
      msg: "i'll be in touch have a nice day",
      source: require("../assets/john.png"),
    },
  ];

  console.log(text);

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <SafeAreaView>
          <View
            style={{
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>

            {/* input searc */}
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={(input) => setText(input)}
                value={text}
                placeholderTextColor="#9C9C9C"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.secondarybox}>
        <View style={{ paddingVertical: 10 }}>
          <AppText style={{ fontSize: 30, fontWeight: "bold" }}>
            Messages
          </AppText>
          <AppText style={{ color: "#9C9C9C" }}>
            You Have Two Unread Messages
          </AppText>
        </View>

        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <OwnerChat
              onPress={() => navigation.navigate(routes.STARTS_CHAT, item)}
              source={item.source}
              name={item.name}
              msg={item.msg}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  primarybox: {
    paddingHorizontal: 10,
    flex: 1,
    width: "100%",
    backgroundColor: "#2c62e2",
    overflow: "hidden",
    justifyContent: "center",
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
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#E9E9EC",
    color: "#9C9C9C",
  },
});

export default OwnerChatScreen;
