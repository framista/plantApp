import * as AT from '../actionTypes';
import * as MT from '../../constants/modal/modalTypes';
import { getFormattedIucnStatus } from '../../utils/plantHelper';
import * as RootNavigation from '../../components/layout/navigation/MainNavigation/RootNavigation';
import { showModal, hideModal } from '../uiState/uiState.actions';
import {
  fetchIucnCountriesOccurrences,
  fetchPlantIucnStatusByName,
} from '../../services/iucnApi/iucnApi';

const fetchingIucnStatusSuccessful = iucnStatus => dispatch => {
  dispatch({
    type: AT.GET_IUCN_STATUS,
    payload: iucnStatus,
  });
  RootNavigation.navigate('IucnStatus');
};

const notFoundIucnStatus = () => dispatch => {
  dispatch(
    showModal(MT.INFO_MODAL, {
      title: 'Not found',
      text: "IUCN status was't found. Try again.",
    }),
  );
};

export const showIucnStatus = name => async dispatch => {
  try {
    dispatch(showModal(MT.LOADING_MODAL));
    const data = await fetchPlantIucnStatusByName(name);
    if (data.result.length > 0) {
      const iucnStatus = getFormattedIucnStatus(data.result[0]);
      const countries = await fetchIucnCountriesOccurrences(iucnStatus.taxonId);
      dispatch(fetchingIucnStatusSuccessful({ ...iucnStatus, countries }));
      dispatch(hideModal());
    } else {
      dispatch(notFoundIucnStatus());
    }
  } catch (err) {
    dispatch(notFoundIucnStatus());
  }
};
