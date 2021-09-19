import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/layout/colors';

const getStyles = () => ({
  text: {
    color: colors.BLACK,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 10,
  },
});

export default StyleSheet.create(getStyles);
