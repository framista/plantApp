import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = withGradient => ({
  container: {
    alignItems: 'center',
    elevation: 4,
    marginBottom: heightPixel(50),
    borderRadius: heightPixel(50),
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: heightPixel(50),
    borderRadius: heightPixel(40),
  },
  text: {
    color: withGradient ? colors.WHITE : colors.GREEN,
    fontWeight: 'bold',
    fontSize: heightPixel(50),
    marginLeft: widthPixel(40),
  },
});

export default StyleSheet.create(getStyles);
