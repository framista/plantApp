import * as AT from '../actionTypes';
import { readImageFile } from '../../services/fileOperation/fileOperation';
import { identifyPlant } from '../../services/plantApi/plantApi';
import { getFormattedPlants } from '../../utils/plantHelper';

const fetchIdentyfingPlant = base64 => async dispatch => {
  try {
    const res = await identifyPlant(base64);
    const data = await res.json();
    if (data.error) {
      console.log(data);
      console.log('error');
      return;
    }
    const results = data.results;
    const plants = getFormattedPlants(results);
    dispatch({
      type: AT.GET_IDENTIFIED_PLANTS,
      payload: plants,
    });
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
