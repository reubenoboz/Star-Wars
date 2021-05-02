import starWarsAxiosInstance from '../axios/starwars.axios'
import {planetsApi} from '../apis/planet.api'
import { appNotification } from '../../components';

//Get All Planets
export const GetAllPlanets = async () => {
    try {
      const response = await starWarsAxiosInstance.get(
        planetsApi.getAllPlanets,
      );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };
  
  //Get a Planet
  export const getSinglePlanet = async (id) => {
    try {
        const response = await starWarsAxiosInstance.get(
            planetsApi.getAPlanet + id,
          );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };