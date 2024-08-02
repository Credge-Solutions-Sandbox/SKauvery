import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import LeftNav from './src/components/LeftNav';
import Body from './src/components/Body';
import { getMockData } from './src/services/mockService';

const App = () => {
  const [data, setData] = useState({
    header: '',
    footer: '',
    leftNav: [],
    body: ''
  });

  useEffect(() => {
    const mockData = getMockData();
    setData(mockData);
  }, []);

  return (
    <View style={styles.container}>
      <Header title={data.header} />
      <View style={styles.main}>
        <LeftNav items={data.leftNav} />
        <Body content={data.body} />
      </View>
      <Footer content={data.footer} />
    </View>
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
});

export default App;
