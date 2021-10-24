import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    paddingVertical: heightPixel(40),
    paddingHorizontal: widthPixel(40),
    marginHorizontal: widthPixel(40),
    backgroundColor: colors.WHITE,
    height: heightPixel(1300),
    elevation: 5,
    borderRadius: heightPixel(30),
  },
  categoriesList: {
    maxHeight: heightPixel(1000),
    paddingRight: widthPixel(30),
    marginBottom: heightPixel(35),
  },
  categoryItem: {
    marginBottom: heightPixel(15),
  },
  primaryText: {
    fontWeight: 'bold',
  },
});

export default StyleSheet.create(getStyles);
