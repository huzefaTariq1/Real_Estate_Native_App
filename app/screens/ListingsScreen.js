import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 500,
    image: require("../assets/logsignup.png"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/chair.jpeg"),
  },
  {
    id: 3,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/chair.jpeg"),
  },
];

function ListingsScreen(props) {
  const [data, setData] = useState([]);
  const initialData = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/property");
        const json = await response.json();
        console.log(json); // loging value of json
        setData(json);
        console.log(data); // loging the value of data fter
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  initialData.current = data;
  return (
    // <Screen style={styles.screen}>
    //   {/* <FlatList
    //     data={listings}
    //     keyExtractor={(listing) => listing.id.toString()}
    //     renderItem={({ item }) => (
    //       <Card
    //         title={item.title}
    //         subTitle={"$" + item.price}
    //         image={item.image}
    //       />
    //     )}
    //   /> */}

    // </Screen>
    <Screen style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(listing) => listing._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={{ uri: item.coverimage }}
            //onPress={() => console.log("tapped")}
            //onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
      {/* <AppText>{data.title !== null ? data.title : "Loading..."}</AppText>
    <Card
      title={data.title}
      subTitle={"$" + data.price}
      image={{ uri: data.coverimage }}
      onPress={() => console.log("tapped")}
    /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.backgroundTheme,
  },
});

export default ListingsScreen;
