import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get screen dimensions for responsive styling
const { width, height } = Dimensions.get('window');

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
    width: width > 600 ? 150 : '25%', // Adjust width based on screen size
    // height: height, // Full height of the screen
    height: 588,
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
    marginVertical: 5,
    // fontSize: width > 600 ? 18 : 16, // Adjust font size based on screen width
    fontSize: 9,
    color: '#ecf0f1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#95a5a6',
  },
});

export default LeftNav;
