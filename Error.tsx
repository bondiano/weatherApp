import React from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';

export const Error: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Ошибочка вышла :(</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#D74247',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
})
