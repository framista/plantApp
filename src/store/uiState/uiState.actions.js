import { INFO_MODAL } from '../../constants/modal/modalTypes';
import * as AT from '../actionTypes';

export const showModal = (modalName, modalProps) => ({
  type: AT.SHOW_MODAL,
  payload: { modalName, modalProps },
});

export const hideModal = () => ({
  type: AT.HIDE_MODAL,
});

export const showInfoModal = (title, text) => dispatch => {
  dispatch(showModal(INFO_MODAL, { title, text }));
};
