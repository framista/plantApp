import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './Subtitle.styles';

const Subtitle = ({ text }) => {
  const styles = getStyles();
  return <Text style={styles.text}>{text}</Text>;
};

Subtitle.propTypes = {
  text: PropTypes.string,
};

export default Subtitle;
