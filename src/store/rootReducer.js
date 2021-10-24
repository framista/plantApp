import { combineReducers } from 'redux';

import plantsCurrent from './plantsCurrent/plantsCurrent.reducer';
import plantsHistory from './plantsHistory/plantsHistory.reducer';
import iucnStatus from './iucnStatus/iucnStatus.reducer';
import uiState from './uiState/uiState.reducer';

const rootReducer = combineReducers({
  plantsCurrent,
  plantsHistory,
  iucnStatus,
  uiState,
});

export default rootReducer;
