import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './ModalTitle.styles';

const ModalTitle = ({ text }) => {
  const styles = getStyles();
  return <Text style={styles.text}>{text}</Text>;
};

ModalTitle.propTypes = {
  text: PropTypes.string,
};

export default ModalTitle;
