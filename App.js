import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './src/components/layout/navigation/MainNavigation/MainNavigation.jsx';
import { NavigationContainer } from '@react-navigation/native';

import configureStore from './src/store/index.js';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
