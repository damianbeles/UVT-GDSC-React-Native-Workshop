import React from 'react';
import {View, Text} from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

const videos = [
  { title: 'Steering Wheel Explained', id: 'giWg44Uprb4' },
  { title: 'Safety Car Explained', id: 'r7JfBJzUN0U' },
  { title: 'Lando Norris Funny Moments', id: '0QYcCfpXo7s' },
];

export const F1VideosScreen = () => {
  return <View style={{flex: 1}}>
    {videos.map(video => (<View key={video.id}>
      <Text style={{fontSize: 20}}>{video.title}</Text>
      <YoutubeIframe height={250} videoId={video.id}/>
    </View>))}
  </View>
}
