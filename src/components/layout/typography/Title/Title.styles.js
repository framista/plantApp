import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/layout/colors';
import { heightPixel } from '../../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  text: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: heightPixel(125),
    paddingBottom: heightPixel(10),
  },
});

export default StyleSheet.create(getStyles);
