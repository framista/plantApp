import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/layout/colors';

const getStyles = () => ({
  text: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
});

export default StyleSheet.create(getStyles);
