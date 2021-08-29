import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';

const getStyles = withGradient => ({
  container: {
    elevation: 4,
    borderRadius: 20,
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  text: {
    color: withGradient ? colors.WHITE : colors.GREEN,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default StyleSheet.create(getStyles);
