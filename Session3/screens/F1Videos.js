import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export const F1Videos = () => {
  return <View style={styles.container}>
    <YoutubePlayer
      height={300}
      videoId={"TwWVKhNNkF8"}
    />
    <Text>A</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
