import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {CustomButton} from "./CustomButton";

export const Product = ({ title, price, amount, imgUrl, increaseAmount, decreaseAmount }) => {
  return <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>${price}</Text>
    </View>
    <Image
      style={styles.img}
      source={{uri: imgUrl}} />
    <View style={styles.row}>
      <CustomButton title={'-'} onPress={decreaseAmount}/>
      <Text style={styles.text}>{amount}</Text>
      <CustomButton title={'+'} onPress={increaseAmount}/>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 225,
    padding: 10,
  },
  img: {
    width: 225,
    height: 225,
  },
  text: {
    fontSize: 24,
  }
})
