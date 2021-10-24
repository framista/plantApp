import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { Header } from '../../../components/layout/typography';
import { statusIucnMessages } from '../../../constants/iucnStatus/iucnDetails';

import getStyles from './StatusDetails.styles';

const StatusDetails = ({ iucnStatus }) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Header text={iucnStatus.scientificName} />
      {Object.keys(iucnStatus).map(key => {
        if (!statusIucnMessages[key]) {
          return null;
        }
        return (
          <View style={styles.detailsContainer} key={key}>
            <Text style={styles.textSecondary}>{statusIucnMessages[key]}:</Text>
            <Text style={styles.textPrimary}>{iucnStatus[key] || '-'}</Text>
          </View>
        );
      })}
    </View>
  );
};

StatusDetails.propTypes = {
  iucnStatus: PropTypes.shape({}),
};
export default StatusDetails;
