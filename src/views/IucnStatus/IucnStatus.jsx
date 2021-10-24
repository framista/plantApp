import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../components/forms';
import { PageContainer } from '../../components/layout/containers';
import CountriesList from './CountriesList/CountriesList';
import StatusDetails from './StatusDetails/StatusDetails';
// import { showIucnStatus } from '../../store/iucnStatus/iucnStatus.actions';

import getStyles from './IucnStatus.styles';

const IucnStatus = () => {
  const iucnStatus = useSelector(state => state.iucnStatus);
  const styles = getStyles();

  const openIucnModal = () => {};

  return (
    <PageContainer style={styles.pageContainer}>
      <View>
        <StatusDetails iucnStatus={iucnStatus} />
        <Button text="IUCN CATEGORIES" icon="info" onPress={openIucnModal} />
        {iucnStatus.countries.length > 0 && (
          <CountriesList countries={iucnStatus.countries} />
        )}
      </View>
    </PageContainer>
  );
};

export default IucnStatus;
