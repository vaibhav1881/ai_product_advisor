import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchScreen from './SearchScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
