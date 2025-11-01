import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { useThemeStore } from '../store/themeStore';
import { useTheme } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);
  const navTheme = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: navTheme.colors.background }}>
      <Text style={{ color: navTheme.colors.text, fontSize: 20, marginBottom: 20 }}>Home ({theme})</Text>

      <Pressable onPress={toggle} style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: navTheme.colors.border }}>
        <Text style={{ color: navTheme.colors.text }}>Alternar Tema</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Second')} style={{ marginTop: 20 }}>
        <Text style={{ color: navTheme.colors.primary }}>Ir para a segunda tela</Text>
      </Pressable>
    </View>
  );
}
