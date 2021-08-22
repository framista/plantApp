import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';

const getStyles = withGradient => ({
  container: {
    alignItems: 'center',
    elevation: 4,
    marginBottom: 20,
    borderRadius: 20,
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    color: withGradient ? colors.WHITE : colors.GREEN,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
});

export default StyleSheet.create(getStyles);
