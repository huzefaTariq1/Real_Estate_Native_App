import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

// import {
//   Form,
//   FormField,
//   FormPicker as Picker,
//   SubmitButton,
// } from "../components/forms";

import Screen from "../components/Screen";
// import FormImagePicker from "../components/forms/FormImagePicker";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import FormImagePicker from "../components/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  //category: Yup.object().required().nullable().label("Category"),
  //images: Yup.array().min(1, "Please select at least one image."),
  images: Yup.mixed().required("File is required"),
  images1: Yup.mixed().required("File is required"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const gettingValues = (val) => {
    const { images1, images } = val;
    const imagesArray = [images, images1];
    console.log(imagesArray);
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          //category: null,
          images: "",
          images1: "",
        }}
        onSubmit={(values) => gettingValues(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormImagePicker name="images1" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
