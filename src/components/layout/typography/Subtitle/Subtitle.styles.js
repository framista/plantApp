import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/layout/colors';
import { heightPixel } from '../../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  text: {
    color: colors.GRAY,
    fontSize: heightPixel(45),
  },
});

export default StyleSheet.create(getStyles);
