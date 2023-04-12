import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Yup from "yup";
import Modal from "react-native-modal";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(15).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().min(15).label("Description"),
  bedroom: Yup.number().required().min(1).label("BedRoom"),
  washroom: Yup.number().required().min(1).label("Washroom"),
  carParking: Yup.number().required().min(0).label("CarParing"),
  kitchen: Yup.number().required().min(1).label("Kitchen"),
  floorArea: Yup.number().required().min(1).label("Floor Area"),
});
const PostPropertyFormScreen1 = ({ navigation }) => {
  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  });

  const [selected, setSelected] = useState("sale");
  const [tap, setTap] = useState(true);
  const [airCondition, setAircondition] = useState(true);
  const [quarterAvailable, setQuarterAvaiable] = useState(true);
  const [valuere, setValuere] = useState("commercial");
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyType, setPropertyType] = useState("Commercial Properties");

  // handling property catagery
  const handleClick = (value) => {
    setSelected(value);
  };

  // managing toogle btns
  const set1 = () => {
    setTap(false);
  };
  const set2 = () => {
    setAircondition(false);
  };
  const set3 = () => {
    setQuarterAvaiable(false);
  };

  const set11 = () => {
    setTap(true);
  };
  const set22 = () => {
    setAircondition(true);
  };
  const set33 = () => {
    setQuarterAvaiable(true);
  };

  const toggleModal = (type) => {
    setPropertyType(type);
    setModalVisible(false);
    //handleChangere(propertyType);
  };

  const toggleModal1 = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const gettingValues = (val) => {
    const form1Values = { tap, airCondition, quarterAvailable, propertyType };
    console.log(val);
    const new1 = {
      ...val,
      selected,
      tap,
      airCondition,
      quarterAvailable,
      propertyType,
    };
    navigation.navigate("form2", new1);
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.topConatiner}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={21} color="white" />
          </TouchableOpacity>
          <AppText style={styles.topBlueHeading}>List Your Property</AppText>
        </View>

        <View style={styles.main}>
          <AppText>Select Category</AppText>
          {/* filter buttons */}
          <View style={styles.filterBtn}>
            <View>
              <TouchableOpacity
                style={
                  selected === "sale" ? styles.buttonBlue : styles.buttonGrey
                }
                onPress={() => handleClick("sale")}
              >
                <Text
                  style={
                    selected === "sale" ? styles.textWhite : styles.textBlack
                  }
                >
                  sale
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={
                  selected === "rent" ? styles.buttonBlue : styles.buttonGrey
                }
                onPress={() => handleClick("rent")}
              >
                <Text
                  style={
                    selected === "rent" ? styles.textWhite : styles.textBlack
                  }
                >
                  Rent
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={
                  selected === "short_stay"
                    ? styles.buttonBlue
                    : styles.buttonGrey
                }
                onPress={() => handleClick("short_stay")}
              >
                <Text
                  style={
                    selected === "short_stay"
                      ? styles.textWhite
                      : styles.textBlack
                  }
                >
                  Short Stay
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.main11}>
            <View style={styles.heading22}>
              <Text style={styles.dropDownText1}>Select Real Estate Types</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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
                  <Text style={styles.textii}>Commercial Properties</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleModal("Residential Properties")}
                >
                  <Text style={styles.textii}>Residential Properties</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleModal("Industrial Properties")}
                >
                  <Text style={styles.textii}>Industrial Properties</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleModal("Land")}>
                  <Text style={styles.textii}>Land</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

          {/* Modal of real state type close */}

          <AppText>Include Some Details</AppText>
          <AppText>Property Add Title</AppText>

          <AppForm
            initialValues={{
              title: "",
              price: "",
              description: "",
              bedroom: "",
              washroom: "",
              carParking: "",
              kitchen: "",
              floorArea: "",
            }}
            onSubmit={(values) => gettingValues(values)}
            validationSchema={validationSchema}
          >
            <AppFormField maxLength={255} name="title" placeholder="Title" />

            <Text style={styles.smallTexxt}>
              Mention the key feature of your item &#40;e.g
              brand,model,age,type&#41;
            </Text>

            <AppFormField
              maxLength={255}
              multiline
              name="description"
              placeholder="Description"
            />

            <Text style={styles.smallTexxt}>
              Include Condition,feature and reason for selling
            </Text>

            <AppText>Specfication</AppText>
            <View style={styles.specs}>
              <View>
                <AppText>BedRoom</AppText>
                <AppFormField
                  keyboardType="numeric"
                  maxLength={8}
                  name="bedroom"
                  placeholder="2"
                  width="40%"
                />
              </View>
              <View>
                <AppText>Wash Room</AppText>
                <AppFormField
                  keyboardType="numeric"
                  maxLength={8}
                  name="washroom"
                  placeholder="1"
                  width="40%"
                />
              </View>
            </View>
            <View style={styles.specs}>
              <View>
                <AppText>Car Parking</AppText>
                <AppFormField
                  keyboardType="numeric"
                  maxLength={8}
                  name="carParking"
                  placeholder="1"
                  width="40%"
                />
              </View>
              <View>
                <AppText>Kitchen</AppText>
                <AppFormField
                  keyboardType="numeric"
                  maxLength={8}
                  name="kitchen"
                  placeholder="1"
                  width="40%"
                />
              </View>
            </View>

            <AppText>Area Unit</AppText>

            <AppText style={styles.btnn}>Square Unit</AppText>

            <AppText>Floor Area</AppText>

            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="floorArea"
              placeholder="m2"
              width={120}
            />
            {/* commit hereeeeeeeee */}
            <AppText>Tap Availbel?</AppText>

            <View style={styles.filterBtn1}>
              <TouchableOpacity
                style={tap ? styles.buttonBlue : styles.buttonGrey}
                onPress={set11}
              >
                <Text style={tap ? styles.text1white : styles.text1black}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tap ? styles.buttonGrey : styles.buttonBlue}
                onPress={set1}
              >
                <Text style={tap ? styles.text1black : styles.text1white}>
                  No
                </Text>
              </TouchableOpacity>
            </View>

            {/* commit hereeeeeeeee */}

            <AppText>Air condition Availbel?</AppText>

            <View style={styles.filterBtn1}>
              <TouchableOpacity
                style={airCondition ? styles.buttonBlue : styles.buttonGrey}
                onPress={set22}
              >
                <Text
                  style={airCondition ? styles.text1white : styles.text1black}
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={airCondition ? styles.buttonGrey : styles.buttonBlue}
                onPress={set2}
              >
                <Text
                  style={airCondition ? styles.text1black : styles.text1white}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>

            {/* commit hereeeeeeeee */}

            <AppText>Quarters Availbel?</AppText>

            <View style={styles.filterBtn1}>
              <TouchableOpacity
                style={quarterAvailable ? styles.buttonBlue : styles.buttonGrey}
                onPress={set33}
              >
                <Text
                  style={
                    quarterAvailable ? styles.text1white : styles.text1black
                  }
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={quarterAvailable ? styles.buttonGrey : styles.buttonBlue}
                onPress={set3}
              >
                <Text
                  style={
                    quarterAvailable ? styles.text1black : styles.text1white
                  }
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>

            {/* commit hereeeeeeeee */}

            <View style={styles.pricebox}>
              <AppText style={styles.p1}>Set A price</AppText>
              <AppText style={styles.p2}>Price</AppText>
              <AppFormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                placeholder="Price"
                width={120}
              />
            </View>

            <SubmitButton title="Next" />
          </AppForm>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.primaryBlue,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  filterBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterBtn1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,

    width: "50%",
  },
  main: {
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,

    marginVertical: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
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
  pricebox: {
    backgroundColor: colors.primaryBlue,
    padding: 10,
    paddingVertical: 16,
    borderRadius: 10,
  },
  p1: {
    color: colors.white,
    fontWeight: "300",
  },
  p2: {
    fontSize: 15,
    color: colors.white,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
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
  text1: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    paddingHorizontal: 10,
  },
  text1white: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    paddingHorizontal: 10,
  },
  text1black: {
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
    paddingHorizontal: 10,
  },
  smallTexxt: {
    fontSize: 10,
    color: "#9C9C9C",
  },
  specs: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  btnn: {
    backgroundColor: colors.primaryBlue,
    color: colors.white,
    width: "40%",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  topConatiner: {
    flexDirection: "row",
    //paddingVertical: 20,
    paddingBottom: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topBlueHeading: {
    fontSize: 20,
    fontWeight: "700",
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
  heading22: {
    borderBottomColor: colors.lightGreyBackground,
    borderBottomWidth: 2,
  },
  main11: {
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
  textii: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 10,
    paddingLeft: 8,
  },
});

export default PostPropertyFormScreen1;
