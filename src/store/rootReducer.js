import { combineReducers } from 'redux';

import plantsCurrent from './plantsCurrent/plantsCurrent.reducer';
import plantsHistory from './plantsHistory/plantsHistory.reducer';
import uiState from './uiState/uiState.reducer';

const rootReducer = combineReducers({
  plantsCurrent,
  plantsHistory,
  uiState,
});

export default rootReducer;
