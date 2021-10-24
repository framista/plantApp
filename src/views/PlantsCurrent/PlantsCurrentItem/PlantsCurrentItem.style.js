import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';
import { heightPixel, widthPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    padding: heightPixel(20),
    backgroundColor: colors.LIGHT_GREEN,
  },
  content: {
    marginHorizontal: widthPixel(25),
    padding: heightPixel(25),
    borderRadius: heightPixel(25),
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
  title: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: heightPixel(45),
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  textSecondary: {
    marginRight: widthPixel(15),
    color: colors.GRAY,
    fontSize: heightPixel(35),
  },
  textPrimary: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: heightPixel(35),
  },
  namesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: heightPixel(20),
  },
  textName: {
    marginBottom: heightPixel(15),
    marginRight: widthPixel(15),
    paddingVertical: widthPixel(10),
    paddingHorizontal: heightPixel(15),
    borderRadius: heightPixel(15),
    borderWidth: widthPixel(3),
    borderColor: colors.GREEN,
    fontSize: heightPixel(30),
  },
});

export default StyleSheet.create(getStyles);
