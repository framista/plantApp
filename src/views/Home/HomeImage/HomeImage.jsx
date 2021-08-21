import React from 'react';
import { View } from 'react-native';
import MainTree from '../../../assets/svg/MainTree.svg';

import getStyles from './HomeImage.styles';

const HomeImage = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <MainTree width={300} height={400} />
    </View>
  );
};

export default HomeImage;
