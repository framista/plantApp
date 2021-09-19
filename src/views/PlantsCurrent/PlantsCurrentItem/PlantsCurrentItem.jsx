import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { showPlantDetails } from '../../../store/plantsCurrent/plantsCurrent.actions';

import getStyles from './PlantsCurrentItem.style';

const PlantsCurrentItem = ({ plant }) => {
  const {
    gbifId,
    scientificName,
    familyScientificName,
    genusScientificName,
    score,
    commonNames,
  } = plant;
  const dispatch = useDispatch();
  const styles = getStyles();

  const openDetails = () => {
    dispatch(showPlantDetails(gbifId));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={openDetails}
      disabled={!gbifId}>
      <View style={styles.content}>
        <Text style={styles.title}>{scientificName}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.textSecondary}>Family:</Text>
          <Text style={styles.textPrimary}>{familyScientificName}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.textSecondary}>Genus:</Text>
          <Text style={styles.textPrimary}>{genusScientificName}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.textSecondary}>Score:</Text>
          <Text style={styles.textPrimary}>{score}</Text>
        </View>
        <View style={styles.namesContainer}>
          {commonNames.map((name, index) => (
            <Text key={index} style={styles.textName}>
              {name}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

PlantsCurrentItem.propTypes = {
  plant: PropTypes.shape({
    scientificName: PropTypes.string,
    familyScientificName: PropTypes.string,
    genusScientificName: PropTypes.string,
    score: PropTypes.number,
    commonNames: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PlantsCurrentItem;
