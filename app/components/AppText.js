import React, { useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style }) {
  const [fontsLoaded] = useFonts({
    Popins: require("../assets/fonts/Poppins-Regular.ttf"),
    Popins1: require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "Popins",
  },
});
export default AppText;
