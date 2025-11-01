import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationLight, DarkTheme as NavigationDark } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import { useThemeStore } from './src/store/themeStore';

const MyLightTheme = {
  ...NavigationLight,
  colors: {
    ...NavigationLight.colors,
    background: '#ffffff',
    text: '#000000',
    primary: '#1e90ff',
    card: '#f2f2f2',
    border: '#dcdcdc',
  },
};

const MyDarkTheme = {
  ...NavigationDark,
  colors: {
    ...NavigationDark.colors,
    background: '#0f1720',
    text: '#ffffff',
    primary: '#4aa3ff',
    card: '#0b1220',
    border: '#1f2937',
  },
};

export default function App() {
  const theme = useThemeStore((s) => s.theme);
  const navTheme = theme === 'dark' ? MyDarkTheme : MyLightTheme;

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <StackNavigator />
    </NavigationContainer>
  );
}
