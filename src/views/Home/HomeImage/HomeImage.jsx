import React from 'react';
import { View } from 'react-native';
import MainTree from '../../../assets/svg/MainTree.svg';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

import getStyles from './HomeImage.styles';

const HomeImage = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <MainTree width={widthPixel(650)} height={heightPixel(1100)} />
    </View>
  );
};

export default HomeImage;
