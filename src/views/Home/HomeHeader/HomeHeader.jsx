import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Subtitle, Title } from '../../../components/layout/typography';
import { colors } from '../../../constants/layout/colors';

import getStyles from './HomeHeader.styles';

const HomeHeader = () => {
  const styles = getStyles();
  return (
    <View>
      <View style={styles.titleContainer}>
        <Title text="Plant App" />
        <View style={styles.iconContainer}>
          <Icon name="grass" size={45} color={colors.GREEN} />
        </View>
      </View>
      <Subtitle text="The easiest way to identify any plant" />
    </View>
  );
};

export default HomeHeader;
