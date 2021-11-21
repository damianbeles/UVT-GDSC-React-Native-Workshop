import React from 'react';
import {Button, Linking, StyleSheet, Text} from "react-native";

export const News = ({ route }) => {
  const { title, content, url } = route.params;

  return <>
    <Text style={{fontSize: 24, margin: 10}}>{title}</Text>
    <Text>{content}</Text>
    <Button title={'Read More'} onPress={() => Linking.openURL(url)} />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
