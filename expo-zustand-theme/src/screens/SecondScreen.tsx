import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useThemeStore } from '../store/themeStore';

export default function SecondScreen() {
  const navTheme = useTheme();
  const theme = useThemeStore((s) => s.theme);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: navTheme.colors.background }}>
      <Text style={{ color: navTheme.colors.text, fontSize: 20 }}>Segunda tela</Text>
      <Text style={{ color: navTheme.colors.text, marginTop: 10 }}>Tema atual: {theme}</Text>
    </View>
  );
}
