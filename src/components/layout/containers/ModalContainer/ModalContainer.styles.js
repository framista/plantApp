import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    width: '80%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
});

export default StyleSheet.create(getStyles);
