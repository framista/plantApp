import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './ModalContainer.styles';

const ModalContainer = ({ children }) => {
  const styles = getStyles();
  return <View style={styles.container}>{children}</View>;
};

ModalContainer.propTypes = {
  children: PropTypes.node,
};

export default ModalContainer;
