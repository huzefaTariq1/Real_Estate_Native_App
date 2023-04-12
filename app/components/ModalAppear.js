import React, { useState, useRef } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import routes from "../config/routes";

import AppText from "../components/AppText";

const ModalAppear = ({ modalVisibled, setModalVisibled, amount }) => {
  const navigation = useNavigation();
  //console.log(modalVisibled);
  const animation = useRef(null);
  //const [modalVisible, setModalVisible] = useState(false);

  //   const closeModal = () => {
  //     //  setModalVisibled(!modalVisibled);
  //     console.log("tapped");
  //   };

  const closeModal = () => {
    setModalVisibled(!modalVisibled);
    navigation.navigate(routes.INVESTMENT_DASHBORAD);
    console.log("tapped");
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibled}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibled(!modalVisibled);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/paid.png")}
            />

            <AppText style={{ color: "#1E32FA", fontSize: 13, paddingTop: 12 }}>
              Hurrah!
            </AppText>
            <AppText
              style={{ color: "#01E08F", fontSize: 13, paddingBottom: 15 }}
            >
              You've invested {amount} GHC
            </AppText>

            <TouchableOpacity
              onPress={() => closeModal()}
              style={{
                backgroundColor: "#1E32FA",
                padding: 9,
                borderRadius: 25,
                justifyContent: "center",
                alignContent: "center",
                paddingHorizontal: 30,
              }}
            >
              <AppText style={{ fontSize: 12, color: "white" }}>
                Go to Your Dashboard
              </AppText>
            </TouchableOpacity>

            {/* <View style={styles.twobtns}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => closeModal()}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.buttonClose1]}
                onPress={() => confirmLogout()}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
            </View> */}
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

export default ModalAppear;

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
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#30373E",
    width: "45%",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonClose1: {
    backgroundColor: "#1492E6",
    width: "45%",
    marginTop: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  twobtns: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
