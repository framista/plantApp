import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ModalText, ModalTitle } from '../../layout/typography';
import { ModalContainer } from '../../layout/containers';
import { ModalButton } from '../../forms';
import { hideModal } from '../../../store/uiState/uiState.actions';

const InfoModal = () => {
  const { modalProps } = useSelector(state => state.uiState);
  const dispatch = useDispatch();
  const { title, text } = modalProps;

  return (
    <ModalContainer>
      <ModalTitle text={title} />
      <ModalText text={text} />
      <ModalButton onPress={() => dispatch(hideModal())} text={'OK'} primary />
    </ModalContainer>
  );
};

InfoModal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default InfoModal;
