import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  welcomeContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  }
});

const WelcomeComponent = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text>Hello I am from component 😃</Text>
    </View>
  )
}

export default WelcomeComponent;

