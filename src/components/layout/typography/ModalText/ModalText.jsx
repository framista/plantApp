import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './ModalText.styles';

const ModalText = ({ text }) => {
  const styles = getStyles();
  return <Text style={styles.text}>{text}</Text>;
};

ModalText.propTypes = {
  text: PropTypes.string,
};

export default ModalText;
