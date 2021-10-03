import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import getStyles from './HistoryListItem.styles';
import { colors } from '../../../constants/layout/colors';

const HistoryListItem = ({ item }) => {
  const styles = getStyles();

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.scientificName}</Text>
      <Icon name="read-more" size={40} color={colors.GREEN} />
    </TouchableOpacity>
  );
};

HistoryListItem.propTypes = {
  item: PropTypes.shape({
    scientificName: PropTypes.string,
    gbif: PropTypes.number,
  }),
};

export default HistoryListItem;
