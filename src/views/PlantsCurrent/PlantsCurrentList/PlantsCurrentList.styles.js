import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GREEN,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: colors.LIGHT_GREEN,
  },
});

export default StyleSheet.create(getStyles);
