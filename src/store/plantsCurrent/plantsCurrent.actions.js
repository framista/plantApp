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
import { showModal, hideModal } from '../uiState/uiState.actions';
import { fetchPlantInfoByGbifId } from '../../services/gbifApi/gbifApi';

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

const getPlantDetailsSuccess = plantDetails => ({
  type: AT.GET_PLANT_DETAILS,
  payload: plantDetails,
});

export const showPlantDetails = gbifId => async dispatch => {
  try {
    const result = await fetchPlantInfoByGbifId(gbifId);
    const data = await result.json();
    if (data.results.length > 0) {
      const plantDetails = getFormattedPlantDetails(data.results);
      await addPlantToStorage(gbifId, plantDetails);
      dispatch(getPlantDetailsSuccess(plantDetails));
      RootNavigation.navigate('PlantDetails');
    }
  } catch (err) {
    console.log(err);
  }
};
