import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Questionnaire from './components/Questionnaire';
import Summary from './components/Summary';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Questionnaire" component={Questionnaire} />
      <Stack.Screen name="Summary" component={Summary} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
