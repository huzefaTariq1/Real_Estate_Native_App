import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";

import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import AppFormFlagField from "../components/AppFormFlagField";
import FormImagePickerCircle from "../components/FormImagePickerCircle";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string()
    .required()
    .matches(/^(?=.*[0-9])(?=.{11,})/, "Must Contain 11 Numbers")
    .label("Phone"),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/,
      "Must Contain 4 Characters, 1 Uppercase, 1 Lowercase, 1 Number 1 Special Character"
    )
    .label("Password"),
  password1: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignUpREScreen = ({ route, navigation }) => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [loginFailed, setLoginFailed] = useState(false); // signupfailed

  var type = route.params.chosenOption;
  console.log(type);

  const handleSubmit = async (val) => {
    // let { email } = val;
    // console.log(email);
    setProgress(0);
    setUploadVisible(true);
    const result = await listings.addUser({ ...val, type }, (progress) =>
      setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) {
      setLoginFailed(true);
      setError(result.data.msg);
      return;
    }
    setLoginFailed(false);
    navigation.navigate("CompleteModal", email);
  };

  const handleBack = () => {
    console.log("back");
    navigation.navigate("TypeSelectScreen");
  };

  return (
    <View style={styles.main}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <View style={styles.primarybox}>
        <Image
          style={styles.Image}
          source={require("../assets/logsignup.png")}
        />
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Screen>
        <ScrollView>
          <View style={styles.secondarybox}>
            <AppText style={styles.headingText}>SignUp For Real Estate</AppText>
            <AppText style={styles.smallText}>
              Respond to the following and proceded
            </AppText>

            <AppForm
              initialValues={{
                img1: "",
                name: "",
                name2: "",
                email: "",
                password: "",
                password1: "",
                phone: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <FormImagePickerCircle name="img1" />
              <AppText style={styles.XsmallText}>
                Select a presentable photo for yourself this is very important
              </AppText>
              <AppText style={styles.text}>First Name</AppText>
              <AppFormField
                autoCorrect={false}
                icon="account"
                name="name"
                placeholder="First Name"
              />
              <AppText style={styles.text}>Last Name</AppText>
              <AppFormField
                autoCorrect={false}
                icon="account"
                name="name2"
                placeholder="Last Name"
              />
              <AppText style={styles.text}>Phone</AppText>
              <AppFormFlagField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                name="phone"
                placeholder="+233----------"
              />
              <AppText style={styles.text}>Email</AppText>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppText style={styles.text}>Password</AppText>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <AppText style={styles.text}>Confirm Password</AppText>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password1"
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
              />
              <SubmitButton title="Register" />
              <ErrorMessage error={error} visible={loginFailed} />
            </AppForm>
          </View>
        </ScrollView>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  ab: {
    width: "100%",
  },
  backBtn: {
    height: 32,
    width: 32,
    backgroundColor: colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 43,
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
  backicon: {
    height: 100,
    width: 100,
    backgroundColor: "white",
  },
  buttonContainer: {
    width: "100%",
  },

  forgotText: {
    color: "#74bef0",
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
  },
  headingText: {
    fontSize: 30,
    fontWeight: "900",
    paddingBottom: 10,
  },
  text: {
    fontWeight: "700",
  },
  Image: {
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
  main: {
    flex: 1,
    width: "100%",
  },
  primarybox: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "brown",
  },
  secondarybox: {
    flex: 5,
    width: "100%",
    backgroundColor: "#fafcfb",
    borderRadius: 40,
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 17,
    //paddingTop: 50,
    overflow: "hidden",
  },
  smallText: {
    fontSize: 15,
    fontWeight: "500",
    paddingVertical: 10,
    color: colors.medium,
    paddingBottom: 8,
  },
  XsmallText: {
    fontSize: 13,
    fontWeight: "300",
    paddingTop: 10,
    paddingBottom: 7,
    color: colors.medium,
  },
});

export default SignUpREScreen;
