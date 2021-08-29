import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../constants/layout/colors';
import { ModalContainer } from '../../layout/containers';
import { ModalText, ModalTitle } from '../../layout/typography';

import getStyles from './LoadingModal.style';

const LoadingModal = () => {
  const styles = getStyles();
  return (
    <ModalContainer>
      <ModalTitle text="Loading" />
      <ModalText text={'Please wait'} />
      <ActivityIndicator
        size="large"
        color={colors.GREEN}
        style={styles.indicator}
      />
    </ModalContainer>
  );
};

export default LoadingModal;
