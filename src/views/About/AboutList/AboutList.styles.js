import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GREEN,
    paddingVertical: heightPixel(40),
    paddingHorizontal: widthPixel(30),
  },
});

export default StyleSheet.create(getStyles);
