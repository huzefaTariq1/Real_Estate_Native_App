import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";

import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import auth from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const LoginFormREScreen = ({ route, navigation }) => {
  const [loading, setloadig] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [error, setError] = useState(null);
  const authContext = useContext(AuthContext);
  const type = route.params.chosenOption;

  const handleSubmit = async ({ email, password }) => {
    setloadig(true);
    console.log(email, password, type);
    const result = await auth.login(type, email, password);
    if (!result.ok) {
      setLoginFailed(true);
      setError(result.data.msg);
      if (result.status === 404) {
        setError("Oops Server is Down");
      }
      setloadig(false);
      console.log(result.status);
      return;
    }
    setLoginFailed(false);
    var user = jwt_decode(result.data.token);
    authContext.setUser(user);
    storage.storeToken(result.data.token);
    console.log(user);
    setloadig(false);
  };

  const handleBack = () => {
    console.log("back");
    navigation.navigate("LoginTypeScreen");
  };

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}>
        <Image
          style={styles.Image}
          source={require("../assets/logsignup.png")}
        />
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.secondarybox}>
          <AppText style={styles.headingText}>Login As Real Estate</AppText>

          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppText style={styles.text}>Email</AppText>

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="abc@gmail.com"
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

            {/* shows loader */}
            {loading ? (
              <View style={{ alignItems: "center", width: "100%" }}>
                <ActivityIndicator animating={loading} size="large" />
              </View>
            ) : null}

            <SubmitButton title="Login" />
          </AppForm>

          {/* error showing component */}
          <ErrorMessage error={error} visible={loginFailed} />

          <View style={styles.ab}>
            <AppText style={styles.forgotText}>Forgot Password?</AppText>
          </View>

          <AppText style={styles.smallText1}>OR</AppText>
          <AppButton
            title="Create An Account"
            textcolor="black"
            color="white"
            borderColor="#D2D2D2"
            onPress={() => navigation.navigate("TypeSelectScreen")}
          />
          <AppText style={styles.smallText}>
            By Signing in you agree to our Terms of Service
          </AppText>
        </View>
      </ScrollView>
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
    color: colors.primaryBlue,
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
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
    flex: 5,
    width: "100%",
    backgroundColor: "brown",
  },
  secondarybox: {
    flex: 3,
    width: "100%",
    backgroundColor: "#fafcfb",
    borderRadius: 40,
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 17,
    paddingTop: 50,
    overflow: "hidden",
  },
  smallText: {
    fontSize: 14,
    width: "100%",
    textAlign: "center",
  },
  smallText1: {
    fontSize: 14,
    width: "100%",
    textAlign: "center",
  },
  text: {
    fontWeight: "700",
  },
});

export default LoginFormREScreen;
