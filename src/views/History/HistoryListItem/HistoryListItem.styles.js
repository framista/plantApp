import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.PURE_WHITE,
    elevation: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default StyleSheet.create(getStyles);
