import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroceryList from './GroceryList';

export default class App extends React.Component {
  render(){

    return (
      <View style={styles.container}>
        <GroceryList />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3EAEE',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
