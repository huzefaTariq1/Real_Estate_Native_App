import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import FormImagePicker from "../components/FormImagePicker";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  // email: Yup.string().required().email().label("Email"),
  // phone: Yup.string()
  //   .required()
  //   .matches(/^(?=.*[0-9])(?=.{4,})/, "Must Contain 4 Numbers")
  //   .label("Phone"),
  // //password: Yup.string().required().min(4).label("Password"),
  // password: Yup.string()
  //   .required()
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/,
  //     "Must Contain 4 Characters, 1 Uppercase, 1 Lowercase, 1 Number 1 Special Character"
  //   )
  //   .label("Password"),
  // password1: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords must match"
  // ),
});
const MyProfile = () => {
  return (
    <Screen>
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
        onSubmit={(values) => console.log(values)}
        //  onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="img1" />
        <AppText style={styles.XsmallText}>
          Select a presentable photo for yourself this is very important
        </AppText>
        <AppText style={styles.text}>First Name</AppText>
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MyProfile;
