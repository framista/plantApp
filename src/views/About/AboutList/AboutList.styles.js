import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default StyleSheet.create(getStyles);
