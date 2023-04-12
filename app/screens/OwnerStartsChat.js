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
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import routes from "../config/routes";

import AppText from "../components/AppText";
import colors from "../config/colors";
import SendMessage from "../components/sendMessage";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import AuthContext from "../auth/context";
import listings from "../api/listings";
import UserCard from "../components/UserCard";
import ReceiveMessage from "../components/ReceiveMessage";

const OwnerStartsChat = ({ route }) => {
  // const { user } = useContext(AuthContext);

  const [text, setText] = useState("");
  const [send, setSend] = useState("");
  const [sendMessages, setSendMessages] = useState([]);

  const navigation = useNavigation();
  const owner = route.params;

  const handleSend = () => {
    setSend(text);
    setText("");
  };

  console.log(sendMessages);

  return (
    <View style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.primarybox}>
        <SafeAreaView>
          <View
            style={{
              height: "100%",
              flexDirection: "row",
              alignItems: "center",

              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>

            {/* input searc */}
            <View style={styles.OwnerDeatil}>
              <View style={styles.imgConatiner}></View>
              {owner && <AppText style={styles.name1}>{owner.name}</AppText>}
              {!owner && <AppText style={styles.name1}>Jack Nicolson</AppText>}
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.secondarybox}>
        <ScrollView>
          <ReceiveMessage
            message={" Hi would you be avialbe for a cofee next week"}
            time="5:06"
          />
          <SendMessage
            message={"Hi Ashley,With Pleasent,Do You prefer when"}
            time="5:07"
          />

          <ReceiveMessage
            message={"Hmmm,Tuesday night around 9 PM, goods for you"}
            time="5:08"
          />
          <ReceiveMessage message={"Be on time "} time="5:08" />
          <SendMessage
            message={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            }
            time="5:10"
          />
          <SendMessage
            message={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            }
            time="5:10"
          />
        </ScrollView>
      </View>
      <View style={styles.secondarybox1}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="ios-attach" size={30} color="black" />
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(input) => setText(input)}
              value={text}
              placeholderTextColor="#9C9C9C"
            />
            <TouchableOpacity onPress={() => handleSend()}>
              <Ionicons name="send-sharp" size={24} color="#0336FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F6FE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 8,
    marginVertical: 10,
  },
  input: {
    //   width: "100%",
    //   height: 50,
    //   padding: 10,
    //   borderRadius: 25,
    //   backgroundColor: "#E9E9EC",
    //   color: "#9C9C9C",
    fontSize: 12,
  },
  imgConatiner: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
    borderRadius: 25,
  },
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
  secondarybox1: {
    flex: 0.7,
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    //borderRadius: 30,
    //alignItems: "flex-start",
    //paddingVertical: 30,
    paddingHorizontal: 10,
    //paddingTop: 35,
    //overflow: "hidden",
  },
  name1: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  OwnerDeatil: { flexDirection: "row", alignItems: "center" },
});

export default OwnerStartsChat;
