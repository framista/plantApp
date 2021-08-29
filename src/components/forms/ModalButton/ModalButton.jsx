import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { gradients } from '../../../constants/layout/colors';

import getStyles from './ModalButton.style';

const ModalButton = props => {
  const { onPress, text, primary } = props;
  const styles = getStyles(primary);

  const gradient = primary ? gradients.GREEN : gradients.WHITE;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient colors={gradient} style={styles.linearGradient}>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

ModalButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  primary: PropTypes.bool,
};

export default ModalButton;
