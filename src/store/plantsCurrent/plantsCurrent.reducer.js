import * as AT from '../actionTypes';

const initialState = {
  plants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_IDENTIFIED_PLANTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
