import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get screen width and height for responsiveness
const { width } = Dimensions.get('window');

const Footer = ({ content }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    paddingHorizontal: 10, 
    width: '100%', 
  },
  footerText: {
    fontSize: width > 360 ? 16 : 14, // Adjust font size based on screen width
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default Footer;
