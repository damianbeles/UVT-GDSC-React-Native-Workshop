import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {Color} from "../constants/Colors";

export const CustomButton = ({ unfilled, onPress, title }) => {
  const styles = unfilled ? unfilledStyle : filledStyle;

  return <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
}

const filledStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.bostonBlue,
    borderColor: Color.bluemine,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: Color.white,
    fontWeight: 'bold',
  }
});

const unfilledStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.white,
    borderColor: Color.bluemine,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10
  },
  text: {
    color: Color.bluemine,
    fontWeight: 'bold',
  }
});
