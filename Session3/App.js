import React from 'react';
import {StyleSheet} from 'react-native';
import {F1Videos} from "./screens/F1Videos";
import {CNNNews} from "./screens/CNNNews";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Home} from "./screens/Home";
import {News} from "./screens/News";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home}/>
        <Stack.Screen name={'F1Videos'} component={F1Videos}/>
        <Stack.Screen name={'CNNNews'} component={CNNNews}/>
        <Stack.Screen name={'News'} component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
