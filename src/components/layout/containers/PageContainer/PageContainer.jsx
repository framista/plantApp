import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './PageContainer.styles';

const PageContainer = ({ children }) => {
  const styles = getStyles();
  return <View style={styles.container}>{children}</View>;
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
