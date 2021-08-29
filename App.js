import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './src/components/layout/navigation/MainNavigation/MainNavigation.jsx';
import { NavigationContainer } from '@react-navigation/native';

import configureStore from './src/store/index.js';
import { navigationRef } from './src/components/layout/navigation/MainNavigation/RootNavigation';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
