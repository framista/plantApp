import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    padding: heightPixel(25),
    backgroundColor: '#fff',
    marginRight: 10,
    width: widthPixel(450),
    maxWidth: widthPixel(450),
    borderRadius: heightPixel(40),
  },
  image: {
    width: '100%',
    height: heightPixel(370),
    borderRadius: heightPixel(40),
  },
  textSecondary: {
    color: colors.GRAY,
    fontSize: heightPixel(25),
    paddingBottom: heightPixel(15),
  },
  textPrimary: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: heightPixel(30),
    marginTop: heightPixel(10),
  },
});

export default StyleSheet.create(getStyles);
