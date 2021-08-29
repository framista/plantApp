import * as AT from '../actionTypes';

const initialState = {
  modalName: '',
  modalProps: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SHOW_MODAL: {
      return { ...state, ...action.payload };
    }
    case AT.HIDE_MODAL: {
      return {
        ...state,
        modalName: '',
        modalProps: {},
      };
    }
    default:
      return state;
  }
};

export default reducer;
