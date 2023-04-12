import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
//import ImageInputList from "./ImageInputList";
import ImageInput from "./ImageInput";
import VideoInput from "./VideoInput";
function FormVideoPicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, uri);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      //   name,
      //   imageUris.filter((imageUri) => imageUri !== uri)
      uri
    );
  };

  return (
    <>
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
      {/* <ImageInput
        imageUri={imageUris}
        onChangeImage={(imageUris) => setFieldValue(imageUris)}
      /> */}
      {/* <ImageInput onChangeImage={handleAdd} imageUri={imageUris} /> */}
      <VideoInput onChangeImage={handleAdd} imageUri={imageUris} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormVideoPicker;
