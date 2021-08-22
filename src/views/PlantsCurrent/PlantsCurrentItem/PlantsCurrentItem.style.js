import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/layout/colors';

const getStyles = () => ({
  container: {
    padding: 10,
    backgroundColor: colors.LIGHT_GREEN,
  },
  content: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    elevation: 5,
  },
  title: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  textSecondary: {
    marginRight: 5,
    color: colors.GRAY,
    fontSize: 14,
  },
  textPrimary: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: 14,
  },
  namesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  textName: {
    marginBottom: 5,
    marginRight: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.GREEN,
    fontSize: 12,
  },
});

export default StyleSheet.create(getStyles);
