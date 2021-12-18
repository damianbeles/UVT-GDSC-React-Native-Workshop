import {Button, Image, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";

const getCat = async () => {
  const response = await fetch('https://thatcopy.pw/catapi/rest/');
  const cat = await response.json();
  return cat.url;
}

export default function App() {
  const [catImage, setCatImage] = useState(null);

  useEffect(async () => {
    setCatImage(await getCat());
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.catpic} source={{uri: catImage}} />
      <Button title={'Get another cat'} onPress={async () => {
        setCatImage(await getCat())
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catpic: {
    width: '100%',
    height: '50%',
  }
});
