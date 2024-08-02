import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ content }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 40,
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
  },
  footerText: {
    fontSize: 16,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
});

export default Footer;
