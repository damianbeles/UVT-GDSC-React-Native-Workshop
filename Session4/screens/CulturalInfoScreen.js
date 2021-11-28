import React from 'react';
import {Text, StyleSheet, View, Image} from "react-native";
import {CustomButton} from "../components/CustomButton";

export const CulturalInfoScreen = ({navigation, route}) => {
  const {title, img, address, description, location} = JSON.parse(route.params);

  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subheader}>{location}</Text>
    <Text style={styles.subheader}>{address}</Text>
    <Image style={{width: '100%', height: 600, margin: 50}} source={{uri: img}}/>
    <Text style={[styles.subheader, {alignSelf: 'flex-start', marginBottom: 20}]}>{description}</Text>
    <CustomButton title={'Scan another one'} onPress={() => {
      navigation.replace('Home');
    }}/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 72,
    fontWeight: '600',
  },
  subheader: {
    fontSize: 36,
  }
});
