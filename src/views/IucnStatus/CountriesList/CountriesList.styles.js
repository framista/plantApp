import { StyleSheet } from 'react-native';

import { heightPixel } from '../../../utils/normalizeSizesHelper';

const getStyles = () => ({
  contentContainer: {
    paddingBottom: heightPixel(700),
  },
});

export default StyleSheet.create(getStyles);
