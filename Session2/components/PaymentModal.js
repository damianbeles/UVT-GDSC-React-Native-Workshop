import React from 'react';
import {Modal, View, StyleSheet, Text} from "react-native";
import {Color} from "../constants/Colors";
import {CustomButton} from "./CustomButton";

export const PaymentModal = ({modalVisible, products, onPay}) => {
  return <Modal
    animationType="slide"
    visible={modalVisible}
  >
    <View style={styles.container}>
      {products.filter(product => product.amount !== 0).map(product =>
        <Text style={styles.text}>
          {product.title}, {product.amount}, {product.amount * product.price}
        </Text>)}
      <Text style={styles.text}>
        Total: {products.filter(product => product.amount !== 0)
        .reduce((accumulator, e) =>  accumulator + e.amount * e.price, 0)}
      </Text>
      <CustomButton title={'Pay'} onPress={onPay}/>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
    backgroundColor: Color.white,
    borderColor: Color.bluemine,
    borderWidth: 2,
    borderRadius: 10,
    position: 'absolute',
    top: 225,
    left: 75,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
  }
});
