import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const dog = 'https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg';
const cat = 'https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg';

export default function App() {
  const [pet, setPet] = useState(dog);

  return (
    <View style={styles.container}>
      <Text>Write something about this pet:</Text>
      <TextInput style={styles.myTextInput}/>
      <StatusBar style="auto" />
      <Button title={'DO ACTION'} onPress={() => {
        setPet(cat);
      }} />
      <Image
        style={styles.img}
        source={{uri: pet}}
      />
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
  myTextInput: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    width: 200,
  },
  img: {
    width: 200,
    height: 200,
  }
});
