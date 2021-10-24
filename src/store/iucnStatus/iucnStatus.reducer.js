import * as AT from '../actionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_IUCN_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
