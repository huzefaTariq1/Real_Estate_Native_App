import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
//import ImageInputList from "./ImageInputList";
import ImageInput from "./ImageInput";
import ImageInputButton from "./ImageInputButton";
function FormImagePickerButton({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, uri);
  };

  const handleRemove = (uri) => {
    setFieldValue(uri);
  };

  return (
    <>
      <ImageInputButton onChangeImage={handleAdd} imageUri={imageUris} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePickerButton;
