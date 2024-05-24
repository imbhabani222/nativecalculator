// import libraries to create component
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

// create a component that return some jsx/simple function
const About = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("firstscreen");
  };
  const goContactus = () => {
    navigation.navigate("Contact");
  };
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to About screen</Text>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={{ color: "white" }}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goContactus}>
        <Text style={{ color: "white" }}>Contact us</Text>
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
  },
});

// export the fileso that we can use it elsewhere in our app
export default About;
