import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'

import { HomeScreen, AddScreen, SettingsScreen, AddFormScreen, AmbientScreen, ChillScreen, FreezeScreen } from './src/screens';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './src/store';
import { Theme } from './src/store/theme';
import { lightTheme, darkTheme } from './src/utils';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AddStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Manual Form" component={AddFormScreen} />
    </Stack.Navigator>
  )
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Ambient" component={AmbientScreen} />
      <Stack.Screen name="Chill" component={ChillScreen} />
      <Stack.Screen name="Freeze" component={FreezeScreen} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {

  const themeCtx = useSelector((state: RootState) => state.theme)

  return (
    <View style={{ flex: 1, backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background}}>
      <StatusBar 
        style={themeCtx.theme === Theme.LIGHT ? 'dark' : 'light'}
        backgroundColor={themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background}
      />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
          tabBarStyle: {
            height: 60,
            backgroundColor: themeCtx.theme === Theme.LIGHT ? lightTheme.background : darkTheme.background,
          },
          headerShown: false,
        }}>
          <Tab.Screen name="HomeRoot" component={HomeStackNavigator}/>
          <Tab.Screen name="AddRoot" component={AddStackNavigator}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default function App() {

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}