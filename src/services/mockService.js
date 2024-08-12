import React from 'react';
import { View,Text } from 'react-native';

export const getMockData = () => {
  return {
    header: (
      <>
       <View style={{ marginBottom: 0 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ecf0f1' }}>Welcome!</Text>
        </View>
        <View>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#ecf0f1' }}>Wellness App</Text>
        </View>
      </>
    ),
    footer: "© 2024 Wellness App",
    leftNav: ["Home", "About", "Contact"],
    body: "This is a sample body content and video loaded from a mock service.",
    videoUri: 'https://www.w3schools.com/html/mov_bbb.mp4' // Sample video URL
  };
};
