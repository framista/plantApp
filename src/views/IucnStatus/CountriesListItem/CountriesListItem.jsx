import React from 'react';
import { View, Text } from 'react-native';

import getStyles from './CountriesListItem.styles';

const CountriesListItem = ({ country }) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.country}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.textSecondary}>Origin:</Text>
        <Text style={styles.textPrimary}>{country.origin}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textSecondary}>Presence:</Text>
        <Text style={styles.textPrimary}>{country.presence}</Text>
      </View>
    </View>
  );
};

export default CountriesListItem;
