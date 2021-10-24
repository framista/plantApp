import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: heightPixel(30),
    paddingHorizontal: widthPixel(30),
    backgroundColor: colors.PURE_WHITE,
    elevation: 1,
    marginTop: heightPixel(20),
    borderRadius: heightPixel(30),
  },
  text: {
    fontSize: heightPixel(45),
    fontWeight: 'bold',
    marginLeft: widthPixel(10),
    maxWidth: '85%',
    flexWrap: 'wrap',
  },
});

export default StyleSheet.create(getStyles);
