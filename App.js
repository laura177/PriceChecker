import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroceryMenu from './GroceryMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <GroceryMenu />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(244, 225, 235, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
