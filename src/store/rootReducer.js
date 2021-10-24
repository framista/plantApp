import { combineReducers } from 'redux';

import plantsCurrent from './plantsCurrent/plantsCurrent.reducer';
import iucnStatus from './iucnStatus/iucnStatus.reducer';
import uiState from './uiState/uiState.reducer';

const rootReducer = combineReducers({
  plantsCurrent,
  iucnStatus,
  uiState,
});

export default rootReducer;
