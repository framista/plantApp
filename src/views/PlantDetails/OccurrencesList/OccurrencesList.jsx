import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import OccurrencesListItem from '../OccurrencesListItem/OccurrencesListItem';

import getStyles from './OccurrencesList.styles';

const OccurrencesList = ({ occurrences }) => {
  const styles = getStyles();
  return (
    <FlatList
      data={occurrences}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <OccurrencesListItem occurrence={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.flatList}
    />
  );
};

OccurrencesList.propTypes = {
  occurrences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default OccurrencesList;
