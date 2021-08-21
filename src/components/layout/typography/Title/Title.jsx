import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './Title.styles';

const Title = ({ text }) => {
  const styles = getStyles();
  return <Text style={styles.text}>{text}</Text>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
