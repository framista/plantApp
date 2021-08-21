import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePicture from '../../../../views/Home/HomePicture/HomePicture';
import MainTabs from '../MainTabs/MainTabs';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="HomePicture" component={HomePicture} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
