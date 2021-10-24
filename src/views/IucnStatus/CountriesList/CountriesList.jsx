import React from 'react';
import { FlatList } from 'react-native';

import CountriesListItem from '../CountriesListItem/CountriesListItem';

import getStyles from './CountriesList.styles';

const CountriesList = ({ countries }) => {
  const styles = getStyles();
  return (
    <FlatList
      data={countries}
      renderItem={({ item }) => <CountriesListItem country={item} />}
      keyExtractor={item => item.code}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default CountriesList;
