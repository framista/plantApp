import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/forms';
import { PageContainer } from '../../components/layout/containers';
import CountriesList from './CountriesList/CountriesList';
import StatusDetails from './StatusDetails/StatusDetails';
import { showModal } from '../../store/uiState/uiState.actions';
import { IUCN_CATEGORIES_MODAL } from '../../constants/modal/modalTypes';

import getStyles from './IucnStatus.styles';

const IucnStatus = () => {
  const iucnStatus = useSelector(state => state.iucnStatus);
  const styles = getStyles();
  const dispatch = useDispatch();

  const openIucnModal = () => {
    dispatch(showModal(IUCN_CATEGORIES_MODAL));
  };

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
