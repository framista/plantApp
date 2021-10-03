import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../TabBar/TabBar';

import HomeScreens from '../Screens/HomeScreens/HomeScreens';
import AboutList from '../../../../views/About/AboutList/AboutList';
import HistoryList from '../../../../views/History/HistoryList/HistoryList';

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
      <Tab.Screen name="History" component={HistoryList} />
      <Tab.Screen name="About" component={AboutList} />
    </Tab.Navigator>
  );
};

export default MainTabs;
