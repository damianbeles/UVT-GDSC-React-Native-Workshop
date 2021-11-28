import React from 'react';
import {ScanQrScreen} from "./screens/ScanQrScreen";
import {CulturalInfoScreen} from "./screens/CulturalInfoScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={ScanQrScreen} options={{headerShown: false}}/>
        <Stack.Screen name={'Cultural'} component={CulturalInfoScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
