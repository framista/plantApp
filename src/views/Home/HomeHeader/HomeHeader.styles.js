import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';
import { heightPixel } from '../../../utils/normalizeSizesHelper';

const TITLE_ICON_SIZE = heightPixel(170);

const getStyles = () => ({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginTop: heightPixel(15),
    paddingBottom: 5,
    width: TITLE_ICON_SIZE,
    height: TITLE_ICON_SIZE,
    borderRadius: TITLE_ICON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
});

export default StyleSheet.create(getStyles);
