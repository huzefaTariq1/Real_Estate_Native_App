import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Yup from "yup";

import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import FormImagePicker from "../components/FormImagePicker";
import FormImagePickerButton from "../components/FormImagePickerButton";
import FormVideoPicker from "../components/FormVideoPicker";
import Checkbox from "expo-checkbox";
import colors from "../config/colors";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";
import routes from "../config/routes";
import useLocation from "../../hooks/useLocation";

const fileSizeCheck = Yup.mixed()
  .required()
  .test("fileSize", (value) => {
    if (value && value.size > 10 * 1024 * 1024) {
      return "File too large";
    } else if (value && value.size <= 10 * 1024 * 1024) {
      return true;
    }
    return "File size not valid";
  });

const validationSchema = Yup.object().shape({
  images: Yup.mixed().required("Image 1 is required"),
  images1: Yup.mixed().required("Image 2 is required"),
  images2: Yup.mixed().required("Image 3 is required"),
  images3: Yup.mixed().required("Image 4 is required"),
  images4: Yup.mixed().required("Image 5 is required"),
  images5: Yup.mixed().required("Image 6 is required"),
  cover: Yup.mixed().required("Cover is required"),
  doc: Yup.mixed().required("Documentation is required"),
  houseNum: Yup.string().required().label("House Number"),
  streetName: Yup.string().required().label("Street Name"),
  fullAddress: Yup.string().required().label("Full Address"),
  videos: fileSizeCheck,
});

function PostPropertyFormScreen2({ route, navigation }) {
  // getting location co-ordinates using myhook
  const location = useLocation();

  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  });
  const [isChecked, setChecked] = useState(true);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const form1Values = route.params;

  console.log(location);

  const {
    title,
    price,
    description,
    bedroom,
    washroom,
    carParking,
    kitchen,
    floorArea,
    tap,
    airCondition,
    quarterAvailable,
    valuere,
    selected,
  } = form1Values;

  const handleSubmit = async (val) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listings.addlisting(
      {
        ...val,
        title,
        price,
        description,
        bedroom,
        washroom,
        carParking,
        kitchen,
        floorArea,
        tap,
        airCondition,
        quarterAvailable,
        valuere,
        selected,
      },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) {
      alert("not save");
      console.log(result);
      return;
    }

    navigation.navigate(routes.PROPERTY_ADD);
  };

  const handleBack = () => {
    navigation.navigate("Form1");
    console.log("back");
  };
  return (
    <Screen style={styles.container1}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <ScrollView>
        <AppForm
          initialValues={{
            cover: "",
            images: "",
            images1: "",
            images2: "",
            images3: "",
            images4: "",
            images5: "",
            doc: "",
            videos: "",
            houseNum: "",
            streetName: "",
            fullAddress: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.topConatiner}>
            <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
              <Ionicons name="chevron-back" size={21} color="white" />
            </TouchableOpacity>
            <AppText style={styles.topBlueHeading}>ADD POST</AppText>
          </View>
          <AppText style={styles.largeText}>Upload Cover Image</AppText>
          <AppText style={styles.smallText}>Type JPG,Jpeg,PNG </AppText>
          <FormImagePicker name="cover" />
          <AppText style={styles.largeText}>Upload Up to 6 Photos</AppText>
          <AppText style={styles.smallText}>Type JPG,Jpeg,PNG </AppText>
          <View style={styles.abc}>
            <FormImagePicker name="images" />
            <FormImagePicker name="images1" />
            <FormImagePicker name="images2" />
          </View>
          <View style={styles.abc}>
            <FormImagePicker name="images3" />
            <FormImagePicker name="images4" />
            <FormImagePicker name="images5" />
          </View>

          <AppText style={styles.largeText}>Upload Up To One Video</AppText>
          <FormVideoPicker name="videos" />

          <AppText style={styles.smallText}>
            For Cover Picture We Recommend Using LandEscape Mode
          </AppText>
          <AppText style={styles.blueHeading}>Property Details Form</AppText>

          <AppText>House Number</AppText>
          <AppFormField
            maxLength={8}
            name="houseNum"
            placeholder=""
            width={120}
          />
          <AppText>Street Name</AppText>
          <AppFormField
            maxLength={8}
            name="streetName"
            multiline
            placeholder=""
            width={120}
          />

          <AppText>Full Address</AppText>
          <AppFormField
            maxLength={255}
            multiline
            name="fullAddress"
            placeholder=""
            width={120}
          />

          <AppText style={styles.largeText}>
            Property Documentation Copy
          </AppText>
          <FormImagePickerButton name="doc" />
          <AppText style={styles.exsmText}>
            Property Documentation Copy Upload Image E.g Copy Of Site Plan,Photo
            Of House Number Label,Bank Statemnet Or A Utility Bill That Bears
            the Name of Property Owner Etc
          </AppText>

          <View style={styles.container}>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text style={styles.paragraph}>Letter of Consent Agrement</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text style={styles.paragraph}>
                Must Agree To A 4 % Mediation Fees To A Twiddle Through Funders
              </Text>
            </View>
          </View>
          {!isChecked && (
            <AppText style={styles.error}>Terms Must Be Checked</AppText>
          )}
          {isChecked && <SubmitButton title="Post" />}
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    height: 36,
    width: 36,
    backgroundColor: colors.primaryBlue,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  backbtnText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "300",
  },
  blueHeading: {
    color: colors.primaryBlue,
    fontSize: 22,
    fontWeight: "500",
    paddingVertical: 15,
  },
  container1: {
    padding: 10,
  },
  abc: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  error: {
    color: "red",
    alignItems: "center",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "500",
  },
  exsmText: {
    fontSize: 13,
    fontWeight: "500",
    paddingTop: 16,
    color: colors.greyText,
  },
  largeText: {
    fontSize: 15,
    fontWeight: "400",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: 10,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  topBlueHeading: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
  },
  topConatiner: {
    flexDirection: "row",
    //paddingVertical: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
});
export default PostPropertyFormScreen2;
