import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./screens/HomeScreen";
import {F1VideosScreen} from "./screens/F1VideosScreen";
import {CNNNewsScreen} from "./screens/CNNNewsScreen";
import {NewsScreen} from "./screens/NewsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {StatusBar} from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return <Stack.Navigator>
    <Stack.Screen name={'Home'} component={HomeScreen}/>
    <Stack.Screen name={'F1Videos'} component={F1VideosScreen}/>
    <Stack.Screen name={'CNNNews'} component={CNNNewsScreen}/>
    <Stack.Screen name={'News'} component={NewsScreen}/>
  </Stack.Navigator>
}

const Tab = createBottomTabNavigator();

const CNNNewsNavigationForTabOrDrawer = () => {
  return <Stack.Navigator>
    <Stack.Screen name={'CNNNews'} component={CNNNewsScreen} options={{headerShown: false}}/>
    <Stack.Screen name={'News'} component={NewsScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
}

const TabNavigation = () => {
  return <Tab.Navigator>
    <Tab.Screen
      name={'F1Videos'}
      component={F1VideosScreen}
      options={{
        tabBarIcon: ({focused, color, size}) =>
          <Ionicons name={focused ? 'car' : 'car-outline'} size={size} color={color}/>
      }}
    />
    <Tab.Screen
      name={'CNNNewsNavigation'}
      component={CNNNewsNavigationForTabOrDrawer}
      options={{
        tabBarIcon: ({focused, color, size}) =>
          <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} size={size} color={color}/>,
        tabBarBadge: 3
      }}
    />
  </Tab.Navigator>
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return <Drawer.Navigator initialRouteName={'F1Videos'}>
    <Drawer.Screen name={'F1Videos'} component={F1VideosScreen}/>
    <Drawer.Screen name={'CNNNewsNavigation'} component={CNNNewsNavigationForTabOrDrawer}/>
  </Drawer.Navigator>
}

// If you want to change the navigation type, comment / uncomment the elements.
// Make sure to keep just one uncommented.
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <StackNavigation/>
      {/*<TabNavigation/>*/}
      {/*<DrawerNavigation/>*/}
    </NavigationContainer>
  );
}
