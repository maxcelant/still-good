import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, AddScreen, SettingsScreen } from './src/screens';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './src/store';
import { Theme } from './src/store/theme';
import { lightTheme, darkTheme } from './src/utils';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const theme = useSelector((state: RootState) => state.theme)

  return (
    <>
      <StatusBar style={theme.theme === Theme.LIGHT ? 'dark' : 'light'} />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background,
          },
          headerShown: false,
        }}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Add" component={AddScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default function App() {

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}