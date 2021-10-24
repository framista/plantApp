import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../constants/layout/colors';
import { heightPixel } from '../../../../utils/normalizeSizesHelper';

import { tabBarOptions } from './TabBar.helpers';

import getStyles from './TabBar.styles';

const TabBar = props => {
  const { state, navigation } = props;
  const { index, routes } = state;
  const currentRouteName = routes[index].name;
  const styles = getStyles();

  const onPress = option => {
    navigation.navigate(option.screen);
  };

  return (
    <View style={styles.container}>
      {tabBarOptions.map(option => {
        const isFocused = option.screen === currentRouteName;
        const iconColor = isFocused ? colors.GREEN : colors.GRAY;
        const iconSize = isFocused ? 140 : 80;
        return (
          <TouchableOpacity
            key={option.screen}
            style={[
              styles.iconContainer,
              isFocused ? styles.iconContainerFocused : {},
            ]}
            onPress={() => onPress(option)}>
            <Icon
              name={option.icon}
              size={heightPixel(iconSize)}
              color={iconColor}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
