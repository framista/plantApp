import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import getStyles from './Header.styles';

const Header = ({ text }) => {
  const styles = getStyles();
  return <Text style={styles.text}>{text}</Text>;
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
