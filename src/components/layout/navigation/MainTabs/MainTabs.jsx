import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../TabBar/TabBar.jsx';

import HomePage from '../../../../views/Home/HomePage/HomePage';
import AboutPage from '../../../../views/About/AboutPage/AboutPage.jsx';
import HistoryPage from '../../../../views/History/HistoryPage/HistoryPage.jsx';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="History" component={HistoryPage} />
      <Tab.Screen name="About" component={AboutPage} />
    </Tab.Navigator>
  );
};

export default MainTabs;
