import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    backgroundColor: colors.PURE_WHITE,
    padding: heightPixel(50),
    alignItems: 'center',
    marginTop: heightPixel(30),
    borderRadius: heightPixel(40),
    elevation: 0.5,
  },
  image: {
    width: widthPixel(500),
    height: heightPixel(420),
  },
});

export default StyleSheet.create(getStyles);
