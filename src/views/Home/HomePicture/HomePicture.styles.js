import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';

const BUTTON_ICON_SIZE = 80;

const getStyles = () => ({
  cameraContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonContainer: {
    alignItems: 'center',
    height: BUTTON_ICON_SIZE / 2,
    position: 'relative',
  },
  iconContainer: {
    width: BUTTON_ICON_SIZE,
    height: BUTTON_ICON_SIZE,
    borderRadius: BUTTON_ICON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    elevation: 5,
    position: 'absolute',
    top: -60,
  },
});

export default StyleSheet.create(getStyles);
