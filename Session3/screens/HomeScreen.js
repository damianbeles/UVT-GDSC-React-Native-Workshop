import React from 'react';
import {Button, View} from "react-native";

export const HomeScreen = ({navigation}) => {
  return <View style={{flex: 1}}>
    <Button title={'F1 Videos'} onPress={() => navigation.navigate('F1Videos')}/>
    <Button title={'CNN News'} onPress={() => navigation.navigate('CNNNews')}/>
  </View>
}
