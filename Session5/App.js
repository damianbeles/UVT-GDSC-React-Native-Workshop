import React, {useEffect, useRef, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Camera} from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [tempPicUrl, setTempPicUrl] = useState(null);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View/>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return <View style={styles.container}>
    <Camera style={styles.camera} ref={cameraRef}/>
    <Button title={'Snap!'}
            onPress={() => {
              cameraRef.current
                .takePictureAsync()
                .then((res) => setTempPicUrl(res.uri))
            }}/>
    <Text>Temporary picture:</Text>
    <Image style={styles.tempPicture} source={{uri: tempPicUrl}}/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '50%',
  },
  tempPicture: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'blue',
  }
});
