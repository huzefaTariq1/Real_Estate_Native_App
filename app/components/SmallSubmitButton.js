import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

function SmallSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    // <AppButton
    //   title={title}
    //   textcolor="white"
    //   color="primaryBlue"
    //   borderColor="#1645f5"
    //   onPress={handleSubmit}
    // />
    <TouchableOpacity
      style={{
        backgroundColor: "#0336FF",
        padding: 6,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
      }}
      onPress={() => handleSubmit()}
    >
      <AppText style={{ color: "white", fontSize: 12 }}>Invest now</AppText>
    </TouchableOpacity>
  );
}

export default SmallSubmitButton;
