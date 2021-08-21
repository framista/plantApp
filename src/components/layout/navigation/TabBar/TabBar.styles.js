import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/layout/colors';

const ICON_SIZE = 50;

const getStyles = () => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: ICON_SIZE + 20,
    paddingBottom: 10,
    backgroundColor: colors.LIGHT_GREEN,
  },
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerFocused: {
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
});

export default StyleSheet.create(getStyles);
