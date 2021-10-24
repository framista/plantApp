import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';
import { heightPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GREEN,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: heightPixel(65),
    paddingTop: heightPixel(40),
    paddingBottom: heightPixel(40),
    backgroundColor: colors.LIGHT_GREEN,
  },
});

export default StyleSheet.create(getStyles);
