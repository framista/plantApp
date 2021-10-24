import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    backgroundColor: colors.PURE_WHITE,
    paddingVertical: heightPixel(30),
    paddingHorizontal: widthPixel(30),
    marginVertical: heightPixel(20),
    borderRadius: heightPixel(30),
  },
  title: {
    color: colors.BLACK,
    fontSize: heightPixel(45),
    fontWeight: 'bold',
    marginBottom: heightPixel(15),
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: heightPixel(5),
  },
  textSecondary: {
    marginRight: widthPixel(15),
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
