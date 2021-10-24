import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GREEN,
    paddingVertical: heightPixel(45),
    paddingTop: 0,
    paddingHorizontal: widthPixel(45),
  },
});

export default StyleSheet.create(getStyles);
