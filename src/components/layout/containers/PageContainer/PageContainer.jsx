import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './PageContainer.styles';

const PageContainer = ({ children, style }) => {
  const styles = getStyles();
  return <View style={[styles.container, style]}>{children}</View>;
};

PageContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

export default PageContainer;
