import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, View } from 'react-native';

import Modals from '../modals';

import getStyles from './RootModal.style';

const RootModal = () => {
  const { modalName, modalProps } = useSelector(state => state.uiState);
  const ModalView = Modals[modalName] || function () {};
  const styles = getStyles();

  return (
    <Modal visible={Boolean(modalName)} animationTypa="fade" transparent>
      <View style={styles.container}>
        <ModalView {...modalProps} />
      </View>
    </Modal>
  );
};

export default RootModal;
