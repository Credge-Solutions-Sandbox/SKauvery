import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get screen width for responsive styling
const { width } = Dimensions.get('window');

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: width * 0.35, // Use a percentage of screen width for responsive height
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: width > 360 ? 30 : 24, // Adjust font size based on screen width
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
