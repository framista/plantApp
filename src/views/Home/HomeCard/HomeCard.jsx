import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, gradients } from '../../../constants/layout/colors';

import getStyles from './HomeCard.styles';

const HomeCard = () => {
  const styles = getStyles();
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient colors={gradients.GREEN} style={styles.linearGradient}>
        <View>
          <Text style={styles.title}>Identify Plant Now</Text>
          <Text style={styles.subtitle}>Take a picture</Text>
        </View>
        <Icon name="add-a-photo" size={60} color={colors.WHITE} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeCard;
