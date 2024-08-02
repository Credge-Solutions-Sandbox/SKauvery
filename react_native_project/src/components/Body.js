import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = ({ content }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  bodyText: {
    fontSize: 18,
    color: '#2c3e50',
    lineHeight: 24,
  },
});

export default Body;
