import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppButton from "./AppButton";

const AddReturnModal = ({ modalVisibled, setModalVisibled }) => {
  useEffect(() => {
    setAdded(false);
  }, [control]);
  const navigation = useNavigation();
  //console.log(modalVisibled);
  const animation = useRef(null);
  //const [modalVisible, setModalVisible] = useState(false);
  const [added, setAdded] = useState(false);
  const [control, setControl] = useState(true);

  const closeModal = () => {
    setModalVisibled(!modalVisibled);
  };

  const confirmLogout = () => {
    // setModalVisibled(!modalVisibled);
    //  navigation.navigate(routes.LOGIN_SIGNUP);
    setAdded(true);
    setControl(!control);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibled}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibled(!modalVisibled);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {added == false && (
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name="ios-checkmark-circle"
                  size={50}
                  color="#01E08F"
                />

                <AppText style={{ paddingTop: 10 }}>
                  Add Returns To Wallet?
                </AppText>

                <View style={styles.twobtns}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => closeModal()}
                  >
                    <Text style={styles.textStyle1}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose1]}
                    onPress={() => confirmLogout()}
                  >
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* added true */}
            {added == true && (
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name="ios-checkmark-circle"
                  size={50}
                  color="#01E08F"
                />

                <AppText style={{ paddingTop: 10 }}>Added Successfully</AppText>

                <TouchableOpacity
                  onPress={() => setModalVisibled(!modalVisibled)}
                  style={{
                    backgroundColor: "#1E32FA",
                    paddingHorizontal: 70,
                    paddingVertical: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                  }}
                >
                  <AppText style={{ color: "white" }}>Done</AppText>
                </TouchableOpacity>

                {/* <AppButton
                  textcolor="white"
                  title="login"
                  borderColor="#1645f5"
                  onPress={() => console.log("tapped")}
                /> */}
              </View>
            )}
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibled(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

export default AddReturnModal;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingTop: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    borderWidth: 1,
    borderColor: "#0336FF",
    backgroundColor: "white",
    width: "45%",
    marginTop: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose1: {
    backgroundColor: "#1E32FA",
    width: "45%",
    marginTop: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",

    textAlign: "center",
  },
  textStyle1: {
    color: "#0336FF",

    textAlign: "center",
  },
  twobtns: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
