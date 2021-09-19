import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../../../../../views/Home/HomePage/HomePage';
import PlantsCurrent from '../../../../../views/PlantsCurrent/PlantsCurrentList/PlantsCurrentList';
import PlantDetails from '../../../../../views/PlantDetails/PlantDetails';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="PlantsCurrent" component={PlantsCurrent} />
      <Stack.Screen name="PlantDetails" component={PlantDetails} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
