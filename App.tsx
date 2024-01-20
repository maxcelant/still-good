import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, AddScreen, StatsScreen } from './src/screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Add" component={AddScreen}/>
        <Tab.Screen name="Stats" component={StatsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}