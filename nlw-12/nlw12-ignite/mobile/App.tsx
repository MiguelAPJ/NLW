import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-zinc-950 flex-1 items-center justify-center">
      <Text className="text-zinc-50">OI</Text>
      <StatusBar style="light" translucent  />
    </View>
  );
}
