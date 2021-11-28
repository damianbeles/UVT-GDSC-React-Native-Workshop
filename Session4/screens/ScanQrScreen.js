import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";

export const ScanQrScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!hasPermission) {
    return <View style={styles.container}>
      <Text>No access to camera!</Text>
    </View>;
  }

  return <View style={styles.container}>
    <Text style={styles.text}>Scan a QR Code to get info about the point of interest</Text>
    <BarCodeScanner
      style={{width: 800, height: 900}}
      onBarCodeScanned={({data}) => {
        navigation.replace('Cultural', data);
      }}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  }
})
