import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    marginBottom: heightPixel(40),
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: heightPixel(10),
  },
  textSecondary: {
    marginRight: 5,
    color: colors.GRAY,
    fontSize: heightPixel(38),
  },
  textPrimary: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: heightPixel(38),
  },
});

export default StyleSheet.create(getStyles);
