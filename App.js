import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import LeftNav from './src/components/LeftNav';
import Body from './src/components/Body';
import { getMockData } from './src/services/mockService';
import SignIn from './src/components/SignIn';
import SignOut from './src/components/SignOut';
import { initializeAnalytics } from './src/services/firebaseConfig';
import Questionnaire from './src/components/Questionnaire';
import Summary from './src/components/Summary';

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState({
    header: '',
    footer: '',
    leftNav: [],
    body: '',
    videoUri: ''
  });

  useEffect(() => {
    const mockData = getMockData();
    setData(mockData);
    // Initialize Analytics (if supported)
    initializeAnalytics();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {props => (
            <View style={styles.container}>
              <Header>{data.header}</Header>
              <View style={styles.main}>
                <LeftNav items={data.leftNav} />
                <Body content={data.body} videoUri={data.videoUri} {...props} />
              </View>
              <View style={styles.authContainer}>
                <SignIn />
                <SignOut />
              </View>
              <Footer content={data.footer} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Questionnaire" component={Questionnaire} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  authContainer: {
    padding: 10,
    alignItems: 'center',
  },
});

export default App;
