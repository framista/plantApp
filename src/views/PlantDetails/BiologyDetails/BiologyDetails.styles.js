import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  textSecondary: {
    marginRight: 5,
    color: colors.GRAY,
    fontSize: 16,
  },
  textPrimary: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default StyleSheet.create(getStyles);
