import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/layout/colors';
import { heightPixel } from '../../../../utils/normalizeSizesHelper';

const ICON_SIZE = 160;

const getStyles = () => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: heightPixel(ICON_SIZE + 120),
    paddingBottom: heightPixel(30),
    backgroundColor: colors.LIGHT_GREEN,
  },
  iconContainer: {
    width: heightPixel(ICON_SIZE),
    height: heightPixel(ICON_SIZE),
    borderRadius: heightPixel(ICON_SIZE / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerFocused: {
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
});

export default StyleSheet.create(getStyles);
