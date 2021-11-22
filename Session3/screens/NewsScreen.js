import React from 'react';
import {Button, Linking, Text, View} from "react-native";

export const NewsScreen = ({route}) => {
  const {headline, content, url} = route.params;

  return <View style={{flex: 1}}>
    <Text style={{fontSize: 20}}>
      {headline}
    </Text>
    <Text style={{marginBottom: 15, marginTop: 15}}>
      {content}
    </Text>
    <Button title={'Read more'} onPress={() => Linking.openURL(url)}/>
  </View>
}
