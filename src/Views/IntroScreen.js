import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import img from "../../assets/calculator_icon.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={img} style={styles.innerimg} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#FFAA33",
  },
  inner: {
    width: 100,
    height: 100,
  },
  innerimg: {
    width: 50,
    height: 50,
  },
});

export default IntroScreen;
