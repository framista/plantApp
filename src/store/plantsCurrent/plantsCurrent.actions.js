import * as AT from '../actionTypes';
import * as MT from '../../constants/modal/modalTypes';
import { readImageFile } from '../../services/fileOperation/fileOperation';
import { identifyPlant } from '../../services/plantApi/plantApi';
import { getFormattedPlants } from '../../utils/plantHelper';
import * as RootNavigation from '../../components/layout/navigation/MainNavigation/RootNavigation';
import { showModal, hideModal } from '../uiState/uiState.actions';

export const fetchIdentyfingPlant = base64 => async dispatch => {
  try {
    dispatch(showModal(MT.LOADING_MODAL));
    const res = await identifyPlant(base64);
    const data = await res.json();
    if (data.error) {
      console.log(data);
      dispatch(
        showModal(MT.INFO_MODAL, {
          title: data.error,
          text: `Try again. ${data.message}`,
        }),
      );
      return;
    }
    const results = data.results;
    const plants = getFormattedPlants(results);
    dispatch({
      type: AT.GET_IDENTIFIED_PLANTS,
      payload: plants,
    });
    dispatch(hideModal());
    RootNavigation.navigate('PlantsCurrent');
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlantsFromGallery = uri => async (dispatch, getState) => {
  try {
    const base64 = await readImageFile(uri);
    dispatch(fetchIdentyfingPlant(base64));
  } catch (error) {
    console.log(error);
  }
};
