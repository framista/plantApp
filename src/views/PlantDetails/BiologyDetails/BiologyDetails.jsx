import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { Header } from '../../../components/layout/typography';
import { plantDetailsBiologyMessages } from '../../../constants/plants/plantDetail';

import getStyles from './BiologyDetails.styles';

const BiologyDetails = ({ biology }) => {
  const styles = getStyles();
  return (
    <View>
      <Header text={biology.scientificName} />
      {Object.keys(biology).map(key => {
        return (
          <View style={styles.detailsContainer} key={key}>
            <Text style={styles.textSecondary}>
              {plantDetailsBiologyMessages[key]}:
            </Text>
            <Text style={styles.textPrimary}>{biology[key]}</Text>
          </View>
        );
      })}
    </View>
  );
};

BiologyDetails.propTypes = {
  biology: PropTypes.shape({}),
};
export default BiologyDetails;
