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
import { Foundation } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppButton from "./AppButton";

const TenantCallModal = ({ modalVisibled, setModalVisibled }) => {
  //   useEffect(() => {
  //     setAdded(false);
  //   }, [control]);
  //   const navigation = useNavigation();
  //console.log(modalVisibled);
  const animation = useRef(null);
  //const [modalVisible, setModalVisible] = useState(false);
  //   const [added, setAdded] = useState(false);
  //   const [control, setControl] = useState(true);

  const closeModal = () => {
    setModalVisibled(!modalVisibled);
  };

  const confirmLogout = () => {
    // setModalVisibled(!modalVisibled);
    //  navigation.navigate(routes.LOGIN_SIGNUP);
    // setAdded(true);
    // setControl(!control);
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
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#F39A3E",
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Foundation name="telephone" size={35} color="white" />
              </View>

              <AppText style={{ paddingTop: 10 }}>+233-533-552-555</AppText>

              <AppText style={{ paddingTop: 10 }}>Meagnmen@gmail.com</AppText>

              <View style={styles.twobtns}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => console.log("tapped")}
                >
                  <Text style={styles.textStyle1}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose1]}
                  onPress={() => console.log("tapped")}
                >
                  <Text style={styles.textStyle}>Call</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderRadius: 25,
                  paddingVertical: 7,
                  paddingHorizontal: 97,

                  marginTop: 10,
                }}
                onPress={() => closeModal()}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
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

export default TenantCallModal;

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
