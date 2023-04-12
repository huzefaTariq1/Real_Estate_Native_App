import { useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import DrawerNavigator from "./app/navigation/DrawerNavigator";

export default function App() {
  const [user, setUser] = useState();
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {user ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
