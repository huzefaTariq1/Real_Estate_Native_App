import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import client from "../api/client";
import AppButton from "../components/AppButton";
import routes from "../config/routes";

const DisplayPropertiesScreen = ({ navigation }) => {
  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  });

  const [text, setText] = useState("");
  const [selected, setSelected] = useState("sale");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyType, setPropertyType] = useState("Commercial Properties");

  useEffect(() => {
    loadListing();
  }, [selected]);

  // server coming data handling function
  const loadListing = async () => {
    setLoading(true);
    const response = await client.get(
      `/api/property/filter/type?search=${selected}`
    );
    setLoading(false);

    if (!response.ok) {
      console.log(response);
      setError(true);
      return;
    }
    setError(false);
    setData(response.data);
  };

  // function for handling catagery
  const handleClick = (value) => {
    setSelected(value);
    console.log(value);
  };

  // function for handling proprty type
  const toggleModal = (type) => {
    setPropertyType(type);
    setModalVisible(false);
  };

  // toogle modal functions
  const toggleModal1 = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.topBarr}>
        <View style={styles.insideTopBarr}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.humburger}
          >
            <Octicons name="three-bars" size={15} color="black" />
          </TouchableOpacity>

          {/* serach bar */}
          <View style={styles.container}>
            <AntDesign name="search1" size={18} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Search,Properties,Area etc"
              onChangeText={(input) => setText(input)}
              value={text}
              placeholderTextColor="#9C9C9C"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.FILTER_PROPERTY)}
        >
          <Image
            style={{ height: 38, width: 38 }}
            source={require("../assets/filter_icon.png")}
          />
        </TouchableOpacity>
      </View>
      {/* top bar ends */}

      <View style={styles.filterBtn}>
        <View>
          <TouchableOpacity
            style={selected === "sale" ? styles.buttonBlue : styles.buttonGrey}
            onPress={() => handleClick("sale")}
          >
            <Text
              style={selected === "sale" ? styles.textWhite : styles.textBlack}
            >
              sale
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={selected === "rent" ? styles.buttonBlue : styles.buttonGrey}
            onPress={() => handleClick("rent")}
          >
            <Text
              style={selected === "rent" ? styles.textWhite : styles.textBlack}
            >
              Rent
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={
              selected === "short_stay" ? styles.buttonBlue : styles.buttonGrey
            }
            onPress={() => handleClick("short_stay")}
          >
            <Text
              style={
                selected === "short_stay" ? styles.textWhite : styles.textBlack
              }
            >
              Short Stay
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal of real state type */}

      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.dropDownText1}>Select Real Estate Types</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "space-between" }}
            onPress={openModal}
          >
            <Text style={styles.dropDownText}>
              {propertyType ? propertyType : "Commercial Properties"}
            </Text>
            <View style={{ justifyContent: "center", paddingRight: 10 }}>
              <AntDesign name="caretdown" size={14} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          onBackdropPress={toggleModal1}
          animationIn={"slideInRight"}
          isVisible={isModalVisible}
        >
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => toggleModal("Commercial Properties")}
            >
              <Text style={styles.text}>Commercial Properties</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleModal("Residential Properties")}
            >
              <Text style={styles.text}>Residential Properties</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleModal("Industrial Properties")}
            >
              <Text style={styles.text}>Industrial Properties</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleModal("Land")}>
              <Text style={styles.text}>Land</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      {/* Modal of real state type close */}

      <View>
        {error && (
          <>
            <AppText style={{ textAlign: "center" }}>
              Could not Fetch Data
            </AppText>
            <AppButton title="Retry" color="secondary" onPress={loadListing} />
          </>
        )}
        {loading ? (
          <ActivityIndicator animating={loading} size="large" />
        ) : null}

        <FlatList
          height={400}
          data={data}
          keyExtractor={(listing) => listing._id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              price={"GHC " + item.price + "/"}
              image={{ uri: item.coverimage }}
              catagery={item.catagery}
              onPress={() => navigation.navigate("DetailPropertyScreen", item)}
              loc="Oyafia"
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonBlue: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,

    width: 105,
    marginVertical: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  buttonGrey: {
    backgroundColor: "#EAEEFA",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    width: 105,

    marginVertical: 10,
    borderColor: "#EAEEFA",
    borderWidth: 2,
  },
  container: {
    borderRadius: 30,
    width: 220,
  },
  filter: {
    width: 36,
    height: 36,
    backgroundColor: colors.primaryBlue,
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
  filterBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterBtnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingTop: 10,
  },
  humburger: {
    width: 36,
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  insideTopBarr: {
    flexDirection: "row",
    alignItems: "center",
  },
  screen: {
    paddingHorizontal: 6,
    backgroundColor: "#FAFBFF",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWhite: {
    color: colors.white,
    fontSize: 12,
    textTransform: "uppercase",
  },
  textBlack: {
    color: "black",
    fontSize: 12,
    textTransform: "uppercase",
  },

  container: {
    backgroundColor: "#F2F6FE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    width: "76%",
    padding: 7,
    marginVertical: 10,
    borderRadius: 25,
  },
  input: {
    //   width: "100%",
    //   height: 50,
    //   padding: 10,
    //   borderRadius: 25,
    //   backgroundColor: "#E9E9EC",
    //   color: "#9C9C9C",
    fontSize: 12,
    marginLeft: 10,
  },
  dropDownText: {
    fontSize: 20,
    padding: 10,
  },
  dropDownText1: {
    fontSize: 21,
    padding: 10,
    color: colors.primaryBlue,
    fontWeight: "600",
  },
  heading: {
    borderBottomColor: colors.lightGreyBackground,
    borderBottomWidth: 2,
  },
  main: {
    marginBottom: 30,
    borderRadius: 10,
    width: "100%",
    backgroundColor: colors.white,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 10,
    paddingLeft: 8,
  },
  topBarr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DisplayPropertiesScreen;
