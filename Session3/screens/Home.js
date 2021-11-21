import {Button} from "react-native";
import React from "react";

export const Home = ({ navigation }) => {
  return <>
    <Button title={'F1 Videos'} onPress={() => navigation.navigate('F1Videos')} />
    <Button title={'CNN News'} onPress={() => navigation.navigate('CNNNews')} />
  </>
}
