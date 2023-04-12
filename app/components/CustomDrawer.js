import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AppText from "./AppText";
import AppButton from "./AppButton";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView style={{ paddingHorizontal: 13 }} {...props}>
      {/* <ImageBackground source={IMGS.bgPattern} style={{height: 140}}>
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground> */}
      {/* <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View> */}
      <View style={{ padding: 6, paddingHorizontal: 11 }}>
        <AppText style={{ fontSize: 20, fontWeight: "bold" }}>Hello!</AppText>
        <View
          style={{
            borderBottomColor: "#9C9C9C",
            borderWidth: 2,
            borderTopColor: "white",
            borderLeftColor: "white",
            borderRightColor: "white",
            paddingVertical: 5,
          }}
        >
          <AppText>Good Morning</AppText>
        </View>
        <View>
          <AppButton
            textcolor="white"
            title="Invest Now"
            borderColor="#1645f5"
            onPress={() => console.log("tapped")}
          />
        </View>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  //   userImg: {
  //     width: 110,
  //     height: 110,
  //     borderRadius: 110 / 2,
  //     position: "absolute",
  //     left: width / 2 - 110,
  //     bottom: -110 / 2,
  //     borderWidth: 4,
  //     // borderColor: COLORS.white,
  //   },
  //   drawerListWrapper: {
  //     marginTop: 65,
  //   },
});
