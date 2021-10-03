import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import getStyles from './OccurrencesListItem.styles';

const OccurrencesListItem = ({ occurrence }) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: occurrence.media }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.textPrimary}>{occurrence.country}</Text>
      <Text style={styles.textSecondary}>{occurrence.eventDate}</Text>
    </View>
  );
};

OccurrencesListItem.propTypes = {
  occurrence: PropTypes.shape({
    media: PropTypes.string,
    country: PropTypes.string,
    eventDate: PropTypes.string,
  }),
};

export default OccurrencesListItem;
