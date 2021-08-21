import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    alignItems: 'center',
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    width: '85%',
    height: 100,
    paddingHorizontal: 35,
  },
  title: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: colors.WHITE,
    fontSize: 14,
  },
});

export default StyleSheet.create(getStyles);
