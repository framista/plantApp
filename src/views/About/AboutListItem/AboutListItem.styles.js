import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    backgroundColor: colors.PURE_WHITE,
    padding: 30,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    elevation: 0.5,
  },
  image: {
    width: 200,
    height: 120,
  },
});

export default StyleSheet.create(getStyles);
