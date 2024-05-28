// import libraries to create component
import React,{useState} from "react";
import {  StyleSheet, View } from "react-native";
import IntroScreen from "./src/Views/IntroScreen";
import MainScreen from "./src/Views/MainScreen";

// create a component that return some jsx/simple function
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
 
  setTimeout(() => {
    setIsLoaded(true)
  }, 2000);
  return (
   isLoaded?<MainScreen/>:<IntroScreen/>
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
