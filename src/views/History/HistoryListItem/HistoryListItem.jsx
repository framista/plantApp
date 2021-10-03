import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { showPlantDetails } from '../../../store/plantsCurrent/plantsCurrent.actions';
import { colors } from '../../../constants/layout/colors';

import getStyles from './HistoryListItem.styles';

const HistoryListItem = ({ item }) => {
  const styles = getStyles();
  const dispatch = useDispatch();

  const openDetails = () => {
    dispatch(showPlantDetails(item.gbif));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openDetails}>
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
