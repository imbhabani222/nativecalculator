import React, { useState, useRef } from "react";
import style from "../styles/MainScreen";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Animated } from "react-native-web";

const MainScreen = () => {
  const [value, setValue] = useState("0");
  const [bracketOpen, setBracketOpen] = useState(false);
  const scrollViewRef = useRef();
  const handelPress = (val) => {
    if (val === "AC") {
      setValue("0");
    } else if (val === "=") {
      try {
        if (
          (value.match(/\(/g) || []).length ===
          (value.match(/\)/g) || []).length
        ) {
          if (
            value.slice(-1) == "+" ||
            value.slice(-1) == "-" ||
            value.slice(-1) == "*" ||
            value.slice(-1) == "/" ||
            value.slice(-1) == "%" ||
            value.slice(-1) == "."
          ) {
            setValue(`${eval(value.replace(/\(\)/g, "(0)").slice(0, -1))}`);
          } else {
            setValue(`${eval(value.replace(/\(\)/g, "(0)"))}`);
          }
        }
      } catch (e) {
        console.log(e);
        setValue("Format error");
      }
    } else if (val === "back") {
      setValue(value.slice(0, -1));
    } else if (value === "Format error") {
      setValue(val);
    } else if (val === "()") {
      if (value == "0") {
        setValue("(");
        setBracketOpen(true);
      } else if (
        value.slice(-1) == "+" ||
        value.slice(-1) == "-" ||
        value.slice(-1) == "*" ||
        value.slice(-1) == "/" ||
        value.slice(-1) == "%" ||
        value.slice(-1) == "."
      ) {
        setValue(value + "(");
        setBracketOpen(true);
      } else {
        if (bracketOpen == true) {
          setValue(value + ")");
          setBracketOpen(false);
        } else {
          setValue(value + "(");
          setBracketOpen(true);
        }
      }
    } else {
      if (value === "0") {
        if (isNaN(val)) {
          setValue(value + val);
        } else {
          setValue(val);
        }
      } else if (isNaN(val)) {
        setValue(value + val);
        if (
          value.slice(-1) == "+" ||
          value.slice(-1) == "-" ||
          value.slice(-1) == "*" ||
          value.slice(-1) == "/" ||
          value.slice(-1) == "%" ||
          value.slice(-1) == "."
        ) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
      } else {
        setValue(value + val);
      }
    }
  };
  return (
    <View style={style.main_screen}>
      <ScrollView
        ref={scrollViewRef}
        style={style.main_screen_display}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <Text style={style.main_screen_display_text}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </ScrollView>
      <View style={style.main_screen_keypad}>
        <View style={style.main_screen_keypad_row}>
          <Pressable onPress={() => handelPress("AC")}>
            <View style={style.btn1_outer}>
              <Text style={style.bg1_button}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("()")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>()</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("%")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("/")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>/</Text>
            </View>
          </Pressable>
        </View>

        <View style={style.main_screen_keypad_row}>
          <Pressable onPress={() => handelPress("7")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("8")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("9")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("*")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>x</Text>
            </View>
          </Pressable>
        </View>

        <View style={style.main_screen_keypad_row}>
          <Pressable onPress={() => handelPress("4")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("5")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("6")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("-")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>-</Text>
            </View>
          </Pressable>
        </View>

        <View style={style.main_screen_keypad_row}>
          <Pressable onPress={() => handelPress("1")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("2")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("3")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("+")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>+</Text>
            </View>
          </Pressable>
        </View>

        <View style={style.main_screen_keypad_row}>
          <Pressable onPress={() => handelPress(".")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("0")}>
            <View style={style.btn_outer}>
              <Text style={style.bg_button}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("back")}>
            <View style={style.btn1_outer}>
              <Text style={style.bg1_button}>&lt;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handelPress("=")}>
            <View style={style.btn2_outer}>
              <Text style={style.bg2_button}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
