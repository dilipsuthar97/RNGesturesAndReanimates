import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/Routes';

function App() {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </React.Fragment>
  );
}

export default gestureHandlerRootHOC(App);
