import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeftNav = ({ items = [] }) => {
  return (
    <View style={styles.nav}>
      {items.map((item, index) => (
        <Text key={index} style={styles.navItem}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    width: 100,
    backgroundColor: '#34495e',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  navItem: {
    marginVertical: 10,
    fontSize: 18,
    color: '#ecf0f1',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#95a5a6',
  },
});

export default LeftNav;
