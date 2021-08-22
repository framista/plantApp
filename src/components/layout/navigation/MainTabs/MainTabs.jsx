import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../TabBar/TabBar';

import HomeScreens from '../Screens/HomeScreens/HomeScreens';
import AboutPage from '../../../../views/About/AboutPage/AboutPage';
import HistoryPage from '../../../../views/History/HistoryPage/HistoryPage';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="History" component={HistoryPage} />
      <Tab.Screen name="About" component={AboutPage} />
    </Tab.Navigator>
  );
};

export default MainTabs;
