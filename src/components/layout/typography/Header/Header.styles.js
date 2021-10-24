import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/layout/colors';
import { heightPixel } from '../../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  text: {
    color: colors.BLACK,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: heightPixel(70),
    paddingVertical: heightPixel(30),
    zIndex: 4,
    backgroundColor: colors.LIGHT_GREEN,
  },
});

export default StyleSheet.create(getStyles);
