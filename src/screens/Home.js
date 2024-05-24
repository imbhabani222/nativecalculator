// import libraries to create component
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

// create a component that return some jsx/simple function
const Home = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  const goAhead = () => {
    navigation.navigate("About");
  };
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to Home screen</Text>
      <Text style={styles.textStyle}>Data get from first screen : {data}</Text>
      <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={{ color: "white" }}>Go About</Text>
      </TouchableOpacity>
    </View>
  );
};

// create a stylesheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "blue",
  },
  button: {
    backgroundColor: "blue",
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export the fileso that we can use it elsewhere in our app
export default Home;
