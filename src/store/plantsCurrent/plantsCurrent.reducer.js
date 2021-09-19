import * as AT from '../actionTypes';

const initialState = {
  plants: [],
  plantDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_IDENTIFIED_PLANTS:
      return { ...state, plants: action.payload };
    case AT.GET_PLANT_DETAILS:
      return { ...state, plantDetails: action.payload };
    default:
      return state;
  }
};

export default reducer;
