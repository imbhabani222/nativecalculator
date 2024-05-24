// import libraries to create component
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/ContactUs";

// create a component that return some jsx/simple function
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="firstscreen"
          component={CustomComponent}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
         <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
         <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// create a stylesheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100,
  },
});

// export the fileso that we can use it elsewhere in our app
export default App;
