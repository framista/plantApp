import React from 'react';
import MainNavigation from './src/components/layout/navigation/MainNavigation/MainNavigation.jsx';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
