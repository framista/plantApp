import * as AT from '../actionTypes';
import * as MT from '../../constants/modal/modalTypes';
import { readImageFile } from '../../services/fileOperation/fileOperation';
import { identifyPlant } from '../../services/plantApi/plantApi';
import {
  addPlantToStorage,
  getFormattedPlantDetails,
  getFormattedPlants,
} from '../../utils/plantHelper';
import * as RootNavigation from '../../components/layout/navigation/MainNavigation/RootNavigation';
import {
  showModal,
  hideModal,
  showInfoModal,
} from '../uiState/uiState.actions';
import { fetchPlantInfoByGbifId } from '../../services/gbifApi/gbifApi';

const fetchIdentyfingPlantError = data => dispatch => {
  const title = data.error;
  const text = `Try again. ${data.message}`;
  dispatch(showInfoModal(title, text));
};

const fetchIdentyfingPlantSuccess = plants => dispatch => {
  dispatch({
    type: AT.GET_IDENTIFIED_PLANTS,
    payload: plants,
  });
  dispatch(hideModal());
  RootNavigation.navigate('PlantsCurrent');
};

export const fetchIdentyfingPlant = base64 => async dispatch => {
  try {
    dispatch(showModal(MT.LOADING_MODAL));
    const data = await identifyPlant(base64);
    if (data.error) {
      dispatch(fetchIdentyfingPlantError(data));
      return;
    }
    const results = data.results;
    const plants = getFormattedPlants(results);
    dispatch(fetchIdentyfingPlantSuccess(plants));
  } catch (err) {
    dispatch(
      fetchIdentyfingPlantError({ error: 'Error', message: 'Unknown error.' }),
    );
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

const getPlantDetailsSuccess = plantDetails => ({
  type: AT.GET_PLANT_DETAILS,
  payload: plantDetails,
});

const getPlantDetailsError = () => dispatch => {
  const title = 'Error';
  const text = 'Not found GBIF information. Try again.';
  dispatch(showInfoModal(title, text));
};

export const showPlantDetails = gbifId => async dispatch => {
  try {
    dispatch(showModal(MT.LOADING_MODAL));
    const result = await fetchPlantInfoByGbifId(gbifId);
    const data = await result.json();
    if (data.results.length > 0) {
      const plantDetails = getFormattedPlantDetails(data.results);
      await addPlantToStorage(gbifId, plantDetails);
      dispatch(getPlantDetailsSuccess(plantDetails));
      dispatch(hideModal());
      RootNavigation.navigate('PlantDetails');
    } else {
      dispatch(getPlantDetailsError());
    }
  } catch (err) {
    dispatch(getPlantDetailsError());
  }
};
