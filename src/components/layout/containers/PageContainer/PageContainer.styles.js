import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/layout/colors';
import { widthPixel } from '../../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  container: {
    flex: 1,
    padding: widthPixel(40),
    backgroundColor: colors.LIGHT_GREEN,
  },
});

export default StyleSheet.create(getStyles);
