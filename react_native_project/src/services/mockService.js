import React from 'react';
import { Text } from 'react-native';

export const getMockData = () => {
  return {
    header: (
      <>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ecf0f1' }}>Welcome!  </Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#ecf0f1' }}>Wellness App</Text>
      </>
    ),
    footer: "© 2024 Wellness App",
    leftNav: ["Home", "About", "Contact"],
    body: "This is a sample body content loaded from a mock service."
  };
};
