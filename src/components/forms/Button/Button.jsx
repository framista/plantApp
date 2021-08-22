import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, gradients } from '../../../constants/layout/colors';

import getStyles from './Button.style';

const Button = props => {
  const { onPress, text, icon, primary } = props;
  const styles = getStyles(primary);

  const iconColor = primary ? colors.WHITE : colors.GREEN;
  const gradient = primary ? gradients.GREEN : gradients.WHITE;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient colors={gradient} style={styles.linearGradient}>
        <Icon name={icon} size={30} color={iconColor} />
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.string,
  primary: PropTypes.bool,
};

export default Button;
