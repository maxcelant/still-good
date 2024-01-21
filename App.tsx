import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, AddScreen, SettingsScreen } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Add" component={AddScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}