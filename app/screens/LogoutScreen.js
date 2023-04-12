// import { View, Text } from "react-native";
// import React, { useContext } from "react";
// import Screen from "../components/Screen";
// import AppButton from "../components/AppButton";
// import AuthContext from "../auth/context";
// import storage from "../auth/storage";
// import { useNavigation } from "@react-navigation/native";

// const LogoutScreen = () => {
//   const navigation = useNavigation();

//   const { user, setUser } = useContext(AuthContext);

//   const handleLogout = () => {
//     setUser(null);
//     storage.removeToken();
//     // navigation.navigate("LoginTypeScreen")
//   };

//   return (
//     <Screen>
//       <AppButton title="log" onPress={handleLogout} />

//       <View>
//         <Text>LogoutScreen</Text>
//       </View>
//     </Screen>
//   );
// };

// export default LogoutScreen;

import React, { useState, useRef, useContext, useEffect } from "react";
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
import { useFocusEffect } from "@react-navigation/native";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

import AppText from "../components/AppText";

const LogOutScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  useFocusEffect(() => {
    setModalVisible(true);
  });
  const navigation = useNavigation();

  const { user, setUser } = useContext(AuthContext);

  console.log(modalVisible);
  const animation = useRef(null);

  const closeModal = () => {
    navigation.navigate("DisplayPropertiesScreen");
    setModalVisible(!modalVisible);
  };

  const confirmLogout = () => {
    //setModalVisible(!modalVisible);
    setUser(null);
    storage.removeToken();
    // navigation.navigate("LoginTypeScreen")
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText style={{ color: "black" }}>Log Out?</AppText>

            <View style={styles.twobtns}>
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

export default LogOutScreen;

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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
