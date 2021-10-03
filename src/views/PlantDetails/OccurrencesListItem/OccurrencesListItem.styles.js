import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';

const IMAGE_SIZE = 150;

const getStyles = () => ({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    marginRight: 10,
    width: 220,
    maxWidth: 220,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: IMAGE_SIZE,
    borderRadius: 20,
  },
  textSecondary: {
    color: colors.GRAY,
    fontSize: 12,
  },
  textPrimary: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
  },
});

export default StyleSheet.create(getStyles);
