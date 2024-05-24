// import libraries to create component
import React ,{useState}from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

// create a component that return some jsx/simple function
const Contact = () => {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("firstscreen");
  };
  const goSubmit = () => {
    // navigation.navigate("firstscreen");
    console.log("submitted");
  };
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to Contact Us screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={onChangeName}
         value={name}
      />
       <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail}
         value={email}
      />

      <TouchableOpacity style={styles.button} onPress={goSubmit}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={{ color: "white" }}>Go Back</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// export the fileso that we can use it elsewhere in our app
export default Contact;
