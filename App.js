import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;
