// import libraries to create component
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

// create a component that return some jsx/simple function
const CustomComponent = () => {
  const myName = "Bhabani Sahu";
  const navigation = useNavigation();
  const goAhead = () => {
    navigation.navigate("Home",{data:123});
  };
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to React Native App</Text>
      <Text style={styles.textStyle1}>
        We love react native 
      </Text>
      <Text style={styles.textStyle2}>Hii, My name is {myName} </Text>
      <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={{ color: "white" }}>Go Home</Text>
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
  textStyle1: {
    fontSize: 30,
  },
  textStyle2: {},
  button: {
    backgroundColor: "blue",
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export the fileso that we can use it elsewhere in our app
export default CustomComponent;

// IMP: JSX is not a special way to embed HTML in javascript. All Jsx does is replace a file's <tags> with equivalent calls to React.createElement(), we can see it live on Babel. "https://babel.js.io/"
// 1. we can refer to JS variables inside a JSX block by using curly braces.
// 2.Always return JSX using() or grouping tags.Never give the return value undefined
// 3. we can assign  Jsx elements to a variable, then we can show that variable inside a jsx block
// 4.we can assemble different jsx elements like normal HTML.(using view)
// 5.Any Javascript expression will work between curly braces, including function calls like {getFullName("Bhabani","Sahu")}

// Q. WAP which show 3 text Elements
// 1. the first should say "welcome to Thapa technical channel" also give the textcolor blue, make it bold with font size 40 using styling.
//  2. the second should say "we love react native and i am a aubscriber of thapa technical channel" and have a font size of 30
// 3.the third one should say "Hii, my name is <yourname> " and you need to assign your name to a variable then print it up in jsx elements
